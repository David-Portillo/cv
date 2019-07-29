import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { footerStyle } from '../styles/footer-style';
const Footer = (props) => {
	return (
		<Segment inverted style={footerStyle.footer} vertical>
			<Container textAlign="center" />
		</Segment>
	);
};

export default Footer;
