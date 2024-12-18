import { enumLocale } from "../i18n/types";

export const getLangPath = (
  val: enumLocale,
  pathname: string,
  searchParams?: string
) => {
  const pathSplit = pathname.split("/");
  const lang = pathSplit.filter((f) =>
    Object.values(enumLocale).includes(f as enumLocale)
  );

  let path = pathname;
  if (lang.length) {
    path = path.replace(`${lang[0]}`, `${val}`);
  } else {
    path = `/${val}${path}`;
  }

  if (searchParams) {
    return `${path}?${searchParams}`;
  } else {
    return path;
  }
};
