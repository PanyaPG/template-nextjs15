import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

const setUpAxiosMock = (axiosAdapter: AxiosInstance) => {
  const mock = new MockAdapter(axiosAdapter);

  // Mock a GET request to /api/data
  mock.onGet("/v1/auth/login").reply(200, {
    data: "Mocked data for /api/data",
  });
};

export default setUpAxiosMock;
