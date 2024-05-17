import { ModeToggle } from "@/app/theme-toggle";
import { Skeleton } from "@/components/ui/skeleton";
import { type FC, Suspense } from "react";
import { Holdings } from "./holdings";
import { Informations } from "./informations";
import { Transactions } from "./transactions";
import type { AddressPageProps } from "./types";

const HeaderSkeleton = <Skeleton className="flex-1 h-[260px]" />;

const Page: FC<AddressPageProps> = ({ params: { slug: address } }) => {
	return (
		<div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-3 md:mx-auto flex flex-col space-y-4 py-8">
			<div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
				<div className="flex flex-col">
					<h1 className="text-3xl font-bold">Address details</h1>
					<p className="dark:text-neutral-400 text-neutral-600 truncate">
						{address}
					</p>
				</div>

				<ModeToggle />
			</div>

			<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
				<Suspense fallback={HeaderSkeleton}>
					<Holdings address={address} />
				</Suspense>

				<Suspense fallback={HeaderSkeleton}>
					<Informations address={address} />
				</Suspense>
			</div>

			<Transactions address={address} />
		</div>
	);
};

export default Page;
