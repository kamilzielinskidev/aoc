import { MoveInPageDiv } from "@/components/MoveInPageDiv";
import { Link, redirect } from "@/navigation";
import { posts } from "@/posts";
import { getLocale, getTranslations } from "next-intl/server";
import { FC } from "react";

const Blog: FC<{ params: { id: string } }> = async ({ params: { id } }) => {
  const blogId = parseInt(id);
  const t = await getTranslations();
  const locale = (await getLocale()) as "en" | "pl";

  if (isNaN(blogId)) {
    redirect("/blog/1");
  }

  const post = posts.find((post) => post.id === blogId);

  if (post === undefined) {
    return (
      <MoveInPageDiv>
        <div className="p-4">
          <h1>{t("Blog.notFound")}</h1>
          <div className="mt-4">
            <Link className="underline text-primary" href="/">
              {t("Blog.backToHome")}
            </Link>
          </div>
        </div>
      </MoveInPageDiv>
    );
  }

  return (
    <MoveInPageDiv>
      <div className="p-4">
        <h1>{post.title[locale]}</h1>
        <p className="mt-4">{post.text[locale]}</p>
        <div className="mt-4">
          <Link className="underline text-primary" href="/">
            {t("Blog.backToHome")}
          </Link>
        </div>
      </div>
    </MoveInPageDiv>
  );
};

export default Blog;
