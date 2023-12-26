import { FC, Suspense } from 'react';

import { Skeleton } from '@/app/_components/skeleton';
import { H1, PLarge } from '@/app/_components/typo';
import { SlugProps } from '@/app/_consts/props';

import Holdings from './holdings';
import Informations from './informations';

const LoadingSkeleton = <Skeleton width="100%" height="16.5rem" />;

const Address: FC<SlugProps> = async ({ params: { slug } }) => {
  return (
    <>
      <div className="flex flex-col">
        <H1 className="text-typo-muted">Address details</H1>
        <PLarge className="font-bold">{slug}</PLarge>
      </div>

      <div className="flex flex-row self-stretch space-x-7">
        <Suspense fallback={LoadingSkeleton}>
          <Holdings address={slug} />
        </Suspense>

        <Suspense fallback={LoadingSkeleton}>
          <Informations address={slug} />
        </Suspense>
      </div>
    </>
  );
};

export default Address;
