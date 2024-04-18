import { ModeToggle } from "@/app/theme-toggle";
import { Skeleton } from "@/components/ui/skeleton";
import { type FC, Suspense } from "react";
import { Activity } from "./activity";
import { Holdings } from "./holdings";
import { Informations } from "./informations";
import type { ActivitySlug, AddressPageProps } from "./types";

const useParseSlug = (
	slugs: string[],
): {
	address: string;
	activitySlug: ActivitySlug | undefined;
} => ({
	// biome-ignore lint/style/noNonNullAssertion: This page is in a non-optional route so there is always be a first element in slugs
	address: slugs[0]!,
	activitySlug: slugs[1] as ActivitySlug,
});

const HeaderSkeleton = <Skeleton className="flex-1 h-60" />;

const Page: FC<AddressPageProps> = ({ params: { slug } }) => {
	const { address, activitySlug } = useParseSlug(slug);

	return (
		<div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-3 md:mx-auto flex flex-col space-y-4 py-8">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<h1 className="text-3xl font-bold">Address details</h1>
					<p className="dark:text-neutral-400 text-neutral-600">{address}</p>
				</div>

				<ModeToggle />
			</div>

			<div
				className={
					"flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4"
				}
			>
				<Suspense fallback={HeaderSkeleton}>
					<Holdings address={address} />
				</Suspense>

				<Suspense fallback={HeaderSkeleton}>
					<Informations address={address} />
				</Suspense>
			</div>

			<Activity address={address} activitySlug={activitySlug} />
		</div>
	);
};

export default Page;
