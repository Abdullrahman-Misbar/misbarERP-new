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
  postENdPoint,
} from "../const";
import MainData from "./MainData";
import { Values_TP } from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `${mainENdPoint}/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id ? `${postENdPoint}/${id}` : `${postENdPoint}`;
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
    method: id ? "PUT" : "post",
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
    empCode: response?.empCode || "",
    empName: response?.empName || "",
    phone: response?.phone || "",
    email: response?.email || "",
    address: response?.address || "",
    generalDataNote: response?.generalDataNote || "",
    hireDate: response?.hireDate || "",
    deptId: response?.deptId || 0,
    jobPositionId: response?.jobPositionId || 0,
    managerId: response?.managerId || 0,
    workRecord: response?.workRecord || "",
    workDataNote: response?.workDataNote || "",
    note: response?.note || "",
    editable: editable ? true : false,

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    SourceActivityType: 1,

    copValue: {
      id: 0,
      empCode: "",
      empName: "",
      phone: "",
      email: "",
      address: "",
      generalDataNote: "",
      hireDate: "",
      deptId: 0,
      jobPositionId: 0,
      managerId: 0,
      workRecord: "",
      workDataNote: "",
      note: "",
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
        // validationSchema={validationSchema}
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
