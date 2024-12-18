import {
  ExampleRepository,
  ExampleRepositoryImpl,
} from "../../repositories/example.repository";
import { IExample } from "../../repositories/types/example.type";
import { Response } from "../../repositories/types/response.type";

export interface ExampleIdUsecase {
  execute(id: string): Promise<Response<IExample>>;
}

export class ExampleIdUsecaseImpl implements ExampleIdUsecase {
  constructor(
    private exampleRepository: ExampleRepository = new ExampleRepositoryImpl()
  ) {}

  async execute(id: string) {
    const result = await this.exampleRepository.getId(id);
    return result;
  }
}
