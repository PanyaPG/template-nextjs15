import { enumLocale } from "../i18n/types";

export interface LocaleParams {
  locale: enumLocale;
}

export interface Params<T = LocaleParams> {
  params: T;
}
