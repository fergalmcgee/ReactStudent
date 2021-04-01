import React, { Component } from 'react';
import Infractions from './Infractions';

export default class Student extends Component {
	render() {
		const {
			id,
			name,
			sClass,
			noHW,
			incompleteHW,
			noBooks,
			infractions,
			key,
		} = this.props.info;
		const { increaseClick, delClick } = this.props;

		return (
			<div className="Student" key={key}>
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
								<button
									name="noHW"
									id="No Homework: "
									onClick={(e) => increaseClick(id, e)}
								>
									+
								</button>
							</h4>
						</div>
						<div className="col-12">
							<h4>
								Incomplete Homework: {incompleteHW}
								<button
									name="incompleteHW"
									id="Incomplete Homework: "
									onClick={(e) => increaseClick(id, e)}
								>
									+
								</button>
							</h4>
						</div>
						<div className="col-12">
							<h4>
								No Books: {noBooks}{' '}
								<button
									name="noBooks"
									id="No Books"
									onClick={(e) => increaseClick(id, e)}
								>
									+
								</button>
							</h4>
						</div>
						<h6>Infractions:</h6>
						{infractions.map((infraction) => (
							<Infractions
								studentID={id}
								key={infraction.id}
								infraction={infraction}
								delClick={delClick}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
