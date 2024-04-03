import { MarkdownPreview } from "@/components/MarkdownPreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tasks } from "@/tasks";
import { getLocale, getTranslations } from "next-intl/server";
import { FC } from "react";
import { MoveInDiv } from "./MoveInDiv";

export const Task: FC<{ task: `${number}_${number}` }> = async ({ task }) => {
  const locale = (await getLocale()) as "pl" | "en";
  const t = await getTranslations();

  const taskToDisplay = tasks[task];

  const Interactive = taskToDisplay.Interactive;

  return (
    <div className="py-4">
      <h1>{taskToDisplay.title[locale]}</h1>
      <div className="mt-4">
        <MoveInDiv>
          <MarkdownPreview source={taskToDisplay.description[locale]} />
        </MoveInDiv>

        <MoveInDiv className="mt-4">
          <Interactive initialValue={taskToDisplay.initialValue} />
        </MoveInDiv>

        <MoveInDiv className="mt-4">
          <Tabs defaultValue="typescript">
            <TabsContent value="typescript">
              <MarkdownPreview source={taskToDisplay.solution.typescript} />
            </TabsContent>
            <TabsContent value="rust">
              <MarkdownPreview source={taskToDisplay.solution.rust} />
            </TabsContent>
            <TabsContent value="kotlin">
              <MarkdownPreview source={taskToDisplay.solution.kotlin} />
            </TabsContent>
            <TabsContent value="go">
              <MarkdownPreview source={taskToDisplay.solution.go} />
            </TabsContent>
            <TabsList className="bg-background border-primary border p-0 mt-2">
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="typescript"
              >
                TypeScript
              </TabsTrigger>
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="rust"
              >
                Rust
              </TabsTrigger>
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="kotlin"
              >
                Kotlin
              </TabsTrigger>
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="go"
              >
                Go
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </MoveInDiv>
      </div>
    </div>
  );
};
