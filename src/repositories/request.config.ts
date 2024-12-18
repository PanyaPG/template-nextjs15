import { AxiosRequestConfig } from "axios";
import {
  CookiesAdapter,
  CookiesAdapterImpl,
  CookiesKey,
} from "../adapters/cookies.adapter";

const cookiesAdapter: CookiesAdapter = new CookiesAdapterImpl();

export const requestConfig = (): AxiosRequestConfig => {
  const token = cookiesAdapter.get(CookiesKey.AccessToken);

  return {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
};

export const requestConfigFile = (): AxiosRequestConfig => {
  const token = cookiesAdapter.get(CookiesKey.AccessToken);

  return {
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    responseType: "blob",
  };
};
