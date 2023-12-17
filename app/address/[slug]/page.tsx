import { FC, Suspense } from 'react';

import Details from './details';
import Transactions from './transactions';

type Props = {
  params: {
    slug: string;
  };
};

const Address: FC<Props> = async ({ params: { slug } }) => {
  return (
    <div className="bg-red-500">
      <Suspense fallback={<span>Loading...</span>}>
        <Details address={slug} />
      </Suspense>

      <Suspense fallback={<span>Loading...</span>}>
        <Transactions address={slug} />
      </Suspense>
    </div>
  );
};

export default Address;
