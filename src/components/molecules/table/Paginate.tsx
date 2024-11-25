import { ReactElement } from 'react';
import ReactPaginate from 'react-paginate';

type PaginateProps = {
  pagesCount?: number;
  previousLabel?: ReactElement;
  nextLabel?: ReactElement;
  onPageChange: (page: number) => void;
  initialPage: number;
};

const Paginate = ({
  pagesCount,
  previousLabel,
  nextLabel,
  onPageChange,
  initialPage,
}: PaginateProps) => {
  return (
    <ReactPaginate
      pageCount={pagesCount || 0}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      initialPage={initialPage}
      containerClassName='flex gap-2 items-center'
      pageClassName='font-bold shadows-md py-2 px-4 shadows-md rounded-md dark:text-white'
      activeClassName={'bg-main text-white dark:!text-black dark:bg-white'}
      disabledClassName='[&>a]:text-gray-400 [&>a]:border-gray-400 [&>a]:cursor-not-allowed not-allowed'
      previousLinkClassName='flex relative active:top-[1px] py-2 px-4 font-bold rounded-md text-mainGreen bg-white border-mainGreen dark:bg-dark-primary dark:text-white dark:!border-white transform rtl:rotate-180'
      nextLinkClassName='flex relative active:top-[1px] py-2 px-4 font-bold rounded-md text-mainGreen bg-white border-mainGreen dark:bg-dark-primary dark:text-white dark:!border-white transform rtl:rotate-180'
    />
  );
};

export default Paginate;
