import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFetch } from "../../../../../hooks";
import useDebounce from "../../../../../hooks/useDebounce";
import { InvoiceLocalType } from "../../../../../utils/globalConst";
import ModalComp from "../../../../molecules/ModalComp";
import MainAdd from "./Add/MainAdd";
import { mainENdPoint } from "./const";
import { generateColumns } from "./generateColumns";
import MainHeadLayout from "./MainHeadLayout";
import TreeCreditCard from "./TreeCreditCard";

function Main() {
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const debouncedWord = useDebounce(word, 3000);
  const queryParams = {
    // page: page,
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
    [page, refetch]
  );

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <MainHeadLayout setWord={setWord} setOpen={setOpen} />
      {/* <div className="p-3 bg-white rounded-md">
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
      </div> */}
      <div className="grid grid-cols-12 ">
        <div className="bg-white p-2 col-span-4 shadow-md">
          <h1 className="mx-5 font-somarBold my-5">التصفيات</h1>
          <TreeCreditCard />
        </div>
          <div className="col-span-8">
            a7a
          </div>
      </div>

      <ModalComp
        setOpen={setOpen}
        open={open}
        header="اضافة بطاقة اعتماد مستندي"
        hiddenFooter
      >
        <MainAdd />
      </ModalComp>
    </div>
  );
}

export default Main;
