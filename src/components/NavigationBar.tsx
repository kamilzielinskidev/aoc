import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { FC } from "react";

export const NavigationBar: FC<{}> = () => {
  const locale = useLocale() as "en" | "pl";

  return (
    <div className="flex justify-center p-2">
      <span>[</span>
      {locale === "en" ? (
        <span>EN</span>
      ) : (
        <Link href="/" locale="en" className="underline text-primary">
          EN
        </Link>
      )}
      <span>/</span>
      {locale === "pl" ? (
        <span>PL</span>
      ) : (
        <Link href="/" locale="pl" className="underline text-primary">
          PL
        </Link>
      )}
      <span>]</span>
    </div>
  );
};
