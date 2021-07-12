import React, { Component } from 'react';
import ClassNote from './ClassNote';
import AddClassNote from './AddClassNote';

export default class ClassNotes extends Component {
	render() {
		const {
			chosenClass,
			handleAddClassNoteChange,
			handleAddClassNote,
			newClassNote,
			classNotes,
		} = this.props;
		return (
			<div>
				<AddClassNote
					chosenClass={chosenClass}
					newClassNote={newClassNote}
					handleAddClassNote={handleAddClassNote}
					handleAddClassNoteChange={handleAddClassNoteChange}
				/>
				{classNotes
					.filter((classNote) => classNote.id === chosenClass)
					.map((classNote) => (
						<ClassNote key={classNote.id} comments={classNote.comments} />
					))}
			</div>
		);
	}
}
