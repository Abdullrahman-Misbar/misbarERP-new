import { useMemo, useState } from "react";

import { useFetch } from "../../../../../../../hooks";
import useDebounce from "../../../../../../../hooks/useDebounce";
import BaseInputSearch from "../../../../../../atoms/formik/BaseInputSearch";
import { Table } from "../../../../../../molecules/tantable/Table";
import { generateColumns } from "./generateColumns";
import { useFormikContext } from "formik";

function MainCopyComp() {
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const debouncedWord = useDebounce(word, 3000);
  const queryParams = {
    // page: page,
    // term: word,
  };
  const searchParams = new URLSearchParams(queryParams as any);
  const { values } = useFormikContext();
  const endpoint = `api/PurchasOrder?Take=1000${searchParams.toString()}`;

  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
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

export default MainCopyComp;
