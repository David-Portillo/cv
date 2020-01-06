import React from 'react';
import {Container, Segment} from 'semantic-ui-react';
import {footerStyle} from '../styles/footer-style';
const Footer = (props) => {
	return (
		<Segment inverted style={footerStyle.footer} vertical>
			<Container textAlign='center'>
				Developed using React JS and Semantic UI for React <br />
				<br /> <b>Thanks For Visiting!</b>
			</Container>
		</Segment>
	);
};

export default Footer;
