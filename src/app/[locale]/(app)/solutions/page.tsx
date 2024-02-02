import { Link } from "@/navigation";
import { tasks } from "@/tasks";
import { getLocale, getTranslations } from "next-intl/server";

const Solutions = async () => {
  const t = await getTranslations();
  const locale = (await getLocale()) as "pl" | "en";

  return (
    <div className="p-4">
      <h1>{t("Solutions.title")}</h1>
      <div className="mt-4">
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={task.title[locale]}>
                <Link
                  href={`/solutions/${index + 1}`}
                  className="underline text-primary"
                >
                  <span>{index + 1}. </span>
                  <span>{task.title[locale]}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Solutions;
