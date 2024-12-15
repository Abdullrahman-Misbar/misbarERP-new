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
import { Item_TP, Values_TP } from "./Types&Validation";

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
      uoms,
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
    editable: editable ? true : false,
    id: id ? +id : 0,
    operationCode: response?.operationCode || "",
    operationDate: response?.operationDate || "",
    processingType: response?.processingType || "",
    UserId: response?.UserId || "",
    warehouseId: response?.warehouseId || "",
   
    approvalDate: response?.approvalDate || "",
    CancledDate: response?.CancledDate || "",
    isApproved: response?.isApproved || false,
    isCanceled: response?.isCanceled || false,

    note: response?.note || "",

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    SourceActivityType: 1,
    freeQuantitiesDetailesModel: response?.freeQuantitiesDetailesModel?.length
      ? response?.freeQuantitiesDetailesModel?.map((item: Item_TP) => ({
          itemId: item?.itemId,
          id: item?.id,
          note: item?.note,
          availableFreeQuantities: item?.availableFreeQuantities,
          quantitiesToBeProcessed: item?.quantitiesToBeProcessed,
          uomId: item?.uomId,
          warehouseId: item?.warehouseId,
          isDeleted: false,
          description: item?.description,
          uoms: item?.product?.uoms,
        }))
      : [],
    copValue: {
      operationCode: "",
      OperationId: "",
      UserId: "",
      createDate: "",
      CancledDate: "",
      total: "",
      referenceDocument: "",
      note: "",
      operationDate: "",
      warehouseId: "",
      processingType: "",
      freeQuantitiesDetailesModel: [],
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
