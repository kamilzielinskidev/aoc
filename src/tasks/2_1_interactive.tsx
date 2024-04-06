"use client";
import { Runner } from "@/components/Runner";
import { delayPromise } from "@/utils/delayPromise";
import { FC, useEffect, useState } from "react";

const parseSingleGame = (data: string) => {
  const gameId = data.match(/Game \d+/);
  if (gameId === null) {
    return null;
  }

  const values = data.match(/:(\s((\d+\s\w+)((,|;)\s))*(\d+\s\w+))/);
  if (values === null) {
    return null;
  }
  const game = values[0].split(": ")[1];
  const colors = game.split("; ");
  const result = colors.map((color) => {
    const colorData = color.split(", ");
    const colorObject = {
      green: 0,
      blue: 0,
      red: 0,
    };
    colorData.forEach((color) => {
      const [amount, colorName] = color.split(" ");
      colorObject[colorName as keyof typeof colorObject] = parseInt(amount);
    });
    return colorObject;
  });
  return result;
};

const styleSingleLineWithErrorTurns = (
  line: string,
  invalidTurns: number[]
) => {
  const parts = line.split(": ");
  const gameNumber = parts[0];
  const gameData = parts[1].split("; ");
  const result = gameData.map((turn, index) => {
    if (invalidTurns.includes(index)) {
      return (
        <span className="text-red-500" key={index}>
          {turn}
          {gameData.length - 1 === index ? "" : "; "}
        </span>
      );
    }
    return (
      <span key={index}>
        {turn}
        {gameData.length - 1 === index ? "" : "; "}
      </span>
    );
  });
  return (
    <div>
      <span>{gameNumber}</span>: {result}
    </div>
  );
};

const Animation: FC<{ data: string }> = ({ data }) => {
  const lines = data.split("\n");
  const games = lines.map(parseSingleGame);

  const [validLines, setValidLines] = useState<number[]>([]);
  const [invalidLines, setInvalidLines] = useState<number[]>([]);
  const [invalidTurns, setInvalidTurns] = useState<number[][]>([]);
  const [error, setError] = useState<string | null>(null);

  const run = async () => {
    for (let i = 0; i < games.length; i++) {
      const game = games[i];
      if (game === undefined || game === null) {
        setError(`Invalid game data at line ${i + 1}`);
        return;
      }

      const areAllGamesValid = game.every((turn) => {
        return turn.red <= 12 && turn.green <= 13 && turn.blue <= 14;
      });

      if (areAllGamesValid) {
        setValidLines((prev) => [...prev, i]);
      }

      if (!areAllGamesValid) {
        setInvalidLines((prev) => [...prev, i]);
        const invalidTurns = game.reduce((acc, curr, index) => {
          if (curr.red > 12 || curr.green > 13 || curr.blue > 14) {
            acc.push(index);
          }
          return acc;
        }, [] as number[]);
        setInvalidTurns((prev) => [...prev, invalidTurns]);
      }

      await delayPromise(100);
    }
  };

  useEffect(() => {
    run();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const sum = validLines.reduce((acc, curr) => acc + curr + 1, 0);

  return (
    <pre>
      <div className="text-primary">{sum}</div>
      {lines.map((line, index) => {
        if (validLines.includes(index)) {
          return (
            <div className="text-primary" key={index}>
              {line}
            </div>
          );
        }

        if (invalidLines.includes(index)) {
          return styleSingleLineWithErrorTurns(
            line,
            invalidTurns[invalidLines.indexOf(index)]
          );
        }

        return <div key={index}>{line}</div>;
      })}
    </pre>
  );
};

export const Interactive: FC<{ initialValue: string }> = ({ initialValue }) => {
  return (
    <Runner
      id="2_1"
      initialData={initialValue}
      animateComponent={(data) => <Animation data={data} />}
    />
  );
};

export default Interactive;
