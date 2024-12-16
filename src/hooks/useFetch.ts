import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { notify } from "../utils/toast";
import { useIsRTL } from "./useIsRTL";

type UseFetchProps<T> = {
  queryKey: [string];
  endpoint: string;
  enabled?: boolean;
  select?: (data: T) => any;
  onError?: (err: any) => void;
  onSuccess?: (data: T) => void;
  localization?: boolean;
  Module?: "PURCHASE";
};

function useFetch<T extends { data: any }>({
  endpoint,
  enabled = true,
  select,
  queryKey,
  onError,
  onSuccess,
  Module,
}: UseFetchProps<T>) {
  const user_token = Cookies.get("token");
  const token = user_token;
  const authorizationHeader = `Bearer ${token}`;
  const navigate = useNavigate();

  const isRTL = useIsRTL();
  const config = {
    headers: {
      Authorization: authorizationHeader,
      "Accept-Language": isRTL ? "ar" : "en",
    },
  };

  const baseURL = import.meta.env.VITE_BASE_URL;
  const customEndPoint =
    Module === "PURCHASE" ? "https://webapi.studioerp.com" : baseURL;
  //const customEndPoint = Module === "PURCHASE" ? "http://localhost:5057" : baseURL;

  const query = useQuery<T>({
    queryKey,
    queryFn: () =>
      axios.get(`${customEndPoint}/${endpoint}`, config).then((res) => {
        onSuccess && onSuccess(res.data);
        return res.data;
      }),
    enabled,
    select,
    //@ts-ignore
    onError: (error) => {
      notify("error", error?.response?.data?.message);
      if (error?.response?.data?.message === "Unauthenticated.") {
        localStorage.removeItem("user");
        navigate("/login");
        Cookies.remove("token");
      }
      if (onError) {
        onError(error);
      }
    },

    onSuccess,
  });

  return query;
}

export default useFetch;
