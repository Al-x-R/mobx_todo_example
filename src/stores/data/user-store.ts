import {action, computed, observable} from 'mobx'
import RootStore from "../root-store";

let runningId = 0

class User {
    id: number = runningId++
    private rootStore: RootStore;
    @observable
    name: string = ''

    constructor(name: string, rootStore: RootStore) {
        this.name = name
        this.rootStore = rootStore
    }

    @computed
    get todos() {
        this.rootStore.dataStore.todoStore.getUserTodos(this.id)
    }
}

export default class UserStore {
    @observable
    usersList: User[] = []

    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

    }

    @action
    addUser(name: string) {
        this.usersList.push(new User(name, this.rootStore))
    }

    @action
    getUser(name: string) {
        return this.usersList.find(user => user.name === name)
    }

    @action
    removeUser(name: string) {
        const user = this.getUser(name)

        if (user) {
            user.todos.forEach(todo => this.rootStore.dataStore.todoStore.removeTodo(todo.name))
        }
    }
}