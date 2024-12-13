/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { CError_TP } from "../types";
import { useIsRTL } from "./useIsRTL";

type useMutateProps_TP<response_T> = {
  endpoint: string
  mutationKey: [string]
  onSuccess?: (data: response_T) => void
  onError?: (err: CError_TP) => void
  formData?: boolean
  onMutate?: (err?: unknown) => void
  method?: "post" | "delete" | 'PUT'
  Module?: "PURCHASE" 
}

export function useMutate<response_T>({
  endpoint,
  mutationKey,
  onError,
  onSuccess,
  formData,
  onMutate,
  method = "post" ,
  Module,
}: useMutateProps_TP<response_T>) {
  const [uploadProgress, setUploadProgress] = useState(0)

  const user_token = Cookies.get("token")
  const token = user_token
  const authorizationHeader = `Bearer ${token}`
  const isRTL = useIsRTL()
  const baseURL = import.meta.env.VITE_BASE_URL
  const customEndPoint =
    Module == "PURCHASE" ? "https://webapi.studioerp.com" : baseURL
    // const customEndPoint =
    // Module == "PURCHASE" ? "http://localhost:5057" : baseURL

  const { data, isPending, isSuccess, mutate, failureReason, isError, error } =
    useMutation({
      mutationKey,
      mutationFn: (values) => {
        const requestConfig = {
          method: method.toUpperCase(),
          url: `${customEndPoint}/${endpoint}`,
          data: values,
          headers: formData
            ? {
                "Content-Type": "multipart/form-data",
                Authorization: authorizationHeader,
                "Accept-Language": isRTL ? "ar" : "en",
              }
            : {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: authorizationHeader,
                "Accept-Language": isRTL ? "ar" : "en",
              },
          onUploadProgress: (progressEvent: {
            loaded: number
            total: number
          }) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            )
            setUploadProgress(percentCompleted)
          },
        }
        //@ts-ignore
        return axios(requestConfig)
      },
      onSuccess,
      onError,
      onMutate,
    })
  return {
    data,
    isPending,
    isSuccess,
    mutate,
    failureReason,
    isError,
    uploadProgress,
    error,
  }
}
