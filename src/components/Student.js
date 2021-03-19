import React, { Component } from 'react';

export default class Student extends Component {
	render() {
		const { id, name, sClass, noHW, incompleteHW, noBooks } = this.props.info;
		const { increaseHWClick, lowerHWClick } = this.props;
		return (
			<div className="Student">
				<div className="container">
					<div className="card text-white bg-primary mb-3">
						<div className="card-header">{name}</div>
						<div className="card-body">
							<div className="col-12">
								<h4>Class: {sClass}</h4>
							</div>
							<div className="col-12">
								<h4>
									No Homework:{' '}
									<button onClick={() => lowerHWClick(id)}>-</button> {noHW}{' '}
									<button onClick={() => increaseHWClick(id)}>+</button>
								</h4>
							</div>
							<div className="col-12">
								<h4>Incomplete Homework: {incompleteHW}</h4>
							</div>
							<div className="col-12">
								<h4>No Books: {noBooks}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
