import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["pl", "en"],
  localePrefix: "always",
  defaultLocale: "pl",
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
