import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { CError_TP } from "../types";
import { useIsRTL } from "./useIsRTL";
import { useState } from "react";
import { useAuth } from "../context/auth-and-perm/AuthProvider";

type useMutateProps_TP<response_T> = {
  endpoint: string;
  mutationKey: [string];
  onSuccess?: (data: response_T) => void;
  onError?: (err: CError_TP) => void;
  formData?: boolean;
  onMutate?: (err?: unknown) => void;
  method?: "post" | "delete"; // Add the method property
};

export function useMutate<response_T>({
  endpoint,
  mutationKey,
  onError,
  onSuccess,
  formData,
  onMutate,
  method = "post", 
}: useMutateProps_TP<response_T>) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const {project_id} = useAuth()

  const user_token = Cookies.get("token");
  const token = user_token;
  const authorizationHeader = `Bearer ${token}`;
  const isRTL = useIsRTL();
  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading, isSuccess, mutate, failureReason, isError ,error } =
    useMutation({
      mutationKey,
      mutationFn: (values) => {
        const requestConfig = {
          method: method.toUpperCase(), 
          url: `${baseURL}/${endpoint}`,
          data: values,
          headers: formData
            ? {
                "Content-Type": "multipart/form-data",
                Authorization: authorizationHeader,
                "Accept-Language": isRTL ? "ar" : "en",
                // project_id:project_id
              }
            : {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: authorizationHeader,
                "Accept-Language": isRTL ? "ar" : "en",
                // project_id:project_id

              },
          onUploadProgress: (progressEvent: {
            loaded: number;
            total: number;
          }) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        };

        return axios(requestConfig);
      },
      onSuccess,
      onError,
      onMutate,
    });
  return {
    data,
    isLoading,
    isSuccess,
    mutate,
    failureReason,
    isError,
    uploadProgress,
    error
  };
}
