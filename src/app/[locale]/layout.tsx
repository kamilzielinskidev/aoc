import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  return (
    <html lang={locale}>
      <body
        className={cn(
          "bg-background antialiased dark text-foreground",
          jetBrains.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
