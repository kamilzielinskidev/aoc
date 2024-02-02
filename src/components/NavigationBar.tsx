"use client";

import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";
import { FC } from "react";

const getPreviousDayFromPathname = (pathname: string) => {
  const day = pathname.split("/").at(-1);

  if (day === undefined) {
    return null;
  }

  try {
    const parsedDay = parseInt(day);

    if (isNaN(parsedDay)) {
      return null;
    }

    if (parsedDay === 0) {
      return null;
    }

    return parsedDay - 1;
  } catch (_) {
    return null;
  }
};

const getNextDayFromPathname = (pathname: string) => {
  const day = pathname.split("/").at(-1);

  if (day === undefined) {
    return 1;
  }

  try {
    const parsedDay = parseInt(day);

    if (isNaN(parsedDay)) {
      return 1;
    }

    if (parsedDay === 1) {
      return null;
    }

    return parsedDay + 1;
  } catch (_) {
    return null;
  }
};

export const NavigationBar: FC<{}> = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const previousDay = getPreviousDayFromPathname(pathname);
  const nextDay = getNextDayFromPathname(pathname);
  const renderHomeLink = pathname !== "/";
  const renderSolutionLink = pathname !== "/solutions";

  return (
    <div className="flex justify-between p-2">
      {previousDay === null ? (
        <div />
      ) : previousDay === 0 ? (
        <Link href="/solutions" className="underline text-primary">
          {"<<<"}
        </Link>
      ) : (
        <Link
          href={`/solutions/${previousDay}`}
          className="underline text-primary"
        >
          {"<<<"}
        </Link>
      )}
      <div className="flex gap-8">
        {!renderHomeLink ? null : (
          <Link href="/" className="underline text-primary">
            {t("Navigation.home")}
          </Link>
        )}
        {!renderSolutionLink ? null : (
          <Link href="/solutions" className="underline text-primary">
            {t("Navigation.solutions")}
          </Link>
        )}
      </div>
      {nextDay === null ? (
        <div />
      ) : (
        <Link href={`/solutions/${nextDay}`} className="underline text-primary">
          {">>>"}
        </Link>
      )}
    </div>
  );
};
