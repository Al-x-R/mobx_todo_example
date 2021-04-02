import {observable, autorun, action, runInAction, when, reaction, computed} from 'mobx'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 1000))

class Person {
    @observable
    firstName: string = ''
    @observable
    lastName: string = ''
    @observable
    age: number = 18
    @observable
    isAlive: boolean = true
    @observable
    dollars: number = 250

    constructor(props: Partial<Person>) {
        Object.assign(this, props)

        when(
            () => this.age > 99,
            () => this.bury()
        )
    }

    @action
    bury() {
        this.isAlive = false
    }

    @action
    setAge(age: number) {
        this.age = age
    }

    @computed
    get uah() {
        console.log('calculation')
        return this.dollars * 28
    }
}

const newPerson = new Person({
    firstName: 'New',
    lastName: 'Person',
})

autorun(async () => {
    console.log(`Person is: ${newPerson.firstName} ${newPerson.lastName} ${newPerson.age}-${newPerson.isAlive}`)
    console.log(`Person uah: ${newPerson.uah} `)
})

reaction(
    () => !newPerson.isAlive,
    () => console.log('RIP')
)

newPerson.setAge(100)

export {};