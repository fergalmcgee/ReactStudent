import React, { Component } from 'react';

export default class AddNewClass extends Component {
	displayAddClass() {
		return (
			<div>
				<form onSubmit={(event) => this.props.handleNewClass(event)}>
					<h3>Enter Class Name: </h3>
					<input
						type="text"
						value={this.props.newClass}
						onChange={this.props.handleNewClassChange}
					></input>
					<input
						type="button"
						class="btn btn-dark"
						style={{ marginTop: '0.3rem' }}
						type="submit"
						value="Submit"
					></input>
				</form>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.props.NewClassClicked ? (
					<div style={{ textAlign: 'right' }}>
						<button
							type="button"
							class="btn btn-dark"
							style={{ marginTop: '0.3rem' }}
							type="submit"
							value="Submit"
							onClick={() => this.props.handleNewClassClicked()}
						>
							Add New Class Here
						</button>
					</div>
				) : null}
				{this.props.NewClassClicked ? null : this.displayAddClass()}
			</div>
		);
	}
}
