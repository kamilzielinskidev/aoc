import { MarkdownPreview } from "@/components/MarkdownPreview";
import { tasks } from "@/tasks";
import { getLocale } from "next-intl/server";

const Day1 = async () => {
  const locale = (await getLocale()) as "pl" | "en";
  const task = tasks.at(0);

  if (task === undefined) {
    return null;
  }

  return (
    <div className="py-4">
      <h1>{task.title[locale]}</h1>
      <div className="mt-4">
        <MarkdownPreview source={task.description[locale]} />
      </div>
    </div>
  );
};

export default Day1;
