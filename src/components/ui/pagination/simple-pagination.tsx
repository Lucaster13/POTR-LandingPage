"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useHref from "@/lib/hooks/useHref";
import { ReactNode } from "react";

type SimplePaginationProps = {
  pageNum: number;
  numPages: number;
};

// how many pages to show before ellipse
const ELLIPSE_CUTOFF_AMOUNT = 3;

export default function SimplePagination({
  pageNum,
  numPages,
}: SimplePaginationProps) {
  const makeHref = useHref();
  const prevPage = pageNum - 1 > 1 ? pageNum - 1 : 1;
  const nextPage = pageNum + 1 < numPages ? pageNum + 1 : numPages;
  const isStartingPage = pageNum <= ELLIPSE_CUTOFF_AMOUNT;
  const isMiddlePage =
    pageNum > ELLIPSE_CUTOFF_AMOUNT &&
    pageNum < numPages - ELLIPSE_CUTOFF_AMOUNT;
  const isEndingPage = pageNum >= numPages - ELLIPSE_CUTOFF_AMOUNT;

  // create list of all of the groups of pagination links
  // ellipses will be inserted between each group
  const pageLinkGroups: ReactNode[][] =
    // if there arent enough pages to split into groups, just display all the pages
    (
      numPages > ELLIPSE_CUTOFF_AMOUNT * 3
        ? [
            isStartingPage ? [1, 2, 3] : [1],
            isMiddlePage ? [pageNum - 1, pageNum, pageNum + 1] : [],
            isEndingPage ? [numPages - 2, numPages - 1, numPages] : [numPages],
          ]
        : [new Array(numPages).fill(0).map((_, idx) => idx + 1)]
    )
      .filter((g) => g.length)
      .map((g) =>
        g.map((pNum) => (
          <PaginationItem key={pNum}>
            <PaginationLink
              href={makeHref({ pageNum: pNum.toString() })}
              isActive={pNum === pageNum}
            >
              {pNum}
            </PaginationLink>
          </PaginationItem>
        ))
      );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={makeHref({ pageNum: prevPage.toString() })}
          />
        </PaginationItem>

        {pageLinkGroups[0]}

        {pageLinkGroups[1] && (
          <>
            <Ellipse />
            {pageLinkGroups[1]}
          </>
        )}

        {pageLinkGroups[2] && (
          <>
            <Ellipse />
            {pageLinkGroups[2]}
          </>
        )}

        <PaginationItem>
          <PaginationNext href={makeHref({ pageNum: nextPage.toString() })} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

const Ellipse = () => (
  <PaginationItem>
    <PaginationEllipsis />
  </PaginationItem>
);
