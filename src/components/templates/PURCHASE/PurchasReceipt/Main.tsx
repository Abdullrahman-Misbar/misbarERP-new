import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../../hooks";
import useDebounce from "../../../../hooks/useDebounce";
import Paginate from "../../../molecules/table/Paginate";
import { Table } from "../../../molecules/tantable/Table";
import { generateColumns } from "./generateColumns";
import MainHeadLayout from "./MainHeadLayout";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Main() {
  const [page, setPage] = useState(0);
  console.log("🚀 ~ Main ~ page:", page)
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const debouncedWord = useDebounce(word, 3000);
  const queryParams = {
    // page: page,
    // term: word,
    Take: 10 * page,
  };
  const searchParams = new URLSearchParams(queryParams as any);

  const endpoint = `api/PurchasReceipt?${searchParams.toString()}`;
  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    onSuccess: () => {},
  });

  const columns = useMemo(
    () => generateColumns(page, refetch, navigate),
    [page, refetch]
  );

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <MainHeadLayout setWord={setWord} data={data?.data?.data || []} />
      <div className="p-3 bg-white rounded-md">
        <Table
          data={data?.data?.data || []}
          columns={columns}
          columnsToRemove={[7]}
          isSuccess={isSuccess}
          isFetching={isFetching}
          isLoading={isLoading}
          pageSize={data?.data?.totalCount}
          // setPageSize={setPageSize}
          showEmptyButton
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