// import { OTF } from "@ahmedhassan713/object-2-formdata"
import i18n from "../i18n"
import { MutateDataParameters_TP } from "../types"
import { request } from "./axios-util"

//////// TYPES
///
//////// VARUIABLES
///
const lang = i18n.language.startsWith("ar") ? "ar" : "en"
///

 
export const mutateData = async <T>(
    comingData: MutateDataParameters_TP
) => {
    const { endpointName, dataType = "json", values, method = 'post', axiosOptions, editWithFormData = false } = comingData
    if (dataType === 'json') {
        return await request<T>({
            url: endpointName,
            method,
            data: values,
            ...axiosOptions
        })
    }
    if (dataType === "formData") {
        // let data = OTF(values)

        return await request<T>({
            url: endpointName,
            method,
            data: editWithFormData ? { ...values, _method: "put" } : values,
            headers: {
                "Accept-Language": lang,
                "Content-Type": `multipart/form-data`,
            },
            ...axiosOptions
  })
}
}