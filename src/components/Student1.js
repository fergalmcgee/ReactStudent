import React, { Component } from 'react';

export default class Student extends Component {
	state = this.props.info;

	increaseHWClick = () => {
		console.log('button was clicked');
		console.log(this.state.noHW);
		this.setState({
			noHW: this.state.noHW + 1,
		});
	};

	lowerHWClick = () => {
		console.log('button was clicked');
		console.log(this.state.noHW);
		this.setState({
			noHW: this.state.noHW - 1,
		});
	};

	render() {
		const { name, sClass, noHW, incompleteHW, noBooks } = this.state;
		// console.log(this.props.info);
		return (
			<div className="Student">
				<div>
					<h3>Student: {name}</h3>
					<h4>Class: {sClass}</h4>
					<h4>
						No Homework: <button onClick={this.lowerHWClick}>-</button> {noHW}{' '}
						<button onClick={this.increaseHWClick}>+</button>
					</h4>
					<h4>Incomplete Homework: {incompleteHW}</h4>
					<h4>No Books: {noBooks}</h4>
				</div>
			</div>
		);
	}
}
