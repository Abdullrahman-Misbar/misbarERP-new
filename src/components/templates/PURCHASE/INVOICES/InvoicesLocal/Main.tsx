import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { generateColumns } from "./generateColumns";
import MainHeadLayout from "./MainHeadLayout";
import useDebounce from "../../../../../hooks/useDebounce";
import { useFetch } from "../../../../../hooks";
import { Table } from "../../../../molecules/tantable/Table";
import Paginate from "../../../../molecules/table/Paginate";
import { mainENdPoint } from "./const";
import { InvoiceLocalType } from "../../../../../utils/globalConst";

function Main() {
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const debouncedWord = useDebounce(word, 300);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const queryParams = {
    searchValue: debouncedWord,

    // term: word,
    invoiceType: InvoiceLocalType,
    Take: 10 * page,
  };
  const searchParams = new URLSearchParams(queryParams as any);

  const endpoint = `${mainENdPoint}?${searchParams.toString()}`;
  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
  });

  const columns = useMemo(
    () => generateColumns(page, refetch, navigate),
    [page, refetch, selectedIds]
  );

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <MainHeadLayout
        setWord={setWord}
        data={data?.data?.data || []}
        selectedIds={selectedIds}
        refetch={refetch}
      />
      <div className="p-3 bg-white rounded-md">
        <Table
          //@ts-ignore
          data={data?.data?.data || []}
          columns={columns}
          columnsToRemove={[7]}
          isSuccess={isSuccess}
          isFetching={isFetching}
          isLoading={isLoading}
          //@ts-ignore
          pageSize={data?.data?.totalCount}
          // setPageSize={setPageSize}
          showEmptyButton
          showStatusFilter
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      </div>
      <div className="flex justify-end mt-3">
        <Paginate
          //@ts-ignore
          pagesCount={data?.data?.totalCount / 10}
          previousLabel={<IoIosArrowBack />}
          nextLabel={<IoIosArrowForward />}
          onPageChange={handlePageChange}
          initialPage={page}
        />
      </div>
    </div>
  );
}

export default Main;
