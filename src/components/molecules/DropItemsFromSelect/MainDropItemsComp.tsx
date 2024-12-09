import { useMemo, useState } from "react";

import { generateColumns } from "./generateColumns";
import { useFormikContext } from "formik";
import useDebounce from "../../../hooks/useDebounce";
import { useFetch } from "../../../hooks";
import BaseInputSearch from "../../atoms/formik/BaseInputSearch";
import { Table } from "../tantable/Table";

function MainDropItemsComp() {
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const debouncedWord = useDebounce(word, 3000);
  const queryParams = {
    // page: page,
    // term: word,
  };
  const { values } = useFormikContext<any>();
  const endpoint =
    values.items_type == "purchase_order"
      ? `api/PurchasOrder?Take=10000`
      : values.items_type == "purchase_request"
      ? `api/PurchasRequest?Take=10000`
      : values.items_type == "purchase_quotes"
      ? `api/PurchasQutations?Take=10000`
      : "";
  const {
    data: rowData,
    refetch,
    isSuccess,
    isFetching,
    isLoading,
  } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
    enabled: !!( values.items_type),
  });
  const columns = useMemo(
    () => generateColumns(page, refetch),
    [page, refetch, values]
  );

  return (
    <div>
      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-12">
          <BaseInputSearch placeholder="بحث سريع" name="" setWord={setWord} />
        </div>
      </div>

      <div className="p-3 bg-white rounded-md">
        <Table
          data={rowData?.data?.data || []}
          columns={columns}
          columnsToRemove={[7]}
          isSuccess={isSuccess}
          isFetching={isFetching}
          isLoading={isLoading}
          pageSize={rowData?.data?.totalCount}
          // setPageSize={setPageSize}
          showEmptyButton
          showStatusFilter
        />
      </div>
      {/* <div className="flex justify-end mt-3">
        <Paginate
          pagesCount={data?.data?.totalCount}
          previousLabel={">>"}
          nextLabel={"<<"}
          onPageChange={handlePageChange}
          initialPage={page}
        />
      </div> */}
    </div>
  );
}

export default MainDropItemsComp;
