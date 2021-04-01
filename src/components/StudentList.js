import React, { Component } from 'react';
import Student from './Student';

export default class StudentList extends Component {
	render() {
		const students = this.props.students;
		const { increaseClick, delClick, chosenClass } = this.props;
		return (
			<ul>
				{students
					.filter((student) => student.sClass === chosenClass)
					.map((student) => (
						<Student
							key={student.id}
							info={student}
							increaseClick={increaseClick}
							delClick={delClick}
							chosenClass={chosenClass}
						/>
					))}
			</ul>
		);
	}
}
