import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import { validationSchema, Values_TP } from "./Types&Validation";
import {
  ApproveOrDisApproveEndPoint,
  cancelRequestEndPoint,
  controlButtonEndPoint,
  deleteEndPoint,
  IndexMainPath,
  mainENdPoint,
} from "../const";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `api/Partner/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id ? `api/Partner/${id}` : `api/Partner`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    method: id ? "PUT" : "post",
    onSuccess: (data: any) => {
      if (data?.data.status === "1") {
        notify("success");
      } else notify("error", data?.data.message);
    },
    Module: "PURCHASE",
    onError: (err) => {
      console.log(err);
      notify("error", err?.response?.data?.message);
    },
  });

  const handleSubmit = (values: Values_TP) => {
    const {
      copValue,
      editable,
      ApproveOrDisApproveEndPoint,
      IndexMainPath,
      cancelRequestEndPoint,
      controlButtonEndPoint,
      mainENdPoint ,
      deleteEndPoint ,
      ...valuesWithoutCopValue
    } = values;
    const jsonData = JSON.stringify(valuesWithoutCopValue);

    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    id: id ? +id : 0,
    partnerCode: response?.partnerCode || "",
    editable: editable ? true : false,
    foreignPartnerName: response?.foreignPartnerName || "",
    partnerName: response?.partnerName || "",
    accountId: response?.accountId || 0,
    partnerTypeId: response?.partnerTypeId || 0,
    vendorType: response?.vendorType || 1,
    companyName: response?.companyName || "",
    suffixId: response?.suffixId || 0,
    barcode: response?.barcode || "",
    taxNumber: response?.taxNumber || "",
    jobPosition: response?.jobPosition || "",
    partnerGroupId: response?.partnerGroupId || 0,
    phone: response?.phone || "",
    mobile: response?.mobile || "",
    email: response?.email || "",
    website: response?.website || "",
    fax: response?.fax || "",
    language: response?.language || "",
    isActive: response?.isActive || false,
    generalDataNote: response?.generalDataNote || "",
    nationality: response?.nationality || "",
    work: response?.work || "",
    workType: response?.workType || "",
    sex: response?.sex || "",
    birthDate: response?.birthDate || null,
    country: response?.country || "",
    city: response?.city || "",
    area: response?.area || "",
    street: response?.street || "",
    postCode: response?.postCode || "",
    consideredAsVendorAndCustomer:
      response?.consideredAsVendorAndCustomer || false,
    salesRepresentative: response?.salesRepresentative || "",
    pricesList: response?.pricesList || 0,
    purchaseRepresentativeId: response?.purchaseRepresentativeId || 0,
    reminderingBeforeReceiptDate:
      response?.reminderingBeforeReceiptDate || false,
    note: response?.note || "",
    partnerContactsesDto: response?.partnerContactsesDto || [],
    partnerAddressesesDto: response?.partnerAddressesesDto || [],
    partnerPaymentTerrmsesDto: response?.partnerPaymentTerrmsesDto || [],
    partnerBankAccountsesDto: response?.partnerBankAccountsesDto || [],
    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    copValue: {
      partnerCode: response?.partnerCode || "",
      foreignPartnerName: response?.foreignPartnerName || "",
      partnerName: response?.partnerName || "",
      accountId: response?.accountId || 0,
      partnerTypeId: response?.partnerTypeId || 0,
      vendorType: response?.vendorType || 1,
      companyName: response?.companyName || "",
      suffixId: response?.suffixId || 0,
      barcode: response?.barcode || "",
      taxNumber: response?.taxNumber || "",
      jobPosition: response?.jobPosition || "",
      partnerGroupId: response?.partnerGroupId || 0,
      phone: response?.phone || "",
      mobile: response?.mobile || "",
      email: response?.email || "",
      website: response?.website || "",
      fax: response?.fax || "",
      language: response?.language || "",
      isActive: response?.isActive || false,
      generalDataNote: response?.generalDataNote || "",
      nationality: response?.nationality || "",
      work: response?.work || "",
      workType: response?.workType || "",
      sex: response?.sex || "",
      birthDate: response?.birthDate || null,
      country: response?.country || "",
      city: response?.city || "",
      area: response?.area || "",
      street: response?.street || "",
      postCode: response?.postCode || "",
      consideredAsVendorAndCustomer:
        response?.consideredAsVendorAndCustomer || false,
      salesRepresentative: response?.salesRepresentative || "",
      pricesList: response?.pricesList || 0,
      purchaseRepresentativeId: response?.purchaseRepresentativeId || 0,
      reminderingBeforeReceiptDate:
        response?.reminderingBeforeReceiptDate || false,
      note: response?.note || "",
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
