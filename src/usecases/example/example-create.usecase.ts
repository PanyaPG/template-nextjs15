import {
  ExampleRepository,
  ExampleRepositoryImpl,
} from "../../repositories/example.repository";
import { IExample } from "../../repositories/types/example.type";
import { Response } from "../../repositories/types/response.type";

export interface ExampleCreateUsecase {
  execute(req: IExample): Promise<Response<IExample>>;
}

export class ExampleCreateUsecaseImpl implements ExampleCreateUsecase {
  constructor(
    private exampleRepository: ExampleRepository = new ExampleRepositoryImpl()
  ) {}

  async execute(req: IExample) {
    const result = await this.exampleRepository.create(req);
    return result;
  }
}
