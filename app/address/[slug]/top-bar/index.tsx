import { GithubButton } from "@/components/github-button";
import { ModeToggle } from "@/components/mode-toggle";
import type { FC } from "react";
import type { AddressProps } from "../types";

export const TopBar: FC<AddressProps> = ({ address }) => (
	<div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
		<div className="flex flex-col">
			<h1 className="text-3xl font-bold">Address details</h1>
			<p className="dark:text-neutral-400 text-neutral-600 truncate">
				{address}
			</p>
		</div>

		<div className="flex space-x-2">
			<GithubButton />
			<ModeToggle />
		</div>
	</div>
);
