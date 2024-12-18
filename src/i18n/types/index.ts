export enum enumLocale {
  En = "en",
  Th = "th",
}

export interface IDictionary {
  products: IProduct;
}

interface IProduct {
  cart: string;
}
