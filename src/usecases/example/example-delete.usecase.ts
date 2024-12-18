import {
  ExampleRepository,
  ExampleRepositoryImpl,
} from "../../repositories/example.repository";
import { IExample } from "../../repositories/types/example.type";
import { Response } from "../../repositories/types/response.type";

export interface ExampleDeleteUsecase {
  execute(id: string): Promise<Response<IExample>>;
}

export class ExampleDeleteUsecaseImpl implements ExampleDeleteUsecase {
  constructor(
    private exampleRepository: ExampleRepository = new ExampleRepositoryImpl()
  ) {}

  async execute(id: string) {
    const result = await this.exampleRepository.delete(id);
    return result;
  }
}
