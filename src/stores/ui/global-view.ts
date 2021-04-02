import {autorun, observable} from 'mobx'
import RootStore from "../root-store";

export default class GlobalView {
    @observable
    themeColor: string = 'grey'

    constructor(rootStore: RootStore) {
        autorun(() => {
            console.log(rootStore.dataStore.todoStore.list.length)
        })
    }

}