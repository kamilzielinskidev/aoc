import { MoveInDiv } from "@/components/MoveInDiv";
import { MoveInPageDiv } from "@/components/MoveInPageDiv";
import { Task } from "@/components/Task";

import { getTranslations } from "next-intl/server";

const HeaderSection = async () => {
  const t = await getTranslations();
  return (
    <section>
      <div className="px-4 py-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="text-center">
            <h1 className=" bg-clip-text sm:block">{t("Home.title")}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = async () => {
  const t = await getTranslations();

  return (
    <MoveInPageDiv>
      <HeaderSection />
      <div className="mt-4">
        <MoveInDiv>
          <Task task="1_1" />
        </MoveInDiv>
      </div>
      <div className="mt-4">
        <MoveInDiv>
          <Task task="2_1" />
        </MoveInDiv>
      </div>
      <div className="mt-4">
        <MoveInDiv>
          <Task task="3_1" />
        </MoveInDiv>
      </div>
    </MoveInPageDiv>
  );
};

export default Home;
