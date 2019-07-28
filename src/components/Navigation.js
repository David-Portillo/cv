import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navigation = (props) => {
	return (
		<Menu>
			<Menu.Item header>Bio</Menu.Item>
			<Menu.Item name="about">About</Menu.Item>
		</Menu>

	);
};

export default Navigation;
