import { FC } from "react";

const getData = async (address: string) => {
  const result = await fetch(
    `https://svc.blockdaemon.com/universal/v1/ethereum/goerli/account/${address}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BLOCKDAEMON_API_KEY}`,
      },
      cache: "no-store",
    }
  );

  if (!result.ok) {
    throw new Error(
      `An error occured fetching the account info for ${address}: ${result.statusText}`
    );
  }

  return result.json();
};

type Props = {
  params: {
    slug: string;
  };
};

const Address: FC<Props> = async ({ params: { slug } }) => {
  const result = await getData(slug);

  return <pre>{JSON.stringify(result, null, 2)}</pre>;
};

export default Address;
