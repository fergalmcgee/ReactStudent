import React, { Component } from 'react';

export default class ClassNote extends Component {
	render() {
		const comments = this.props.comments;
		return comments.reverse().map((comment) => (
			<div
				className="badge badge-light"
				style={{
					textAlign: 'left',
					display: 'inline-block',
					width: '100%',
					whiteSpace: 'normal',
				}}
				key={comment.id}
			>
				{comment.cText}
			</div>
		));
	}
}
