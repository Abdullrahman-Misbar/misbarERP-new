import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import { Item_TP, Values_TP } from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
  VoucherType: number;
};
function Main({ VoucherType, editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `api/Accounting/GetExpensessAndCreditById?Id=${id}`;
  const { data, refetch, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });
  const postEndPoint = id
    ? `api/Accounting/UdpateExpensessAndCreditById?Id=${id}`
    : `api/Accounting/Create`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    method: id ? "PUT" : "post",

    endpoint: postEndPoint,
    onSuccess: () => {
      // refetch();
      notify("success");
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handleSubmit = (values: Values_TP) => {
    const { copValue, uoms, editable, ...valuesWithoutCopValue } = values;
    const jsonData = JSON.stringify(valuesWithoutCopValue);

    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    id: id ? +id : 0,
    voucherType: response?.voucherType || VoucherType,
    voucherCode: response?.voucherCode || "",
    voucherDate: response?.voucherDate || "",
    currencyId: response?.currencyId || 0,
    otherAccountId: response?.otherAccountId || 0,
    convertionRate: response?.convertionRate || 0,
    costCenterId: response?.costCenterId || 0,
    sourceDocument: response?.sourceDocument || "",
    note: response?.note || "",

    editable: editable ? true : false,
    SourceActivityType: 1,
    voucherDetailsRequest: response?.voucherDetailsRequest?.length
      ? response?.voucherDetailsRequest
          .filter((item: Item_TP) => {
            if (response.voucherType === 0) {
              // cash-receipts
              return item.debitAmount !== 0;
            } else if (
              response.voucherType === 1 ||
              response.voucherType === 2
            ) {
              // cash-payments or transfer-receipts
              return item.creditAmount !== 0;
            }
            return item;
          })
          .map((item: Item_TP) => ({
            voutcherId: item.voutcherId,
            id: item.id,
            debitAmount: item.debitAmount,
            accountId: item.accountId,
            creditAmount: item.creditAmount,
            currencyId: item.currencyId,
            convertionRate: item.convertionRate,
            equivalent: item.equivalent,
            costCenterId: item.costCenterId,
            vatAccountId: item.vatAccountId,
            vatValue: item.vatValue,
            note: item.note,
          }))
      : [],

    copValue: {
      voucherType: VoucherType,
      voucherCode: "",
      voucherDate: "",
      currencyId: 0,
      otherAccountId: 0,
      convertionRate: 0,
      costCenterId: 0,
      sourceDocument: "",
      note: "",

      voucherDetailsRequest: [],
    },
  };
  if (editable && isLoading)
    return (
      <>
        <AddLayoutSkeleton />
      </>
    );
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: any) => handleSubmit(values)}
        enableReinitialize
      >
        <Form>
          <MainData VoucherType={VoucherType} />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;