import React, { Component } from 'react';

export default class AddClassNote extends Component {
	render() {
		const chosenClass = this.props.chosenClass;
		const { newClassNote, handleAddClassNote, handleAddClassNoteChange } =
			this.props;
		return (
			<form
				onSubmit={(event) => handleAddClassNote(event, chosenClass)}
				key={chosenClass}
			>
				{chosenClass === 'Please Select a class' ? (
					<h6>Please select a class or add one</h6>
				) : (
					<div className="form-group">
						<label>Enter Note For Class {chosenClass}: </label>
						<textarea
							key={chosenClass}
							className="form-control"
							rows="3"
							value={newClassNote}
							onChange={handleAddClassNoteChange}
						/>

						<input type="submit" value="Submit"></input>
					</div>
				)}
			</form>
		);
	}
}
