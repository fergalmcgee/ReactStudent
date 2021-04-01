import React, { Component } from 'react';
import StudentList from './StudentList';
import StudentData from './StudentData';
import uuid from 'uuid';

export default class ClassChoose extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenClass: '',
			possibleClasses: [],
			students: StudentData,
			//move to student list   display chosen students down a level then update students here and send as props
			ChosenClassStudents: StudentData,
		};
	}
	//move to student list
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

	// updateChosenClass = ////think

	increaseClick = (id, e) => {
		const updatedData = this.state.ChosenClassStudents.map((student) => {
			if (id === student.id) {
				student[e.target.name] = student[e.target.name] + 1;
				const timeElapsted = Date.now();
				const today = new Date(timeElapsted);
				student.infractions.push({
					id: uuid(),
					itype: e.target.id,
					icode: e.target.name,
					dateStamp: today.toDateString(),
				});
			}
			return student;
		});
		this.setState({
			ChosenClassStudents: updatedData,
		});
	};

	delClick = (iid, studentID, icode) => {
		console.log('......');
		this.setState((prevState) => {
			return {
				ChosenClassStudents: prevState.ChosenClassStudents.map((student) => {
					if (student.id === studentID) {
						return {
							...student,
							[icode]: student[icode] - 1,
							infractions: student.infractions.filter(
								(infraction) => infraction.id !== iid
							),
						};
					} else return student;
				}),
			};
		});
		//CHECK AGAIN!!!!!!!!!!
		// 	console.log('id when it come in: ', iid);
		// 	const updatedData = this.state.students.map((student) => {
		// 		if (student.id === studentID) {
		// 			return {
		// 				...student,
		// 				[icode]: student[icode] - 1,
		// 				infractions: student.infractions.filter((infraction) => {
		// 					return infraction.id !== iid;
		// 				}),
		// 			};
		// 		}
		// 	});
		// 	console.log('updataed data: ', updatedData);
		// 	this.setState(
		// 		{
		// 			students: updatedData,
		// 		},
		// 		() => {
		// 			console.log('state students: ', this.state.students);
		// 		}
		// 	);
		// };

		// componentDidUpdate(prevProps, prevState, snapshop) {
		// 	console.log('in the update');
		// 	// console.log('prev props', prevProps.students);
		// 	// console.log('this is students', prevState.students);
		// 	// console.log('this is the state', this.state.students);
		// 	console.log('           ');
		// 	if (this.state.chosenClassStudents !== prevState.ChosenClassStudents) {
		// 		let students = this.state.ChosenClassStudents;
		// 		this.setState({
		// 			ChosenClassStudents: students,
		// 		});
		// 	}
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
					<option defaultValue> Please Select a class </option>
					{this.state.possibleClasses.map((singleChoice) => {
						return (
							<option key={singleChoice} value={singleChoice}>
								{singleChoice}
							</option>
						);
					})}
				</select>
				<StudentList
					ChosenClassStudents={this.state.ChosenClassStudents}
					increaseClick={this.increaseClick}
					delClick={this.delClick}
				/>
			</div>
		);
	}
}
