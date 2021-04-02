import {observable, autorun, action, runInAction} from 'mobx'

// console.log('it works')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const waitForPromise = () => new Promise(resolve => setTimeout(resolve, 1000))

// const person = observable({
//     firstName: 'Mob',
//     lastName: 'X'
// })
//
// console.log(`Person is `, person)

class Person {
    @observable
    firstName: string;
    @observable
    lastName: string

    constructor(name: string, lastName: string) {
        this.firstName = name
        this.lastName = lastName
    }

    // @action
    // updateFirstName(name: string) {
    //     this.firstName = name
    // }
    //
    // @action
    // updateLastName(name: string) {
    //     this.lastName = name
    // }
}

const newPerson = new Person('New', 'Person')

autorun(async() => {
    console.log(`Person name is: ${newPerson.firstName} ${newPerson.lastName}`)
})

// newPerson.updateFirstName(' 1')
// newPerson.updateLastName(' 2')

runInAction( () => {
    newPerson.firstName = 'runInAction first'
    newPerson.lastName = 'runInAction last'
})

// const updated = action(() => {
//     newPerson.firstName = 'Action name'
// })
//
// updated()

export {};