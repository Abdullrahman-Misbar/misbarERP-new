import { useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../../../hooks";
import useDebounce from "../../../../../hooks/useDebounce";
import Paginate from "../../../../molecules/table/Paginate";
import { Table } from "../../../../molecules/tantable/Table";
import { mainENdPoint } from "../const";
import { generateColumns } from "./generateColumns";
import BreadcrumbComponent from "../../../../molecules/Breadcrumb";
import { Button } from "@mui/material";
import BaseInputSearch from "../../../../atoms/formik/BaseInputSearch";
import Filter from "../Filter";
import CoomparisonNavigator from "./CoomparisonNavigator";
import { t } from "i18next";

function Main() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const [word, setWord] = useState("");
  const debouncedWord = useDebounce(word, 3000);
  const queryParams = {
    // page: page,
    // term: word,
    Take: 10 * page,
  };
  const searchParams = new URLSearchParams(queryParams as any);

  const endpoint = `${mainENdPoint}/GetAll?take=100&${searchParams.toString()}`;
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

  const hardcodedData = [
    {
      id: 1,
      code: "PREQ00001",
      partnerName: "المورد الأول",
      currancyName: "دولار",
      requestDate: "2024-09-15",
      requestEndDate: "2024-09-15",
      approvalDate: "2024-09-15",
      receiptDate: "2024-09-15",
      confirmBefore: 0, // Number of days
      confirmDelivery: true, // Toggle value
      inventoryId: "مخزن 1",
      note: "محتوي",
      priceOffers: 3,
      purchaseQuotes: 2,
    },
    {
      id: 2,
      code: "PREQ00001",
      partnerName: "المورد الثاني",
      currancyName: "دولار",
      requestDate: "2024-09-18",
      requestEndDate: "2024-09-18",
      approvalDate: "2024-09-18",
      receiptDate: "2024-09-18",

      confirmBefore: 6, // Number of days
      confirmDelivery: false, // Toggle value
      inventoryId: "مخزن 1",
      note: "محتوي",
      priceOffers: 1,
      purchaseQuotes: 1,
    },
    {
      id: 3,
      code: "RFQ00003",
      partnerName: "المورد الثالث",
      currancyName: "دولار",
      requestDate: "2024-02-20",
      requestEndDate: "2024-02-20",
      approvalDate: "2024-02-20",
      receiptDate: "2024-02-20",
      confirmBefore: 5, // Number of days
      confirmDelivery: true, // Toggle value
      inventoryId: "مخزن 1",
      note: "محتوي",
      priceOffers: 0,
      purchaseQuotes: 3,
    },
  ];

  const breadcrumbItems = [
    { label: "الصفحة الرئيسية", link: "/" },
    { label: "اتفاقيات الشراء" },
    { label: "طلبات شراء الاتفاقية" },
  ];

  return (
    <div>
      <p className=" bg-white rounded-lg mb-2">
        <BreadcrumbComponent items={breadcrumbItems} />
      </p>
      <div className="bg-white p-4 mb-2 flex gap-4">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate(`/purchase/PurchasQutations/add/${id}`)}
        >
          {t("show all offers")}
        </Button>{" "}
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
          pageSize={2}
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
