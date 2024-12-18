import axios from "axios";
import "../extensions/string.extension";
import setUpAxiosMock from "../mock/axios.mock";

export const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`;

const axiosAdapter = axios.create({
  baseURL,
  validateStatus: () => true,
});

const isMock = process.env.NEXT_PUBLIC_IS_AXIOS_ADAPTER ?? "";

if (isMock.toBoolean()) {
  setUpAxiosMock(axiosAdapter);
}

export default axiosAdapter;
