import { useFormikContext } from "formik";

function AgreementStatus() {
  const { values } = useFormikContext();
  return (
    <div>
      {values?.agrementStatuId == 1 ? (
        <p className="bg-[#EF6C00] text-white rounded-[100px] p-2 flex items-center w-fit">
         تم الموافقه
        </p>
      ) : (
        <p className="bg-[#EF6C00] text-white rounded-[100px] p-2 flex items-center w-fit">
          قيد الانتظار
        </p>
      )}
    </div>
  );
}

export default AgreementStatus;
