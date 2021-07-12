import React, { Component } from 'react';
import StudentList from './StudentList';
import StudentData from './StudentData';
import uuid from 'uuid';
import TabNav from './TabNav';
import Tab from './Tab';
import AddNewClass from './AddNewClass';
import AddNewStudent from './AddNewStudent';
import ClassNotes from './ClassNotes';
import ClassData from './ClassData';
import Picker from './Picker';

export default class ClassChoose extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenClass: 'Please Select a class',
			possibleClasses: [],
			students: StudentData,
			selectTab: 'Record',
			newClass: '',
			NewClassClicked: true,
			//delete this
			NewStudentAdd: true,
			newStudent: '',
			newNote: '',
			classNotes: ClassData,
			newClassNote: '',
			editStudent: false,
			//move to student list   display chosen students down a level then update students here and send as props
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

	setSelectedTab = (tab) => {
		this.setState({ selectTab: tab });
	};

	handleChosenClass = (event) => {
		this.setState({ chosenClass: event.target.value });
	};

	handleNewClassChange = (event) => {
		this.setState({ newClass: event.target.value });
	};

	handleNewClass = (event) => {
		if (this.state.newClass === '') {
			event.preventDefault();
			alert('You must enter a class fist');
		} else {
			event.preventDefault();
			this.setState((prevState) => ({
				possibleClasses: [...prevState.possibleClasses, this.state.newClass],
			}));

			const newClass = {
				id: this.state.newClass,
				comments: [],
			};
			this.setState((prevState) => ({
				classNotes: [...prevState.classNotes, newClass],
			}));
			console.log(this.state.classNotes);
			this.setState({
				chosenClass: this.state.newClass,
			});
			this.setState({
				NewClassClicked: !this.state.NewClassClicked,
				newClass: '',
			});
		}
	};

	handleNewClassClicked = () => {
		this.setState({ NewClassClicked: !this.state.NewClassClicked });
	};

	handleNewStudentChange = (event) => {
		this.setState({ newStudent: event.target.value });
	};

	handleNewStudent = (event) => {
		if (this.state.newStudent === '') {
			alert('you must enter a name');
			event.preventDefault();
		} else {
			event.preventDefault();
			const newStudent = {
				//something to do later is to add all this to the state so editing the name
				//will not mess up all the data // but i cant be assed now
				name: this.state.newStudent,
				id: uuid(),
				sClass: this.state.chosenClass,
				noHW: 0,
				incompleteHW: 0,
				noBooks: 0,
				infractions: [],
				studentNotes: [],
			};
			this.setState((prevState) => ({
				students: [...prevState.students, newStudent],
				editStudent: false,
				newStudent: '',
			}));
			console.log(this.state.students);
		}
	};

	handleAddNoteChange = (event) => {
		this.setState({ newNote: event.target.value });
	};

	handleAddNote = (event, studentID) => {
		if (this.state.newNote == '') {
			event.preventDefault();
			alert('You must enter a note first');
		} else {
			event.preventDefault();
			const data = this.state.students.map((student) => {
				if (studentID === student.id) {
					const timeElapsted = Date.now();
					const today = new Date(timeElapsted);
					student.studentNotes.push({
						id: uuid(),
						note: this.state.newNote,
						dateStamp: today.toDateString(),
					});
					return student;
				} else return student;
			});
			this.setState({ students: data });
			this.setState({ newNote: '' });
		}
	};

	handleAddClassNoteChange = (event) => {
		this.setState({ newClassNote: event.target.value });
	};

	handleAddClassNote = (event, chosenClass) => {
		if (this.state.newClassNote === '') {
			event.preventDefault();
			alert('You must add a note first');
		} else {
			event.preventDefault();
			const data = this.state.classNotes.map((note) => {
				if (chosenClass === note.id) {
					const timeElapsted = Date.now();
					const today = new Date(timeElapsted);
					note.comments.push({
						id: uuid(),
						cText: this.state.newClassNote,
						dateStamp: today.toDateString(),
					});
					return note;
				} else return note;
			});
			this.setState({ classNotes: data });
			this.setState({ newClassNote: '' });
		}
	};

	increaseClick = (id, e, name, sid) => {
		console.log(e.target.name);
		const updatedData = this.state.students.map((student) => {
			if (id === student.id) {
				student[name] = student[name] + 1;
				const timeElapsted = Date.now();
				const today = new Date(timeElapsted);
				student.infractions.push({
					id: uuid(),
					itype: sid,
					icode: name,
					dateStamp: today.toDateString(),
				});
			}
			return student;
		});
		this.setState({
			students: updatedData,
		});
	};

	delClick = (iid, studentID, icode) => {
		this.setState((prevState) => {
			return {
				students: prevState.students.map((student) => {
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
	};

	handleStudentEdit = (id) => {
		const filteredStudents = this.state.students.filter(
			(student) => student.id !== id
		);
		const selectedStudent = this.state.students.find(
			(student) => student.id === id
		);

		this.setState({
			newStudent: selectedStudent.name,
			students: filteredStudents,
			editStudent: true,
		});
	};

	handleStudentDelete = (id) => {
		const filteredStudents = this.state.students.filter(
			(student) => student.id !== id
		);

		this.setState({
			students: filteredStudents,
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
					<option defaultValue="Please Select a class" selected>
						{' '}
						Please Select a class{' '}
					</option>
					{this.state.possibleClasses.map((singleChoice) => {
						return (
							<option key={singleChoice} value={singleChoice}>
								{singleChoice}
							</option>
						);
					})}
				</select>
				<TabNav
					tabs={['Record', 'Add', 'Picker', 'Notes']}
					setSelectedTab={this.setSelectedTab}
					selectTab={this.state.selectTab}
				>
					<Tab isSelectedTab={this.state.selectTab === 'Record'}>
						<StudentList
							students={this.state.students}
							chosenClass={this.state.chosenClass}
							increaseClick={this.increaseClick}
							delClick={this.delClick}
							selectTab={this.state.selectTab}
							handleAddNote={this.handleAddNote}
							newNote={this.state.newNote}
							handleAddNoteChange={this.handleAddNoteChange}
						/>
					</Tab>
					<Tab isSelectedTab={this.state.selectTab === 'Add'}>
						<AddNewClass
							handleNewClass={this.handleNewClass}
							handleNewClassChange={this.handleNewClassChange}
							handleNewClassClicked={this.handleNewClassClicked}
							NewClassClicked={this.state.NewClassClicked}
						/>
						<StudentList
							students={this.state.students}
							chosenClass={this.state.chosenClass}
							selectTab={this.state.selectTab}
							newClass={this.state.newClass}
							handleStudentEdit={this.handleStudentEdit}
							handleStudentDelete={this.handleStudentDelete}
						/>
						<AddNewStudent
							handleNewStudent={this.handleNewStudent}
							handleNewStudentChange={this.handleNewStudentChange}
							newStudent={this.state.newStudent}
							NewClassClicked={this.state.NewClassClicked}
							chosenClass={this.state.chosenClass}
							editStudent={this.state.editStudent}
						/>
					</Tab>
					<Tab isSelectedTab={this.state.selectTab === 'Picker'}>
						<Picker
							chosenClass={this.state.chosenClass}
							students={this.state.students}
						/>
					</Tab>
					<Tab isSelectedTab={this.state.selectTab === 'Notes'}>
						<ClassNotes
							chosenClass={this.state.chosenClass}
							classNotes={this.state.classNotes}
							handleAddClassNoteChange={this.handleAddClassNoteChange}
							handleAddClassNote={this.handleAddClassNote}
							newClassNote={this.state.newClassNote}
						/>{' '}
					</Tab>
				</TabNav>
			</div>
		);
	}
}
