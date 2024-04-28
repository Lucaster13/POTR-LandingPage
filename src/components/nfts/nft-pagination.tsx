import SimplePagination from "../ui/pagination/simple-pagination";

type NftPaginationProps = { pageNum: number; numPages: number };

export default function NftPagination({
  pageNum,
  numPages,
}: NftPaginationProps) {
  return <SimplePagination numPages={numPages} pageNum={pageNum} />;
}
