/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
import { AxiosRequestConfig, AxiosResponseHeaders, HttpStatusCode, RawAxiosResponseHeaders } from "axios"
import { FormikErrors } from "formik"
import React from "react"
import { SlideImage } from "yet-another-react-lightbox"

/* 
permissions
*/
export type permissionsRule_TP = "OR" | "AND"

/* 
api calls
*/
export type PostedData_TP = "json" | "formData"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const postMethods_TP = {
  post: "POST",
  put: "PUT",
  delete: "DELETE",
  get: "GET",
} as const

export type MutateDataParameters_TP = {
  endpointName: string
  dataType?: PostedData_TP
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: any
  method?: keyof typeof postMethods_TP
  axiosOptions?: AxiosRequestConfig
  editWithFormData?: boolean
}

// custom error type
export type CError_TP = {
  response: {
    data: {
      is_success: false
      status_code: HttpStatusCode //?
      message: string
      errors?: FormikErrors<{ [key: string]: string[] }>
      error?:string

    },
    status: HttpStatusCode
    statusText: string
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
  }
  request: any
}

/* 
upload
*/
// custom file type
export interface CFile_TP extends File {
  src: string
  preview: string
  id: string
}

// custom image file type
export interface CImageFile_TP extends SlideImage, CFile_TP {
  type: "image"
  path?: string
}

/* react-select option type */
export type SelectOption_TP = {
  id?: string | number
  value: string
  label: string
  name?: string
}

/* every email type */
// I think i can do better
export type Email_TP = `${string}@${string}.${string}`

/* 
SYSTEM ESTABLISHMENT
*/
export type Units_TP = {
  id: string,
  value: string,
  size_id: string
}
export type CategoryMainData_TP = {
  id: string | number
  name: string
  has_size: boolean
  has_selsal: boolean
  type: "multi" | "single"
  selling_type: "part" | "all"
  sizes?: CategorySize_TP[]
}

export type CategorySize_TP = {
  id: string,
  units: Units_TP[]
  type: string
  start: string
  end: string
  increase: string
  category_name: string
}
export interface Category_TP extends CategoryMainData_TP {
  items?: CategoryMainData_TP[]
}

/* 
// globals
*/

export type SetState_TP<T> = React.Dispatch<React.SetStateAction<T>>

export type Column_TP<AccessorTP> = {
  header: string,
  accessorKey?: AccessorTP,
  Cell?: unknown,
  filterKey?:any

  // id?: string,
  // Filter?: unknown,
  // dataType?: string,
  // disableFilters?: boolean,
}

export type KaratValues_TP = "24" | "22" | "21" | "18"