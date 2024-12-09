import { useFormikContext } from "formik";

function ApprovedStatus() {
  const { values } = useFormikContext();
  return (
    <div>
      {values?.isApproved == true ? (
        <p className="bg-[#EF6C00] text-white rounded-[100px] p-2 flex items-center w-fit">
         معتمد
        </p>
      ) : (
        <p className="bg-[#EF6C00] text-white rounded-[100px] p-2 flex items-center w-fit">
          قيد الانتظار
        </p>
      )}
    </div>
  );
}

export default ApprovedStatus;
