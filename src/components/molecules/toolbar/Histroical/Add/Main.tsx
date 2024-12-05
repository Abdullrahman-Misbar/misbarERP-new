import { Form, Formik } from "formik";
import MainData from "./MainData";
import { useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import Button from "../../../../atoms/button/Button";

type Main_TP = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void;
};

function Main({ setOpen, refetch }: Main_TP) {
  const postEndPoint = `api/PurchasActivites`;
  const { mutate: PostData, isPending } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
      setOpen(false);
      refetch();
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  return (
    <div>
      <Formik initialValues={{}} onSubmit={(values) => PostData(values)}>
        <Form>
          <MainData />
         
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
