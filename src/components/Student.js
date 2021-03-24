import React, { Component } from 'react';

export default class Student extends Component {
	render() {
		const { id, name, sClass, noHW, incompleteHW, noBooks } = this.props.info;
		const { increaseClick, lowerClick } = this.props;
		return (
			<div className="Student">
				<div
					className="card text-white bg-primary mb-3"
					style={{ width: '100%' }}
				>
					<div className="card-header">{name}</div>
					<div className="card-body">
						<div className="col-12">
							<h4>Class: {sClass}</h4>
						</div>
						<div className="col-12">
							<h4>
								No Homework: {noHW}{' '}
								<button name="noHW" onClick={(e) => increaseClick(id, e)}>
									+
								</button>
							</h4>
						</div>
						<div className="col-12">
							<h4>
								Incomplete Homework: {incompleteHW}{' '}
								<button
									name="incompleteHW"
									onClick={(e) => increaseClick(id, e)}
								>
									+
								</button>
							</h4>
						</div>
						<div className="col-12">
							<h4>
								No Books: {noBooks}{' '}
								<button name="noBooks" onClick={(e) => increaseClick(id, e)}>
									+
								</button>
							</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
