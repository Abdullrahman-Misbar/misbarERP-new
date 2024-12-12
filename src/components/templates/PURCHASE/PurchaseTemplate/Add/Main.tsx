import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import {
  ApproveOrDisApproveEndPoint,
  cancelRequestEndPoint,
  controlButtonEndPoint,
  deleteEndPoint,
  IndexMainPath,
  mainENdPoint,
} from "../const";
import MainData from "./MainData";
import { Item_TP, validationSchema, Values_TP } from "./Types&Validation";

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

  const postEndPoint = id
    ? `${mainENdPoint}/UpdateRequest/${id}`
    : `${mainENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handleSubmit = (values: Values_TP) => {
    const {
      copValue,
    
      editable,
      cancelRequestEndPoint,
      deleteEndPoint,
      controlButtonEndPoint,
      IndexMainPath,
      mainENdPoint,
      ApproveOrDisApproveEndPoint,
      ...valuesWithoutCopValue
    } = values;
    const jsonData = JSON.stringify(valuesWithoutCopValue);

    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    id: id ? +id : 0,
    
    foreignTemplateName: response?.foreignTemplateName || "",
    discerption: response?.discerption || "",
    editable: editable ? true : false,
   
    isActive: response?.isActive || false,
   

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    SourceActivityType: 1,
    paymentTermses: response?.paymentTermses?.length
    ? response?.paymentTermses?.map((item: any) => ({
        paymentTermName: item?.paymentTermName,
        foreignPaymentTermName: item?.foreignPaymentTermName,
        invoicePortion: item?.invoicePortion,
        dueDateBasedOn: item?.dueDateBasedOn,
        creditDays: item?.creditDays,
        hasDiscount: item?.hasDiscount,
        isDiscountValueOrRatio: item?.isDiscountValueOrRatio,
        discount: item?.discount,
        discountIfPaidWithIn: item?.discountIfPaidWithIn,
        paymentTemplateId: item?.paymentTemplateId,
        isDeleted: item?.isDeleted,
      }))
    : [],
    copValue: {
      templateName: "",
      foreignTemplateName: "",
      discerption: "",
      isActive: false, 
      paymentTermses: [],
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
        validationSchema={validationSchema}
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
