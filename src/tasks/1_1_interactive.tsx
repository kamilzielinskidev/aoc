"use client";
import { Runner } from "@/components/Runner";
import { delayPromise } from "@/utils/delayPromise";
import { FC, useEffect, useState } from "react";

const Animation: FC<{ data: string }> = ({ data }) => {
  const lines = data.split("\n");
  const chars = lines.map((line) => line.split(""));
  const dataToWorkOn = chars.map((line) =>
    line.map((char) => ({ char, color: "white" }))
  );

  const [dataToDisplay, setDataToDisplay] = useState(dataToWorkOn);
  const [error, setError] = useState<string | null>(null);
  const [linesResults, setLinesResults] = useState<number[]>([]);

  const run = async () => {
    for (let i = 0; i < dataToDisplay.length; i++) {
      const line = dataToDisplay[i];
      const firstDigitIndex = line.findIndex((char) => /\d/.test(char.char));
      const lastDigitIndex = line
        .slice()
        .reverse()
        .findIndex((char) => /\d/.test(char.char));

      if (firstDigitIndex === -1 || lastDigitIndex === -1) {
        setError("No digits found");
        return;
      }

      const lineCopy = structuredClone(line);

      lineCopy.at(firstDigitIndex)!.color = "primary";
      lineCopy.at(line.length - lastDigitIndex - 1)!.color = "primary";

      const firstDigitValue = parseInt(line[firstDigitIndex].char, 10);
      const lastDigitValue = parseInt(
        line[line.length - lastDigitIndex - 1].char,
        10
      );

      const result = parseInt(`${firstDigitValue}${lastDigitValue}`);
      setLinesResults((prev) => [...prev, result]);

      setDataToDisplay((prev) => {
        const copy = [...prev];
        copy[i] = lineCopy;
        return copy;
      });

      await delayPromise(100);
    }
  };

  useEffect(() => {
    run();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <pre>
      <div className="text-primary">
        {linesResults.reduce((acc, curr) => acc + curr, 0)}
      </div>
      {dataToDisplay.map((line, i) => (
        <div key={i}>
          {line.map((char, j) => (
            <span
              key={j}
              className={`${
                char.color === "white" ? "text-secondary" : "text-primary"
              }`}
            >
              {char.char}
            </span>
          ))}
          <span className="text-primary">
            {linesResults.at(i) !== undefined
              ? ` => ${linesResults.at(i)}`
              : ""}
          </span>
        </div>
      ))}
    </pre>
  );
};

export const Interactive: FC<{ initialValue: string }> = ({ initialValue }) => {
  return (
    <Runner
      id="1_1"
      initialData={initialValue}
      animateComponent={(data) => <Animation data={data} />}
    />
  );
};

export default Interactive;
