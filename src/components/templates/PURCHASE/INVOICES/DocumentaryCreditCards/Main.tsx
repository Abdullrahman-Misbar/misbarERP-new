import { useState } from "react";
import { useFetch } from "../../../../../hooks";
import { InvoiceLocalType } from "../../../../../utils/globalConst";
import ModalComp from "../../../../molecules/ModalComp";
import MainAdd from "./Add/MainAdd";
import { mainENdPoint } from "./const";
import MainHeadLayout from "./MainHeadLayout";
import TreeCreditCard from "./TreeCreditCard";

function Main() {
  const [page, setPage] = useState(0);
  const [word, setWord] = useState("");
  const [open, setOpen] = useState(false);
  const [cardId, setCardID] = useState('');
  console.log("🚀 ~ Main ~ cardId:", cardId)

  const queryParams = {
    // page: page,
    // term: word,
    invoiceType: InvoiceLocalType,
    Take: 10 * page,
  };
  const searchParams = new URLSearchParams(queryParams as any);

  const endpoint = `${mainENdPoint}?${searchParams.toString()}`;
  const { data, refetch } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
  });

  return (
    <div>
      <MainHeadLayout setWord={setWord} setOpen={setOpen} />

      <div className="grid grid-cols-12 gap-5 ">
        <div className="bg-white p-2 col-span-4 shadow-md">
          <h1 className="mx-5 font-somarBold my-5">التصفيات</h1>
          <TreeCreditCard data={data} setCardID={setCardID} />
        </div>
        <div className="bg-white col-span-8 shadow-md">
          <MainAdd refetch={refetch} />
        </div>
      </div>

      <ModalComp
        setOpen={setOpen}
        open={open}
        header="اضافة بطاقة اعتماد مستندي"
        hiddenFooter
      >
        <MainAdd refetch={refetch} />
      </ModalComp>
    </div>
  );
}

export default Main;
