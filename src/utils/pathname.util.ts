import { enumLocale } from "../i18n/types";

export const getPathname = (pathname: string) => {
  let path = pathname;
  const pathSplit = pathname.split("/");
  const lang = pathSplit.filter((f) =>
    Object.values(enumLocale).includes(f as enumLocale)
  );

  if (lang.length) {
    path = path.replace(`/${lang[0]}`, "");
  }

  return path;
};
