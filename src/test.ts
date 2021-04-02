import {observable, autorun, action, runInAction} from 'mobx'

// console.log('it works')
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

    constructor(name: string) {
        this.firstName = name
    }

    // @action
    // updateFirstName(name: string) {
    //     this.firstName = name
    // }
}

const newPerson = new Person('New Person')

autorun(() => {
    console.log(`Person name is ${newPerson.firstName}`)
})
//
// newPerson.updateFirstName(' test')

runInAction(() => {
    newPerson.firstName = 'runInAction name'
})

export {};