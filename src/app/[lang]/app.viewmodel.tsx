import { NotificationPlacement } from "antd/es/notification/interface";
import { configure, makeAutoObservable } from "mobx";
import {
  CookiesAdapter,
  CookiesAdapterImpl,
} from "../../../src/adapters/cookies.adapter";

configure({
  enforceActions: "never",
});

export class AppViewModel {
  language = "English";
  placementNoti: NotificationPlacement = "bottomRight";
  title: string = "test";

  constructor(
    private readonly cookiesAdapter: CookiesAdapter = new CookiesAdapterImpl()
  ) {
    makeAutoObservable(this);
  }

  // get lang(): string {
  //   return this.language;
  // }

  // set lang(val: enumLocale) {
  //   runInAction(() => {
  //     switch (val) {
  //       case "en":
  //         this.language = "English";
  //         break;
  //       case "th":
  //         this.language = "Thai";
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }
}

const appViewModel = new AppViewModel();

export default appViewModel;
