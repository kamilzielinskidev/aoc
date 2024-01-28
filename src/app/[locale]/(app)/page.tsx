import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection = ({ title, text }: { title: string; text: string }) => (
  <div className="mt-6">
    <h3 className="text-2xl font-extrabold">{title}</h3>
    <p className="mt-2 text-lg">{text}</p>
  </div>
);

const PostPreviewCard = ({
  title,
  text,
  url,
  date,
}: {
  title: string;
  text: string;
  url: string;
  date: string;
}) => {
  const t = useTranslations();

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className="">
          <p className="line-clamp-2">{text}</p>
          <a className="underline text-primary" href={url}>
            {t("Home.posts.readMore")}
          </a>
        </div>
      </div>
    </div>
  );
};

const sanitizeTextToUrl = (str: string) => str.toLowerCase().replace(" ", "-");

const HeaderSection = () => {
  const t = useTranslations();
  return (
    <section>
      <div className="px-4 py-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <Image
            src="/elf_przy_biurku_compressed.png"
            alt="logo"
            width={300}
            height={300}
          />

          <div className="text-center">
            <h1 className=" bg-clip-text sm:block">{t("Home.title")}</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`#${sanitizeTextToUrl(t("Home.posts.label"))}`}>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary-foreground hover:text-primary"
                >
                  {t("Home.header.goToLatestPosts")}
                </Button>
              </a>
              <a href={`#${sanitizeTextToUrl(t("Home.about"))}`}>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary-foreground hover:text-primary"
                >
                  {t("Home.header.goToAbout")}
                </Button>
              </a>
              <a href="/solutions">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary-foreground hover:text-primary"
                >
                  {t("Home.header.goToSolutions")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const t = useTranslations();

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll px-8 md:px-32 lg:px-60">
      <div className="snap-start scroll-m-2">
        <HeaderSection />
      </div>
      <div className="mt-8 snap-start scroll-m-2">
        <h2 id={sanitizeTextToUrl(t("Home.posts.label"))}>
          {t("Home.posts.label")}
        </h2>
        <PostPreviewCard
          date="2020-12-01"
          title="Day 1: Report Repair"
          text="After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island."
          url="/posts/1"
        />
        <PostPreviewCard
          date="2020-12-02"
          title="Day 2: Password Philosophy"
          text="Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan."
          url="/posts/2"
        />
      </div>

      <div className="mt-8 snap-start scroll-m-2">
        <h2 className="text-center" id={sanitizeTextToUrl(t("Home.about"))}>
          {t("Home.about")}
        </h2>
        <AboutSection
          title={t("Home.whatIs.title")}
          text={t("Home.whatIs.text")}
        />
        <AboutSection title={t("Home.why.title")} text={t("Home.why.text")} />
        <AboutSection
          title={t("Home.whatWillYouFind.title")}
          text={t("Home.whatWillYouFind.text")}
        />
      </div>
    </div>
  );
};

export default Home;
