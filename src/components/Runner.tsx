"use client";

import { useTranslations } from "next-intl";
import { FC, ReactNode, useCallback, useState } from "react";
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
        <Textarea
          value={inputValue}
          onChange={handleInputChange}
          disabled={isRunning}
          rows={8}
        />
      </div>
      <div className="font-bold text-2xl">{t("Day.Animation.PlayAround")}</div>
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
        <div className="mt-2">{animateComponent(inputValue)}</div>
      )}
    </div>
  );
};
