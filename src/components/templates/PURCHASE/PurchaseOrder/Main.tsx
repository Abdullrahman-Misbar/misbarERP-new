import { useMemo, useState } from "react"
import { useFetch } from "../../../../hooks"
import useDebounce from "../../../../hooks/useDebounce"
import Button from "../../../atoms/button/Button"
import Paginate from "../../../molecules/table/Paginate"
import { Table } from "../../../molecules/tantable/Table"
import { generateColumns } from "./generateColumns"
import { useNavigate } from "react-router-dom"
import BaseInputSearch from "../../../atoms/formik/BaseInputSearch"
import Filter from "./Filter"

function Main() {
  const [page, setPage] = useState(0)
  const [word, setWord] = useState("")
  const navigate = useNavigate()
  const debouncedWord = useDebounce(word, 3000)
  const queryParams = {
    // page: page,
    // term: word,
  }
  const searchParams = new URLSearchParams(queryParams as any)
  const endpoint = `api/PurchasOrder?Take=50${searchParams.toString()}`
  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    onSuccess: () => {},
  })
  const columns = useMemo(() => generateColumns(page, refetch), [page, refetch])
  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage)
  }
  return (
    <div>
      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-12">
          <p className="mb-2 font-bold">التصفيات</p>
          <BaseInputSearch placeholder="بحث سريع" name="" setWord={setWord} />
        </div>
        <Filter/>
      </div>
      <div className="grid grid-cols-12 p-3 my-5 bg-white rounded-md">
        <div className="col-span-1">
          <Button
            text="اضافة"
            type="button"
            action={() => navigate("/purchase/purchaseOrder/add")}
          />
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
          pagesCount={data?.data?.totalCount}
          previousLabel={">>"}
          nextLabel={"<<"}
          onPageChange={handlePageChange}
          initialPage={page}
        />
      </div>
    </div>
  )
}

export default Main
