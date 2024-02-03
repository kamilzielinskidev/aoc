import { MoveInDiv } from "@/components/MoveInDiv";
import { MoveInPageDiv } from "@/components/MoveInPageDiv";
import { Button } from "@/components/ui/button";
import { posts } from "@/posts";
import { getLocale, getTranslations } from "next-intl/server";

import Image from "next/image";

const AboutSection = ({
  title,
  text,
  imgUrl,
}: {
  title: string;
  text: string;
  imgUrl: string;
}) => (
  <div className="mt-6 flex flex-col gap-4 items-center md:flex-row md:items-start">
    <div className="flex justify-center items-center">
      <div className="w-52 h-52">
        <Image src={imgUrl} alt="logo" width={200} height={200} />
      </div>
    </div>
    <div className="mt-2">
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <p className="mt-2 text-lg">{text}</p>
    </div>
  </div>
);

const PostPreviewCard = async ({
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
  const t = await getTranslations();

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h3>{title}</h3>
          <p className="text-nowrap">{date}</p>
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

const HeaderSection = async () => {
  const t = await getTranslations();
  return (
    <section>
      <div className="px-4 py-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-72">
            <Image
              src="/elf_przy_biurku_compressed.png"
              alt="logo"
              width={300}
              height={300}
            />
          </div>

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

const truncateUpTo100 = (str: string) => {
  const maxLength = 100;

  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }

  return str;
};

const Home = async () => {
  const t = await getTranslations();
  const locale = (await getLocale()) as "en" | "pl";

  const lastTwoPosts = posts.slice(0, 2).map((post) => ({
    ...post,
    title: post.title[locale],
    text: truncateUpTo100(post.text[locale]),
  }));

  return (
    <MoveInPageDiv>
      <HeaderSection />
      <div className="mt-8">
        <h2 id={sanitizeTextToUrl(t("Home.posts.label"))}>
          {t("Home.posts.label")}
        </h2>
        {lastTwoPosts.map((post) => (
          <MoveInDiv key={post.id}>
            <PostPreviewCard
              date={post.date}
              title={post.title}
              text={post.text}
              url={`/blog/${post.id}`}
            />
          </MoveInDiv>
        ))}
      </div>

      <div className="mt-8 snap-start scroll-m-2">
        <h2 className="text-center" id={sanitizeTextToUrl(t("Home.about"))}>
          {t("Home.about")}
        </h2>
        <MoveInDiv>
          <AboutSection
            imgUrl="/mikolaj_hackuje_compressed.png"
            title={t("Home.whatIs.title")}
            text={t("Home.whatIs.text")}
          />
        </MoveInDiv>
        <MoveInDiv>
          <AboutSection
            imgUrl="/elf_mysli_o_czyms_compressed.png"
            title={t("Home.why.title")}
            text={t("Home.why.text")}
          />
        </MoveInDiv>
        <MoveInDiv>
          <AboutSection
            imgUrl="/mikolaj_robi_matematyke_compressed.png"
            title={t("Home.whatWillYouFind.title")}
            text={t("Home.whatWillYouFind.text")}
          />
        </MoveInDiv>
      </div>
    </MoveInPageDiv>
  );
};

export default Home;
