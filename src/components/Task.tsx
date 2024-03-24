import { MarkdownPreview } from "@/components/MarkdownPreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tasks } from "@/tasks";
import { getLocale, getTranslations } from "next-intl/server";
import { FC } from "react";

export const Task: FC<{ task: `${number}_${number}` }> = async ({ task }) => {
  const locale = (await getLocale()) as "pl" | "en";
  const t = await getTranslations();

  const taskToDisplay = tasks[task];

  const Interactive = taskToDisplay.Interactive;

  return (
    <div className="py-4">
      <h1>{taskToDisplay.title[locale]}</h1>
      <Tabs defaultValue="task" className="mt-4">
        <TabsList className="bg-background border-primary border p-0">
          <TabsTrigger
            className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
            value="task"
          >
            {t("Day.Tabs.Task")}
          </TabsTrigger>
          <TabsTrigger
            className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
            value="solutions"
          >
            {t("Day.Tabs.Solutions")}
          </TabsTrigger>
          <TabsTrigger
            className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
            value="try"
          >
            {t("Day.Tabs.Try it")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="task">
          <MarkdownPreview source={taskToDisplay.description[locale]} />
        </TabsContent>
        <TabsContent value="solutions">
          <Tabs defaultValue="typescript">
            <TabsList className="bg-background border-primary border p-0">
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="typescript"
              >
                TypeScript
              </TabsTrigger>
            </TabsList>
            <TabsContent value="typescript">
              <MarkdownPreview source={taskToDisplay.solution.typescript} />
            </TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="try">
          <Interactive initialValue={taskToDisplay.initialValue} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
