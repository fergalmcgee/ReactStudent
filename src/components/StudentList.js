import React, { Component } from 'react';
import Student from './Student';
import StudentData from './StudentData';

export default class StudentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: StudentData,
		};
	}

	increaseHWClick = (id) => {
		const updatedData = this.state.students.map((student) => {
			if (id === student.id) {
				student.noHW = student.noHW + 1;
			}
			return student;
		});
		this.setState({
			students: updatedData,
		});
	};

	lowerHWClick = (id) => {
		const updatedData = this.state.students.map((student) => {
			if (id === student.id) {
				student.noHW = student.noHW - 1;
			}
			return student;
		});
		this.setState({
			students: updatedData,
		});
	};

	render() {
		return (
			<ul>
				{this.state.students.map((student) => (
					<Student
						key={student.id}
						info={student}
						lowerHWClick={this.lowerHWClick}
						increaseHWClick={this.increaseHWClick}
					/>
				))}
			</ul>
		);
	}
}
