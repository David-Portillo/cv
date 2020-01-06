import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {
	state = {
		activeItem : 'home'
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		return (
			<Menu stackable>
				<Menu.Item name="home" active={this.state.activeItem === 'home'} onClick={this.handleItemClick}>
					Bio
				</Menu.Item>
			</Menu>
		);
	}
}

export default Navigation;
