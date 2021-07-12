import React, { Component } from 'react';

export default class AddNewStudent extends Component {
	render() {
		return (
			<div>
				{this.props.NewClassClicked &&
				this.props.chosenClass !== 'Please Select a class' ? (
					<form onSubmit={(event) => this.props.handleNewStudent(event)}>
						{console.log(this.props.editStudent)}
						{this.props.editStudent ? (
							<h3>Edit Students Name</h3>
						) : (
							<h3>Enter New Student Name: </h3>
						)}
						<input
							type="text"
							value={this.props.newStudent}
							onChange={this.props.handleNewStudentChange}
						></input>
						{this.props.editStudent ? (
							<input type="submit" value="Edit"></input>
						) : (
							<input type="submit" value="Submit"></input>
						)}
					</form>
				) : null}
			</div>
		);
	}
}
