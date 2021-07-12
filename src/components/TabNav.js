import React, { Component } from 'react';

export default class TabNav extends Component {
	render() {
		return (
			<div>
				<ul className="nav nav-tabs">
					{this.props.tabs.map((tab) => {
						const active = tab === this.props.selectTab ? 'active' : ' ';

						return (
							<li className="nav-item" key={tab}>
								<a
									className={'nav-link ' + active}
									onClick={() => this.props.setSelectedTab(tab)}
								>
									{tab}
								</a>
							</li>
						);
					})}
				</ul>
				{this.props.children}
			</div>
		);
	}
}
