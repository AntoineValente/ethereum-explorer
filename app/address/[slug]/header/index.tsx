import { type FC, Suspense } from "react";
import type { AddressProps } from "../types";
import { HeaderHoldings } from "./HeaderHoldings";
import { HeaderInformations } from "./HeaderInformations";
import { HeaderSkeleton } from "./HeaderSkeleton";

export const Header: FC<AddressProps> = ({ address }) => (
  <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
    <Suspense fallback={HeaderSkeleton}>
      <HeaderHoldings address={address} />
    </Suspense>

    <Suspense fallback={HeaderSkeleton}>
      <HeaderInformations address={address} />
    </Suspense>
  </div>
);
