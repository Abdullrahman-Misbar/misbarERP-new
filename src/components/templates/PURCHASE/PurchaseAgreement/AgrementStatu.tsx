import { t } from "i18next";

type AgrementStatu_TP = {
  refetch: () => void;
  info: any;
};
function AgrementStatu({info }: AgrementStatu_TP) {
 
   
  return (
      <div
        className="w-[100px] rounded-md p-2 text-white"
        style={{
          backgroundColor: info?.row?.original?.agrementStatuId==0 ? "green" : "red",
        }}
      >
        {info?.row?.original?.agrementStatuId==1 ? t("Approved") : t("Not Approved")}
      </div>
    
  );
}

export default AgrementStatu;
