import {observable} from 'mobx'

const demoSchool = {
    'id': 1,
    'name': 'Course name',
    'courses': [
        {
            'id': 1,
            'name': 'MobX & React',
            'students': [
                {
                    'id': 1,
                    'name': 'User name'
                }
            ]
        }
    ]
}

class Student {
    id: number
    @observable
    name: string

    constructor(student: Student) {
        this.id = student.id
        this.name = student.name
    }
}

class Course {
    id: number
    @observable
    name: string
    @observable
    students: Student[]

    constructor(course: Course) {
        this.id = course.id
        this.name = course.name
        this.students = course.students.map(student => new Student(student))
    }
}

class School {
    id: number
    @observable
    name: string
    @observable
    courses: Course[]

    constructor(school: School) {
        this.id = school.id
        this.name = school.name
        this.courses = school.courses.map(course => new Course(course))
    }
}

const goodPractice = new School(demoSchool)
console.log(goodPractice)