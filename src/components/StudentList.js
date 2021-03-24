import React, { Component } from 'react';
import Student from './Student';

export default class StudentList extends Component {
	render() {
		const students = this.props.ChosenClassStudents;
		const { increaseClick, lowerClick } = this.props;
		return (
			<ul>
				{students.map((student) => (
					<Student
						key={student.id}
						info={student}
						lowerHWClick={this.lowerHWClick}
						increaseClick={increaseClick}
						lowerClick={lowerClick}
					/>
				))}
			</ul>
		);
	}
}
