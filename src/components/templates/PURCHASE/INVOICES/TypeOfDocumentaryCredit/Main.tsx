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
import ModalComp from "../../../../molecules/ModalComp";
import MainAdd from "./Add/MainAdd";

function Main() {
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const [mainData, setMainData] = useState({});

  const debouncedWord = useDebounce(word, 300);
  const queryParams = {
    searchValue: debouncedWord, 

    // term: word,
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
    () => generateColumns(page, refetch, navigate, setOpen, setMainData),
    [page, refetch]
  );

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <MainHeadLayout setWord={setWord} setOpen={setOpen} />
      <div className="p-3 bg-white rounded-md">
        <Table
          data={data?.data || []}
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
      <ModalComp
        setOpen={setOpen}
        open={open}
        header="اضافة بطاقة اعتماد مستندي"
        hiddenFooter
      >
        <MainAdd refetch={refetch}  mainData={mainData}  />
      </ModalComp>
    </div>
  );
}

export default Main;
