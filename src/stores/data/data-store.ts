import UserStore from "./user-store";
import RootStore from "../root-store";

export default class DataStore {
    userStore: UserStore;

    constructor(rootStore: RootStore) {
        this.userStore = new UserStore(rootStore)
    }
}