import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class Infractions extends Component {
	render() {
		const { delClick, studentID } = this.props;
		const { id, key, itype, dateStamp, icode } = this.props.infraction;

		return (
			<div key={key} className="row" style={{ marginBottom: '1rem' }}>
				<div className="col-9">
					{itype} | {dateStamp}
				</div>
				<div className="col-3">
					<FontAwesomeIcon
						icon={faTrash}
						size={'lg'}
						type={'button'}
						onClick={() => delClick(id, studentID, icode)}
					/>
				</div>
			</div>
		);
	}
}
