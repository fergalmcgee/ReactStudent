import React, { Component } from 'react';

export default class ViewStudentNotes extends Component {
	render() {
		const { note, dateStamp } = this.props.note;
		return (
			<div>
				<span
					className="badge badge-light"
					style={{ display: 'inline-block', marginBottom: '0.3rem' }}
				>
					{dateStamp}
				</span>
				<div
					className="badge badge-light"
					style={{
						textAlign: 'left',
						display: 'inline-block',
						width: '100%',
						whiteSpace: 'normal',
					}}
				>
					{note.split('\n').map((line) => {
						return (
							<span>
								{line}
								<br />
							</span>
						);
					})}
				</div>
				<hr class="solid"></hr>
			</div>
		);
	}
}
