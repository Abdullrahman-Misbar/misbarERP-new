import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import i18n from "../i18n";

export const baseURL = import.meta.env.VITE_BASE_URL;

const lang = i18n.language.startsWith("ar") ? "ar" : "en";

const client = axios.create({
  baseURL,
});

export const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  const token = Cookies.get("token");
 
  const onSuccess = (response: AxiosResponse) => response.data;

  try {
    const response = await client({
      ...options,
      headers: {
        "Content-Type": `application/json`,
        "Accept-Language": lang,
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
    return onSuccess(response);
  } catch (error) {
    throw error;
  }
};
