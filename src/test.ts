import {action, computed, observable, reaction, when} from 'mobx'

let runningId = 0

class Todo {
    id: number = runningId++

    @observable
    name: string = ''
    @observable
    isCompleted: boolean = false

    disposer: () => void

    constructor(name: string) {
        this.name = name

        this.disposer = reaction(
            () => this.isCompleted,
            () => console.log(
                `Todo ${this.name} is ${this.isCompleted ? 'Done' : 'Incomplete'}`
            )
        )
    }

    @action
    updateName(name: string) {
        this.name = name
    }

    @action
    toggledTodo() {
        this.isCompleted = !this.isCompleted
    }

    dispose() {
        this.disposer()
    }
}

class TodoList {
    @observable
    list: Todo[] = []

    constructor() {
        reaction(
            () => this.list.length,
            () => {
                console.log(`Total: ${this.list.length}, Completed: ${this.completed.length}, 
                Incomplete ${this.inComplete.length}`)
            }
        )

        when(
            () => this.list.length > 0 && this.list.every(todo => todo.isCompleted),
            () => console.log('Amazing Work')
        )
    }

    @action
    addTodo(name: string) {
        this.list.push(new Todo(name))
    }

    @action
    removeTodo(name: string) {
        const todo = this.list.find(todo => todo.name === name)

        if (todo) {
            todo.dispose()
            const todoIndex = this.list.indexOf(todo)
            this.list.splice(todoIndex, 1)
        }
    }

    @computed
    get completed() {
        return this.list.filter(todo => todo.isCompleted)
    }

    @computed
    get inComplete() {
        return this.list.filter(todo => !todo.isCompleted)
    }

}

const todoList = new TodoList()

todoList.addTodo('first')

// export {};