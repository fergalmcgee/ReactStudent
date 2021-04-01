import React, { Component } from 'react';

export default class Infractions extends Component {
	render() {
		const { delClick, studentID } = this.props;
		const { id, key, itype, dateStamp, icode } = this.props.infraction;

		return (
			<div key={key} className="col-12">
				{itype} {dateStamp}
				<button onClick={() => delClick(id, studentID, icode)}>DEL</button>
			</div>
		);
	}
}
