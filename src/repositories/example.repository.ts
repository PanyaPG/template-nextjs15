import { AxiosRequestConfig } from "axios";
import axiosAdapter from "../adapters/axios.adapter";
import { requestConfig } from "./request.config";
import { ApiPath } from "./types/api-path.type";
import { IExample } from "./types/example.type";
import { Response } from "./types/response.type";

export interface ExampleRepository {
  getAll(req: IExample): Promise<Response<IExample>>;
  create(req: IExample): Promise<Response<IExample>>;
  getId(id: string): Promise<Response<IExample>>;
  update(id: string, req: IExample): Promise<Response<IExample>>;
  delete(id: string): Promise<Response<IExample>>;
}

export class ExampleRepositoryImpl implements ExampleRepository {
  get headers(): AxiosRequestConfig {
    return requestConfig();
  }

  async getAll(req: IExample) {
    const path = ApiPath.Example;

    const urlSearchParams = new URLSearchParams({
      page: req?.page ?? "1",
      limit: req?.limit ?? "10",
      ...(req?.sort && { sort: req.sort }),
      ...(req?.search && { search: req.search }),
    }).toString();

    const res = await axiosAdapter.get(
      `${path}?${urlSearchParams}`,
      this.headers
    );

    return res.data;
  }

  async create(req: IExample) {
    const path = ApiPath.Example;

    const res = await axiosAdapter.post(`${path}`, req, this.headers);

    return res.data;
  }

  async getId(id: string) {
    const path = ApiPath.Example.replace("{id}", id);

    const res = await axiosAdapter.get(`${path}`, this.headers);

    return res.data;
  }

  async update(id: string, req: IExample) {
    const path = ApiPath.Example.replace("{id}", id);

    const res = await axiosAdapter.put(`${path}`, req, this.headers);

    return res.data;
  }

  async delete(id: string) {
    const path = ApiPath.Example.replace("{id}", id);

    const res = await axiosAdapter.delete(`${path}`, this.headers);

    return res.data;
  }
}
