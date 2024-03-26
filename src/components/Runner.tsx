"use client";

import { useTranslations } from "next-intl";
import { FC, ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export const Runner: FC<{
  initialData: string;
  animateComponent: (data: string) => ReactNode;
}> = ({ initialData, animateComponent }) => {
  const t = useTranslations();
  const [inputValue, setInputValue] = useState(initialData);
  const [isRunning, setIsRunning] = useState(false);

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.target.value);
  }

  function handleRun() {
    setIsRunning(true);
  }

  function handleReset() {
    setInputValue(initialData);
    setIsRunning(false);
  }

  return (
    <div>
      <div className="mt-2">
        {isRunning ? (
          <div className="mt-2 h-44 overflow-auto">
            {animateComponent(inputValue)}
          </div>
        ) : (
          <div>
            <Textarea
              value={inputValue}
              onChange={handleInputChange}
              disabled={isRunning}
              rows={8}
            />
          </div>
        )}
      </div>
      <div className="mt-2">
        {isRunning ? (
          <Button
            className="border-primary text-primary hover:bg-primary-foreground hover:text-primary"
            variant="outline"
            onClick={handleReset}
          >
            {t("Day.Animation.Reset")}
          </Button>
        ) : (
          <Button
            className="border-primary text-primary hover:bg-primary-foreground hover:text-primary"
            variant="outline"
            onClick={handleRun}
          >
            {t("Day.Animation.Run")}
          </Button>
        )}
      </div>
    </div>
  );
};
