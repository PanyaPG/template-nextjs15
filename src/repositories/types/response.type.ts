export interface Response<Item> {
  data: Item;
  message: string;
  result: boolean;
  status: number;
  statusCode: number;
  error?: {
    error: string;
    message: string[];
  };
  code?: string;
}

export interface IResActions {
  generatedMaps: any[];
  raw: any[];
  affected: number;
}
