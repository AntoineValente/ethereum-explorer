import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export function GithubButton() {
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
}
