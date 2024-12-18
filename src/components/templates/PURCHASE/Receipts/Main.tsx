import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../../hooks";
import useDebounce from "../../../../hooks/useDebounce";
import Paginate from "../../../molecules/table/Paginate";
import { Table } from "../../../molecules/tantable/Table";
import { generateColumns } from "./generateColumns";
import MainHeadLayout from "./MainHeadLayout";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { mainENdPoint } from "./const";

type Main_TP = {
  type?: string;
};
function Main({ type }: Main_TP) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const debouncedWord = useDebounce(word, 300);
  const VoucherType =
    type === "cash-receipts" ? 0 : type === "cash-payments" ? 1 : 2;
  const queryParams = {
    searchValue: debouncedWord,
    voucherType: VoucherType,
    Take: 100 * page,
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
    () => generateColumns(VoucherType, type, page, refetch, navigate),
    [VoucherType, type, page, refetch, navigate]
  );

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <MainHeadLayout
        setWord={setWord}
        data={data?.data?.data || []}
        VoucherType={VoucherType}
        type={type}
        selectedIds={selectedIds}
        refetch={refetch}
      />
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
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
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
