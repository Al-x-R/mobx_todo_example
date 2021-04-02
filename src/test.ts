import {observable} from 'mobx'

console.log('it works')

const person = observable({
    firstName: 'Mob',
    lastName: 'X'
})

console.log(`our person is `, person)

class Person {
    @observable
    firstName: string;

    constructor(name: string) {
        this.firstName = name
    }
}

const newPerson = new Person('new name')

console.log('new person is ', newPerson)

export {};