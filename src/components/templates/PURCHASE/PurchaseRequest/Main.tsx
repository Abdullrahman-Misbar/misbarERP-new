import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../../hooks";
import useDebounce from "../../../../hooks/useDebounce";
import Paginate from "../../../molecules/table/Paginate";
import { Table } from "../../../molecules/tantable/Table";
import { mainENdPoint } from "./const";
import { generateColumns } from "./generateColumns";
import MainHeadLayout from "./MainHeadLayout";

function Main() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const debouncedWord = useDebounce(word, 300);
  const queryParams = {
    searchValue: debouncedWord,
    skip: 0,
    Take: 10 * page,
  };
  const searchParams = new URLSearchParams(queryParams as any);

  const endpoint = `${mainENdPoint}?${searchParams.toString()}`;
  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    onSuccess: () => {},
  });

  const columns = useMemo(
    () => generateColumns(page, refetch, navigate, selectedIds, setSelectedIds),
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
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          showStatusFilter
        />
      </div>
      <div className="flex justify-end mt-3">
        <Paginate
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
