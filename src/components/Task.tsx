import { MarkdownPreview } from "@/components/MarkdownPreview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tasks } from "@/tasks";
import { getLocale } from "next-intl/server";
import { FC } from "react";
import { MoveInDiv } from "./MoveInDiv";
import GoIcon from "../icons/go-svgrepo-com.svg";
import KotlinIcon from "../icons/kotlin-svgrepo-com.svg";
import RustIcon from "../icons/rust-svgrepo-com.svg";
import TypeScriptIcon from "../icons/typescript-svgrepo-com.svg";
import Image from "next/image";

export const Task: FC<{ task: `${number}_${number}` }> = async ({ task }) => {
  const locale = (await getLocale()) as "pl" | "en";

  const taskToDisplay = tasks[task];

  const Interactive = taskToDisplay.Interactive;

  return (
    <div className="py-4">
      <h1>{taskToDisplay.title[locale]}</h1>
      <div className="mt-4">
        <MoveInDiv>
          <MarkdownPreview source={taskToDisplay.description[locale]} />
        </MoveInDiv>

        <MoveInDiv className="mt-4">
          <Interactive initialValue={taskToDisplay.initialValue} />
        </MoveInDiv>

        <MoveInDiv className="mt-4">
          <Tabs defaultValue="typescript">
            <TabsContent value="typescript">
              <MarkdownPreview source={taskToDisplay.solution.typescript} />
            </TabsContent>
            <TabsContent value="rust">
              <MarkdownPreview source={taskToDisplay.solution.rust} />
            </TabsContent>
            <TabsContent value="kotlin">
              <MarkdownPreview source={taskToDisplay.solution.kotlin} />
            </TabsContent>
            <TabsContent value="go">
              <MarkdownPreview source={taskToDisplay.solution.go} />
            </TabsContent>
            <TabsList className="bg-background border-primary border p-0 mt-2">
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="typescript"
              >
                <div className="flex gap-2 items-center">
                  <span>
                    <Image
                      src={TypeScriptIcon}
                      alt="TypeScript"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span>TypeScript</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="rust"
              >
                <div className="flex gap-2 items-center">
                  <span>
                    <Image src={RustIcon} alt="Rust" width={24} height={24} />
                  </span>
                  <span>Rust</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="kotlin"
              >
                <div className="flex gap-2 items-center">
                  <span>
                    <Image
                      src={KotlinIcon}
                      alt="Kotlin"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span>Kotlin</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                className="h-full aria-selected:!bg-primary aria-selected:!text-primary-foreground"
                value="go"
              >
                <div className="flex gap-2 items-center">
                  <span>
                    <Image src={GoIcon} alt="Go" width={24} height={24} />
                  </span>
                  <span>Go</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </MoveInDiv>
      </div>
    </div>
  );
};
