import React, { Component } from 'react';
import { Card, Icon, Image, Container, Header, Grid, Divider } from 'semantic-ui-react';
import Footer from './Footer';
import avatarOne from '../assets/avatarOne.jpg';
import { summaryStyle } from '../styles/summary-style';

class Summary extends Component {
	render() {
		return (
			<div>
				<Container text textAlign="left" style={summaryStyle.container}>
					<Grid columns={2} stackable>
						<Grid.Row>
							<Grid.Column style={summaryStyle.columnCard}>
								<Card>
									<Image src={avatarOne} style={summaryStyle.avatar} />
									<Card.Content>
										<Card.Header>David Portillo</Card.Header>
										<Card.Meta>
											<span className="date">my little subtitle</span>
										</Card.Meta>
										<Card.Description>David is a software developer.</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Icon name="user" />
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Header>Summary</Header>
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
									dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
									montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
									pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
									aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
									vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt.
									Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				<Container text hidden style={summaryStyle.container}>
					<Divider />
				</Container>
				<Container text style={summaryStyle.container}>
					<Header>Summary</Header>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
						consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
						In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
						mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
						eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
						lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
						laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
						ultricies nisi.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
						consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
						In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
						mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
						eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
						lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
						laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
						ultricies nisi.
					</p>
				</Container>

				<Footer />
			</div>
		);
	}
}

export default Summary;
