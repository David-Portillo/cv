import React, { Component } from 'react';
import { Card, Icon, Image, Container, Header, Grid, Divider, List, Accordion, Segment, Flag } from 'semantic-ui-react';
import Footer from './Footer';
import avatarOne from '../assets/avatarOne.jpg';
import { summaryStyle } from '../styles/summary-style';

class Summary extends Component {
	state = {
		activeProjectIndex: 0
	};

	handleActiveProject = (e, project) => {
		const { index } = project;
		const { activeProjectIndex } = this.state;

		this.setState((prevState) => {
			if (prevState.active !== index) return { activeProjectIndex: index };
		});
	};
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
										<Card.Header>
											David Portillo <Flag name="canada" />
										</Card.Header>
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
				<Container text textAlign="left" style={summaryStyle.container}>
					<Header>Summary</Header>
					<Grid columns={3} textAlign="left" padded>
						<Grid.Column>
							<List>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 1</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 2</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 3</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 4</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column>
							<List>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 1</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 2</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 3</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 4</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column>
							<List>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 1</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 2</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 3</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="users" />
									<List.Content>Value 4</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
					</Grid>
				</Container>
				<Container text textAlign="left" style={summaryStyle.container}>
					<Header>Summary</Header>
					<Accordion fluid styled>
						<Accordion.Title
							active={this.state.activeProjectIndex === 0}
							index={0}
							onClick={this.handleActiveProject}>
							<Icon name="dropdown" />
							Project 1
						</Accordion.Title>
						<Accordion.Content active={this.state.activeProjectIndex === 0}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae maxime eveniet
								aspernatur esse modi id tempore, et officiis, dolorem, cum molestiae! Aspernatur
								explicabo atque minus. Eos velit nesciunt quasi?
							</p>
						</Accordion.Content>
					</Accordion>
					<Accordion fluid styled>
						<Accordion.Title
							active={this.state.activeProjectIndex === 1}
							index={1}
							onClick={this.handleActiveProject}>
							<Icon name="dropdown" />
							Project 2
						</Accordion.Title>
						<Accordion.Content active={this.state.activeProjectIndex === 1}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae maxime eveniet
								aspernatur esse modi id tempore, et officiis, dolorem, cum molestiae! Aspernatur
								explicabo atque minus. Eos velit nesciunt quasi?
							</p>
						</Accordion.Content>
					</Accordion>
				</Container>

				<Footer />
			</div>
		);
	}
}

export default Summary;
