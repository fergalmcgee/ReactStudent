import React, { Component } from 'react'
import Student from "./Student"
import StudentData from './StudentData'

export default class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: StudentData
        }
    }

    render() {
        return (
            <div>
                {this.state.students.map((student) => (<Student key= {student.id} info={student}/>))}
            </div>
        )
    }
}
