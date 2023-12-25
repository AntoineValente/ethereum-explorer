import { FC, Suspense } from 'react';

import { Page } from '@/app/_components/page';
import { Skeleton } from '@/app/_components/skeleton';
import { H1, PLarge } from '@/app/_components/typo';

import Holdings from './holdings';
import Informations from './informations';
import Transactions from './transactions';

type Props = {
  params: {
    slug: string;
  };
};

const LoadingSkeleton = <Skeleton width="100%" height="16.5rem" />;

const Address: FC<Props> = async ({ params: { slug } }) => {
  return (
    <Page>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <H1 className="text-typo-muted">Address details</H1>
          <PLarge className="font-bold">{slug}</PLarge>
        </div>

        <div className="flex flex-row self-stretch gap-7">
          <Suspense fallback={LoadingSkeleton}>
            <Holdings address={slug} />
          </Suspense>

          <Suspense fallback={LoadingSkeleton}>
            <Informations address={slug} />
          </Suspense>
        </div>
      </div>

      <Transactions address={slug} />
    </Page>
  );
};

export default Address;
