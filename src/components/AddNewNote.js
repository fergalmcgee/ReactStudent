import React, { Component } from 'react';

export default class AddNewNote extends Component {
	render() {
		const {
			handleAddNote,
			handleAddNoteChange,
			newNote,
			studentID,
		} = this.props;

		return (
			<form
				onSubmit={(event) => handleAddNote(event, studentID)}
				key={studentID}
			>
				<div className="form-group">
					<label>Enter Note </label>
					<textarea
						key={studentID}
						className="form-control"
						rows="3"
						value={newNote}
						onChange={handleAddNoteChange}
					/>

					<input
						type="button"
						class="btn btn-dark"
						style={{ marginTop: '0.3rem' }}
						type="submit"
						value="Submit"
					></input>
				</div>
			</form>
		);
	}
}
