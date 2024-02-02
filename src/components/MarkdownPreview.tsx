"use client";

import { FC } from "react";
import MarkdownPreviewLib from "@uiw/react-markdown-preview";

export const MarkdownPreview: FC<{ source: string }> = ({ source }) => {
  return (
    <MarkdownPreviewLib
      source={source}
      style={{ backgroundColor: "unset", fontFamily: "var(--font-family)" }}
    />
  );
};
