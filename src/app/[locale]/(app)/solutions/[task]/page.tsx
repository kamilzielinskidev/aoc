import { MarkdownPreview } from "@/components/MarkdownPreview";
import { MoveInPageDiv } from "@/components/MoveInPageDiv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@/navigation";
import { tasks } from "@/tasks";
import { getLocale, getTranslations } from "next-intl/server";

const taskIsValid = (task: string): task is `${number}_${number}` => {
  return /(\d+)_(\d+)/.test(task);
};

const Task = async ({ params: { task } }: { params: { task: string } }) => {
  const locale = (await getLocale()) as "pl" | "en";
  const t = await getTranslations();

  const taskToDisplay = !taskIsValid(task) ? undefined : tasks[task];

  if (taskToDisplay === undefined) {
    return (
      <MoveInPageDiv>
        <div className="p-4">
          <h1>{t("Solutions.notFound")}</h1>
          <div className="mt-4">
            <Link className="underline text-primary" href="/">
              {t("Solutions.backToHome")}
            </Link>
          </div>
        </div>
      </MoveInPageDiv>
    );
  }

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
                Typescript
              </TabsTrigger>
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="Kotlin"
              >
                Kotlin
              </TabsTrigger>
            </TabsList>
            <TabsContent value="typescript">
              This part is in progress...
            </TabsContent>
            <TabsContent value="Kotlin">
              This part is in progress...
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

export default Task;
