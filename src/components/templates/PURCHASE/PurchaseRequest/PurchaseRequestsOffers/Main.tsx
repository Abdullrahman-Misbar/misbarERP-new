import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../../../hooks";
import useDebounce from "../../../../../hooks/useDebounce";
import Paginate from "../../../../molecules/table/Paginate";
import { Table } from "../../../../molecules/tantable/Table";
import { mainENdPoint } from "../const";
import { generateColumns } from "./generateColumns";
import MainHeadLayout from "../MainHeadLayout";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";
import { Button } from "@mui/material";
import BaseInputSearch from "../../../../atoms/formik/BaseInputSearch";
import Filter from "../Filter";
import CoomparisonNavigator from "./CoomparisonNavigator";
import { t } from "i18next";

function Main() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [word, setWord] = useState("");
  const debouncedWord = useDebounce(word, 3000);
  const queryParams = {
    // page: page,
    // term: word,
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
    () => generateColumns(page, refetch, navigate),
    [page, refetch]
  );

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  const breadcrumbItems = [
    { label: "الصفحة الرئيسية", link: "/" },
    { label: "طلبات الشراء" },
    { label: "العروض التابعة لطلب الشراء" },
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
      <div className="bg-white p-4 mb-2 flex gap-4">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate(`/purchase/PurchasQutations/add`)}
        >
          {t("Add Price Offer")}
        </Button>{" "}
        <CoomparisonNavigator />
      </div>{" "}
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
