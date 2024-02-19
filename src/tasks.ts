import { FC } from "react";
import task1_1 from "./tasks/1_1";
import task2_1 from "./tasks/2_1";
import task3_1 from "./tasks/3_1";
import interactive1_1 from "./tasks/1_1_interactive";
import interactive2_1 from "./tasks/2_1_interactive";
import interactive3_1 from "./tasks/3_1_interactive";

export const tasks: Record<
  `${number}_${number}`,
  {
    id: `${number}_${number}`;
    title: {
      pl: string;
      en: string;
    };
    description: {
      pl: string;
      en: string;
    };
    initialValue: string;
    Interactive: FC<{ initialValue: string }>;
  }
> = {
  "1_1": {
    id: "1_1",
    title: {
      pl: "Trebusz?!",
      en: "Trebuchet?!",
    },
    description: {
      pl: task1_1.task_pl,
      en: task1_1.task_en,
    },
    initialValue: task1_1.initialValue,
    Interactive: interactive1_1,
  },
  "2_1": {
    id: "2_1",
    title: {
      pl: "Zagadka Kostki",
      en: "Cube Conundrum",
    },
    description: {
      pl: task2_1.task_pl,
      en: task2_1.task_en,
    },
    initialValue: task2_1.initialValue,
    Interactive: interactive2_1,
  },
  "3_1": {
    id: "3_1",
    title: {
      pl: "Silnik",
      en: "Engine",
    },
    description: {
      pl: task3_1.task_pl,
      en: task3_1.task_en,
    },
    initialValue: task3_1.initialValue,
    Interactive: interactive3_1,
  },
};

export const tasksList = [tasks["1_1"], tasks["2_1"], tasks["3_1"]];
