import { makeAutoObservable, runInAction } from "mobx";
import {
  CookiesAdapter,
  CookiesAdapterImpl,
  CookiesKey,
} from "../../adapters/cookies.adapter";

interface Store {
  isDarkMode: boolean;
  isReady: boolean;
}

export class ThemeViewModel {
  private store: Store = {
    isDarkMode: true,
    isReady: false,
  };

  constructor(
    private cookiesAdapter: CookiesAdapter = new CookiesAdapterImpl()
  ) {
    makeAutoObservable(this);
  }

  get isDarkMode() {
    return this.store.isDarkMode;
  }

  get isReady() {
    return this.store.isReady;
  }

  set isReady(val: boolean) {
    runInAction(() => {
      this.store.isReady = val;
    });
  }

  set isDarkMode(val: boolean) {
    runInAction(() => {
      this.store.isDarkMode = val;
      this.cookiesAdapter.set(CookiesKey.DarkMode, val);
    });
  }

  initMode() {
    const darkMode: boolean = this.cookiesAdapter.get(CookiesKey.DarkMode);
    this.isDarkMode = darkMode;
    this.isReady = true;
  }
}

const themeViewModel = new ThemeViewModel();

export default themeViewModel;
