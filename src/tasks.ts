import { FC } from "react";
import task1_1 from "./tasks/1_1";
import interactive1_1 from "./tasks/1_1_interactive";

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
    Interactive: FC;
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
    Interactive: interactive1_1,
  },
};

export const tasksList = [tasks["1_1"]];
