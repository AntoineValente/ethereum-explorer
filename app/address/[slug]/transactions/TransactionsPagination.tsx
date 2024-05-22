import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem as PaginationItemComponent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useBreakpoint } from "@/lib/breakpoint";
import type { FC, PropsWithChildren } from "react";

const PaginationItem: FC<PropsWithChildren> = ({ children }) => (
  <PaginationItemComponent className="cursor-pointer">
    {children}
  </PaginationItemComponent>
);

export const TransactionsPagination: FC<{
  count: number;
  currentPage: number;
  onPressPage: (page: number) => void;
}> = ({ count, currentPage, onPressPage }) => {
  const totalPages = Math.ceil(count / 15);

  const isMdScreen = useBreakpoint("md");

  const onPrevious = () => onPressPage(currentPage === 1 ? 1 : currentPage + 1);
  const onNext = () =>
    onPressPage(currentPage === totalPages ? currentPage : currentPage + 1);

  if (totalPages <= 3) {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={onPrevious} />
          </PaginationItem>

          {isMdScreen &&
            Array.from({ length: totalPages }, (_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a pagination component, the key is the page number (= static)
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={i + 1 === currentPage}
                  onClick={() => onPressPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

          <PaginationItem>
            <PaginationNext onClick={onNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
  if (totalPages > 3 && currentPage <= 2) {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={onPrevious} />
          </PaginationItem>

          {isMdScreen &&
            Array.from({ length: 3 }, (_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: This is a pagination component, the key is the page number (so static)
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={i + 1 === currentPage}
                  onClick={() => onPressPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

          {isMdScreen && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => onPressPage(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationNext onClick={onNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={onPrevious} />
        </PaginationItem>

        {currentPage >= 3 && isMdScreen && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => onPressPage(1)}>1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}

        {isMdScreen && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => onPressPage(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive onClick={() => onPressPage(currentPage)}>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {currentPage < totalPages && isMdScreen && (
          <PaginationItem>
            <PaginationLink onClick={() => onPressPage(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage < totalPages - 3 && isMdScreen && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => onPressPage(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext onClick={onNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
