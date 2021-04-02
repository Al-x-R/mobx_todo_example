import {action, observable} from 'mobx'
import RootStore from "../root-store";

class Todo {

}

export default class TodoStore {
    @observable
    todoList: Todo[] = []

    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }

    @action
    addTodo(name: string, userId: number) {
        this.todoList.push(new Todo(name, userId))
    }

    @action
    getTodo(name: string) {
        return this.todoList.find(todo => todo.name === name)
    }

    @action
    getUserTodos(userId: number) {
        return this.todoList.filter(todo => todo.userId === userId)
    }

    @action
    removeTodo(name: string) {
        const todoToRemove = this.getTodo(name)

        if (todoToRemove) {
            // todoToRemove.disporse()
            const todoIndex = this.todoList.indexOf(todoToRemove)
            this.todoList.splice(todoIndex, 1)
        }
    }

}