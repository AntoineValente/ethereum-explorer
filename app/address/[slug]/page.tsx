import type { FC } from "react";
import { Header } from "./header";
import { TopBar } from "./top-bar";
import { Transactions } from "./transactions";
import type { AddressPageProps } from "./types";

const Page: FC<AddressPageProps> = async ({ params: { slug: address } }) => {
	return (
		<div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-3 md:mx-auto flex flex-col space-y-4 py-8">
			<TopBar address={address} />

			<Header address={address} />

			<Transactions address={address} />
		</div>
	);
};

export default Page;
