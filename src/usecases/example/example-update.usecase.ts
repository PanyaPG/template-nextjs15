import {
  ExampleRepository,
  ExampleRepositoryImpl,
} from "../../repositories/example.repository";
import { IExample } from "../../repositories/types/example.type";
import { Response } from "../../repositories/types/response.type";

export interface ExampleUpdateUsecase {
  execute(id: string, req: IExample): Promise<Response<IExample>>;
}

export class ExampleUpdateUsecaseImpl implements ExampleUpdateUsecase {
  constructor(
    private exampleRepository: ExampleRepository = new ExampleRepositoryImpl()
  ) {}

  async execute(id: string, req: IExample) {
    const result = await this.exampleRepository.update(id, req);
    return result;
  }
}
