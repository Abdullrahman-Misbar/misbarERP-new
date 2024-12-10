import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../../hooks";
import { notify } from "../../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import { Item_TP, Values_TP } from "./Types&Validation";
import { cancelRequestEndPoint, deleteEndPoint, mainENdPoint } from "../const";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `${mainENdPoint}/Get/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id ? `${mainENdPoint}/Update/${id}` : `${mainENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
    },
    Module: "PURCHASE",
    method: id ? "PUT" : "post",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handleSubmit = (values: Values_TP) => {
    console.log("🚀 ~ handleSubmit ~ values:", values)
    const {
      copValue,
      uoms,
      editable,
      cancelRequestEndPoint,
      deleteEndPoint,
      ...valuesWithoutCopValue
    } = values;
      console.log("🚀 ~ handleSubmit ~ valuesWithoutCopValue:", valuesWithoutCopValue)
    const jsonData = JSON.stringify(valuesWithoutCopValue);
    console.log("🚀 ~ handleSubmit ~ jsonData:", jsonData)
    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    id: id ? +id : 0,
    invoiceCode: response?.invoiceCode || "",
    invoiceDate: response?.invoiceDate || "",
    vendorId: response?.vendorId || "",
    vendorInvoiceCode: response?.vendorInvoiceCode || "",
    vendorTaxNumber: response?.vendorTaxNumber || "",
    vendorAccountId: response?.vendorAccountId || 1,
    costCenterId: response?.costCenterId || "",
    paymentMethod: response?.paymentMethod || "",
    paymentAccountId: response?.paymentAccountId || "",
    paymentStatus: response?.paymentStatus || 0,
    purchaseRepresentativeId: response?.purchaseRepresentativeId || "",
    branchId: response?.branchId || "",
    warehouseId: response?.warehouseId || "",
    currencyId: response?.currencyId || "",
    convertionRate: response?.convertionRate || "",
    referenceDocument: response?.referenceDocument || "",
    withTax: response?.withTax || 0,
    withoutTax: response?.withoutTax || 0,
    total: response?.total || "",
    net: response?.net || 0,
    paid: response?.paid || 0,
    remaining: response?.remaining || 0,
    classification: response?.classification || 0,
    paymentTemplateId: response?.paymentTemplateId || 1,
    invoiceStatus: response?.invoiceStatus || 0,
    approvalDate: response?.approvalDate || "",
    note: response?.note || "",
    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,

    invoiceDetailsRequest: response?.invoiceDetailsRequest?.length
      ? response?.invoiceDetailsRequest?.map((item: Item_TP) => ({
          itemId: item?.itemId,
          invoiceId: item?.invoiceId,

          id: item?.id || 0,
          quantity: item?.quantity,
          uomId: item?.uomId,
          cost: item?.cost,
          discountRate: item?.discountRate,
          discountValue: item?.discountValue,
          totalAfterDiscount: item?.totalAfterDiscount,
          extraRate: item?.extraRate,
          extraValue: item?.extraValue,
          totalAfterExtra: item?.totalAfterExtra,
          taxRate: item?.taxRate,
          vat: item?.vat,
          totalAfterTax: item?.totalAfterTax,
          freeQuantities: item?.freeQuantities,
          note: item?.note,
          note: item?.note,
          isDeleted: false,
          uoms: item?.product?.uoms,
        }))
      : [],
    invoiceDiscountsAndAdditionsRequest: response
      ?.invoiceDiscountsAndAdditionsRequest?.length
      ? response?.invoiceDiscountsAndAdditionsRequest?.map((item: Item_TP) => ({
          invoiceId: item?.invoiceId,
          id: item?.id || 0,
          accountId: item?.accountId,
          influencingOnCost: item?.influencingOnCost,
          discountRate: item?.discountRate,
          discountValue: item?.discountValue,
          additionRate: item?.additionRate,
          additionValue: item?.additionValue,
          isDeleted: false,
          currencyId: item?.currencyId,
          convertionRate: item?.convertionRate,
          equivalent: item?.equivalent,
          theCorrespondingAccountId: item?.theCorrespondingAccountId,
          note: item?.note,

          uoms: item?.product?.uoms,
        }))
      : [],
    invoicesPaymentsSchedulingRequest: response
      ?.invoicesPaymentsSchedulingRequest?.length
      ? response?.invoicesPaymentsSchedulingRequest?.map((item: Item_TP) => ({
          id: item?.id || 0,
          invoiceType: item?.invoiceType,
          invoiceId: item?.invoiceId,
          paymentTermId: item?.paymentTermId,
          invoicePortion: item?.invoicePortion,
          dueAmount: item?.dueAmount,
          creditDays: item?.creditDays,
          dueDate: item?.dueDate,
          isDeleted: false,
          amount: item?.amount,
          discountAmount: item?.discountAmount,
          dueAmountAfterDiscount: item?.dueAmountAfterDiscount,
          discountDueDate: item?.discountDueDate,
          status: item?.status,

          // uoms: item?.product?.uoms,
        }))
      : [],
    invoicePaymentsRequest: response?.invoicePaymentsRequest?.length
      ? response?.invoicePaymentsRequest?.map((item: Item_TP) => ({
          id: item?.id || 0,
          paymentAmount: item?.paymentAmount,
          paymentMethod: item?.paymentMethod,
          invoiceId: item?.invoiceId,
          paymentDate: item?.quantity,
        }))
      : [],
    copValue: {
      code: "",
      total: "",
      expectedReceiptDate: "",
      createDate: "",
      referenceDocument: "",
      currencyId: "",
      vendorId: "",
      purchaseAgreementId: "",
      note: "",
      purchaseRepresentativeId: "",
      warehouseId: "",

      approvalDate: "",
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
          <MainData />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
