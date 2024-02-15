import { MoveInPageDiv } from "@/components/MoveInPageDiv";
import { Link } from "@/navigation";
import { tasksList } from "@/tasks";
import { getLocale, getTranslations } from "next-intl/server";

const Solutions = async () => {
  const t = await getTranslations();
  const locale = (await getLocale()) as "pl" | "en";

  return (
    <MoveInPageDiv>
      <div className="p-4">
        <h1>{t("Solutions.title")}</h1>
        <div className="mt-4">
          <ul>
            {tasksList.map((task) => {
              return (
                <li key={task.title[locale]}>
                  <Link
                    href={`/solutions/${task.id}`}
                    className="underline text-primary"
                  >
                    <span>{task.title[locale]}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </MoveInPageDiv>
  );
};

export default Solutions;
