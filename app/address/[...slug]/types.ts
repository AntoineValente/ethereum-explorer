export type AddressPageProps = {
	params: {
		slug: string[];
	};
};

export type AddressProps = {
	address: string;
};

export type ActivitySlug = "transactions" | "internal" | "erc20" | "nft";
