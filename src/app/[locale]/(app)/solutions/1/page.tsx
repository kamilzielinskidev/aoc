import { MarkdownPreview } from "@/components/MarkdownPreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tasks } from "@/tasks";
import { getLocale, getTranslations } from "next-intl/server";

const Day1 = async () => {
  const locale = (await getLocale()) as "pl" | "en";
  const t = await getTranslations();
  const task = tasks.at(0);

  if (task === undefined) {
    return null;
  }

  return (
    <div className="py-4">
      <h1>{task.title[locale]}</h1>
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
          <MarkdownPreview source={task.description[locale]} />
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
                value="Rust"
              >
                Rust
              </TabsTrigger>
            </TabsList>
            <TabsContent value="typescript">Some typescript code</TabsContent>
            <TabsContent value="Rust">Some Rust code</TabsContent>
          </Tabs>
        </TabsContent>
        <TabsContent value="try">Try it here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Day1;
