import React, { Component } from 'react';

export default class Tab extends Component {
	render() {
		if (this.props.isSelectedTab) {
			return <div>{this.props.children}</div>;
		}
		return null;
	}
}
