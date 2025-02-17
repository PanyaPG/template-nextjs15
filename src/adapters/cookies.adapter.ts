import Cookies, { CookieGetOptions } from "universal-cookie";
import { decryptData, encryptData } from "../utils/cryptoJS.util";

export enum CookiesKey {
  AccessToken = "CK_ACCESS_TOKEN",
  RefreshToken = "CK_REFRESH_TOKEN",
  DarkMode = "CK_DARK_MODE",
  Permission = "CK_PERMISSION",
  ProfileInfo = "CK_PROFILE_INFO",
}

export interface CookiesAdapter {
  get(key: CookiesKey, options?: CookieGetOptions): any;
  set(key: CookiesKey, value: any, seconds?: number): void;
  delete(key: CookiesKey): void;
}

export class CookiesAdapterImpl {
  cookieStore = new Cookies(null, { path: "/" });

  get(key: CookiesKey, options?: CookieGetOptions) {
    const val = this.cookieStore.get(key, options);
    return decryptData(val);
  }

  set(key: CookiesKey, value: any, seconds?: number) {
    this.cookieStore.set(key, encryptData(value), {
      ...(seconds && { expires: new Date(Date.now() + 1000 * seconds) }),
    });
  }

  delete(key: CookiesKey) {
    this.cookieStore.remove(key);
  }
}
