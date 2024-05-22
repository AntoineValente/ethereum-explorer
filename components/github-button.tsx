import { GitHubLogoIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { Button } from "./ui/button";

export const GithubButton: FC = () => {
  return (
    <Button variant="outline" size="icon" asChild>
      <a
        href="https://github.com/AntoineValente/ethereum-explorer"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
      </a>
    </Button>
  );
};
