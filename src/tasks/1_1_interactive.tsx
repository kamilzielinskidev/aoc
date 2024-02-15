"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { FC, memo, useCallback, useEffect, useState } from "react";

const delayPromise = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

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
        .toReversed()
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

      const result = firstDigitValue + lastDigitValue;
      setLinesResults((prev) => [...prev, result]);

      setDataToDisplay((prev) => {
        const copy = [...prev];
        copy[i] = lineCopy;
        return copy;
      });

      await delayPromise(1000);
    }
  };

  useEffect(() => {
    run();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
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
                  char.color === "white" ? "text-white" : "text-primary"
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
    </div>
  );
};

const initialInputValue = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";

// TODO: make this reuseable, so only animation will be different
export const Interactive: FC = () => {
  const t = useTranslations();
  const [inputValue, setInputValue] = useState(initialInputValue);

  const [isRunning, setIsRunning] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const handleRun = useCallback(() => {
    setIsRunning(true);
  }, []);

  const handleReset = useCallback(() => {
    setInputValue(initialInputValue);
    setIsRunning(false);
  }, []);

  return (
    <div>
      <Textarea
        value={inputValue}
        onChange={handleInputChange}
        disabled={isRunning}
      />
      <div className="flex gap-2 mt-2">
        <Button
          className="border-primary text-primary hover:bg-primary-foreground hover:text-primary"
          variant="outline"
          onClick={handleRun}
        >
          {t("Day.Animation.Run")}
        </Button>
        <Button
          className="border-primary text-primary hover:bg-primary-foreground hover:text-primary"
          variant="outline"
          onClick={handleReset}
        >
          {t("Day.Animation.Reset")}
        </Button>
      </div>
      {!isRunning ? null : (
        <div className="mt-2">
          <Animation data={inputValue} />
        </div>
      )}
    </div>
  );
};

export default Interactive;
