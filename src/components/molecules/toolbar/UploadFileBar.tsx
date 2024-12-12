import { Tooltip } from "@mui/material";
import { useState } from "react";
import UploadFileBseInput from "../../atoms/formik/UploadFileBseInput";
import AttachmentIcon from "../../atoms/icons/AttachmentIcon";
import ModalComp from "../ModalComp";
import { Form, Formik, useFormikContext } from "formik";
import { notify } from "../../../utils/toast";
import { useMutate } from "../../../hooks";
import { useParams } from "react-router-dom";

function UploadFileBar() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [file, setFile] = useState<File | null>(null); 
  const { values } = useFormikContext<any>();
  const handleUploadFileBar = () => {
    setOpen(true);
  };

  const { mutate } = useMutate({
    mutationKey: ["api/Attachment/Create"],
    endpoint: `api/Attachment/Create`,
    onSuccess: () => {
      notify("success");
      setOpen(false);
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const initialValues = {
    sourceId: id,
    attchmentTitle: "",
    description: "",
    fileType: "",
    fileSize: "",
    filePath: "",
    sourceTypeId: 1,
  };

  const handleSubmit = (values: any) => {
    if (!file) {
      notify("error", "يرجى اختيار ملف أولاً");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("attchmentTitle", values.attchmentTitle);
    formData.append("description", values.description);
    formData.append("sourceId", values.sourceId);
    formData.append("sourceTypeId", values.sourceTypeId.toString());

    mutate(formData);
  };

  return (
    <div>
      <Tooltip title="إرفاق ملف">
        <div className="flex items-center">
          <AttachmentIcon
            disabled={!values?.editable}
            action={handleUploadFileBar}
          />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize
      >
        {({ submitForm }) => (
          <Form>
            <ModalComp
              header="ارفاق ملف"
              open={open}
              setOpen={setOpen}
              ActionAgreeButton={() => {
                submitForm();
              }}
            >
              <div>
                <UploadFileBseInput setFile={setFile} />
              </div>
            </ModalComp>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UploadFileBar;
