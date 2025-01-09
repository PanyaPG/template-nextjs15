export enum enumLocale {
  En = "en",
  Th = "th",
}

export interface IDictionary {
  products: IProduct;
  login: ILogin;
}

interface IProduct {
  cart: string;
}

interface ILogin {
  title: string;
  username: string;
  usernameRequired: string;
  password: string;
  passwordRequired: string;
  notAccount: string;
  btnLogin: string;
  registerNow: string;
}
