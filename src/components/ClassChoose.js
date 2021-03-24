import React, { Component } from 'react';
import StudentList from './StudentList';
import StudentData from './StudentData';

export default class ClassChoose extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenClass: '',
			possibleClasses: [],
			students: StudentData,
			ChosenClassStudents: StudentData,
		};
	}

	componentDidMount() {
		const studentClasses = this.state.students.map((student) => {
			return student.sClass;
		});

		const uniqueClasses = studentClasses.filter(
			(v, i, a) => a.indexOf(v) === i
		);
		this.setState({ possibleClasses: uniqueClasses });
	}

	handleChosenClass = (event) => {
		this.setState({ chosenClass: event.target.value }, () => {
			const chosenStudents = this.state.students.filter(
				(student) => student.sClass === this.state.chosenClass
			);
			this.setState({ ChosenClassStudents: chosenStudents });
		});
	};

	increaseClick = (id, e) => {
		const updatedData = this.state.students.map((student) => {
			if (id === student.id) {
				student[e.target.name] = student[e.target.name] + 1;

				console.log(student[e.target.name]);
			}
			return student;
		});
		this.setState({
			students: updatedData,
		});
	};

	lowerClick = (id) => {
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
			<div>
				<select
					className="form-control form-control-lg mb-3"
					aria-label=".form-select-lg example"
					value={this.state.chosenClass}
					onChange={this.handleChosenClass}
				>
					<option selected> Please Select a class </option>
					{this.state.possibleClasses.map((singleChoice) => {
						return <option value={singleChoice}>{singleChoice}</option>;
					})}
				</select>
				<StudentList
					ChosenClassStudents={this.state.ChosenClassStudents}
					increaseClick={this.increaseClick}
					lowerClick={this.lowerClick}
				/>
			</div>
		);
	}
}
