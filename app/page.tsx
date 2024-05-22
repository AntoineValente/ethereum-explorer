"use client";

import { GithubButton } from "@/components/github-button";
import { Input } from "@/components/ui/input";
import { TypographyH1 } from "@/components/ui/typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { ModeToggle } from "../components/mode-toggle";

const Page: FC = () => {
  const { push } = useRouter();

  return (
    <div
      className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-8 md:mx-auto relative flex flex-col space-y-10 items-center justify-center h-screen"
      style={{
        backgroundImage: "url(background.png)",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex flex-col space-y-3 items-center">
        <div className="flex space-x-4 items-center">
          <Image
            src="/ethereum-icon.png"
            alt={"Ethereum icon"}
            width="64"
            height="64"
          />

          <TypographyH1>Ethereum explorer</TypographyH1>
        </div>

        <p>Access transaction records and account information.</p>
      </div>

      <Input
        type="search"
        placeholder="Type an address"
        className="max-w-lg"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            push(`/address/${e.currentTarget.value}`);
          }
        }}
      />

      <div className="absolute top-0 right-0 flex space-x-2">
        <GithubButton />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Page;
