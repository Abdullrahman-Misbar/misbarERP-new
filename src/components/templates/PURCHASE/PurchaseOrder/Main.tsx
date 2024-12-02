import { useMemo, useState } from "react";
import { useFetch } from "../../../../hooks";
import useDebounce from "../../../../hooks/useDebounce";
import Button from "../../../atoms/button/Button";
import Paginate from "../../../molecules/table/Paginate";
import { Table } from "../../../molecules/tantable/Table";
import { generateColumns } from "./generateColumns";
import { useNavigate } from "react-router-dom";
import BaseInputSearch from "../../../atoms/formik/BaseInputSearch";
import Filter from "./Filter";
import BreadcrumbComponent from "../../../Breadcrumb";
import { MdSettings } from "react-icons/md";

function Main() {
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const debouncedWord = useDebounce(word, 3000);
  const queryParams = {
    // page: page,
    // term: word,
  };
  const searchParams = new URLSearchParams(queryParams as any);

  const endpoint = `api/PurchasOrder?Take=50${searchParams.toString()}`;

  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    onSuccess: () => {},
  });

  const columns = useMemo(
    () => generateColumns(page, refetch , navigate),
    [page, refetch]
  );

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };
  const breadcrumbItems = [
    { label: "الصفحة الرئيسية", link: "/" },
    { label: "العمليات" },
    { label: "طلب شراء" },
  ];

  return (
    <div>
      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>
      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-12">
          <BaseInputSearch placeholder="بحث سريع" name="" setWord={setWord} />
          <Filter />
        </div>
      </div>

      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-3 flex gap-2">
          <Button
            text="اضافة"
            type="button"
            action={() => navigate("/purchase/purchaseOrder/add")}
            className="!w-[100px]"
          />
          <span className="bg-[#E0E0E0] size-10 rounded-full flex items-center justify-center  ">
            {" "}
            <MdSettings className="size-6" />
          </span>
        </div>
      </div>
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
          pagesCount={data?.data?.totalCount /5}
          previousLabel={">>"}
          nextLabel={"<<"}
          onPageChange={handlePageChange}
          initialPage={page}
        />
      </div>
    </div>
  );
}

export default Main;
