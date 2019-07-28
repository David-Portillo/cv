import React, { Component } from 'react';
import { Card, Icon, Image, Container, Header, Grid, Divider, Segment } from 'semantic-ui-react';
import avatarOne from '../assets/avatarOne.jpg';

class Summary extends Component {
	render() {
		return (
			<div>
				<Container
					text
					textAlign="left"
					style={{
						marginTop : '4vh'
					}}>
					<Grid columns={2} stackable>
						<Grid.Row>
							<Grid.Column
								style={{
									display        : 'flex',
									justifyContent : 'center'
								}}>
								<Card>
									<Image
										src={avatarOne}
										style={{
											width     : 'auto',
											height    : '250px',
											objectFit : 'cover'
										}}
									/>
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
				<Container
					text
					hidden
					style={{
						marginTop : '4vh'
					}}>
					<Divider />
				</Container>
				<Container
					text
					style={{
						marginTop : '4vh'
					}}>
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
				<Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
					<Container textAlign="center" />
				</Segment>
			</div>
		);
	}
}

export default Summary;
