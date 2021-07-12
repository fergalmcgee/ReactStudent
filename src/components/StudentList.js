import React, { Component } from 'react';
import Student from './Student';

export default class StudentList extends Component {
	render() {
		const students = this.props.students;
		const {
			increaseClick,
			delClick,
			chosenClass,
			selectTab,
			handleAddNote,
			handleAddNoteChange,
			newNote,
			handleStudentEdit,
			handleStudentDelete,
		} = this.props;
		return (
			<div>
				{chosenClass === 'Please Select a class' ? (
					<h6>Please select a class or add one</h6>
				) : (
					<div>
						{students
							.filter((student) => student.sClass === chosenClass)
							.map((student) => (
								<Student
									key={student.id}
									info={student}
									increaseClick={increaseClick}
									delClick={delClick}
									chosenClass={chosenClass}
									selectTab={selectTab}
									handleAddNote={handleAddNote}
									newNote={newNote}
									handleAddNoteChange={handleAddNoteChange}
									handleStudentEdit={handleStudentEdit}
									handleStudentDelete={handleStudentDelete}
								/>
							))}
					</div>
				)}
			</div>
		);
	}
}
