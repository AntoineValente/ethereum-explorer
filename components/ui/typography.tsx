import type { PropsWithChildren } from "react";

export function TypographyH1({ children }: PropsWithChildren) {
	return (
		<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
			{children}
		</h1>
	);
}

export function TypographyH2() {
	return (
		<h2 className="text-3xl font-semibold tracking-tight">
			The People of the Kingdom
		</h2>
	);
}
