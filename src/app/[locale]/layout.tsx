import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advent of Code 2023",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          "bg-background antialiased dark text-foreground",
          jetBrains.className
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
