import React, { Component } from 'react';
import { Card, Icon, Image, Container, Header, Grid, Divider, List, Accordion, Flag, Segment } from 'semantic-ui-react';
import Footer from './Footer';
import avatarOne from '../assets/avatarOne.jpg';
import { summaryStyle } from '../styles/summary-style';

class Summary extends Component {
	state = {
		activeProjectIndex : 0
	};

	handleActiveProject = (e, project) => {
		const { index } = project;

		this.setState((prevState) => {
			if (prevState.active !== index) return { activeProjectIndex: index };
		});
	};
	render() {
		const { activeProjectIndex } = this.state;
		return (
			<div>
				<Container text textAlign='left' style={summaryStyle.container}>
					<Grid columns={2} stackable>
						<Grid.Row>
							<Grid.Column style={summaryStyle.columnCard}>
								<Card>
									<Image src={avatarOne} style={summaryStyle.avatar} />
									<Card.Content>
										<Card.Header>
											David Portillo <Flag name='canada' />
										</Card.Header>
										<Card.Meta>
											<span className='date'>my little subtitle</span>
										</Card.Meta>
										<Card.Description>David is a full stack Java developer.</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Icon name='user' />
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Header>About</Header>
								<p>
									I’m a full stack software developer at Atos/Syntel, skilled in developing software
									with best practices using React JS framework with Java Spring Boot technologies and
									building, managing Microsoft’s Azure SQL. I’m a highly motivated and professional
									developer that has demonstrated the ability to meet goals and exceed expectations, I
									thrive in finding creative solutions that focuses in resolving and fulfilling
									client’s needs.
								</p>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				<Container text hidden style={summaryStyle.container}>
					<Divider />
				</Container>
				<Container text style={summaryStyle.container}>
					<Header>Objective</Header>
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
				<Container text textAlign='left' style={summaryStyle.container}>
					<Header content='Skills' />
					<Grid columns={3}>
						<Grid.Column>
							<Header as='h3' dividing textAlign='center'>
								Proficient
							</Header>
							<Segment textAlign='center'>
								<List>
									<List.Item>
										<List.Content>Springboot</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>React JS</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>Azure DB</List.Content>
									</List.Item>
								</List>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							<Header as='h3' dividing textAlign='center'>
								Proficient
							</Header>
							<Segment textAlign='center'>
								<List>
									<List.Item>
										<List.Content>Springboot</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>React JS</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>Azure DB</List.Content>
									</List.Item>
								</List>
							</Segment>
						</Grid.Column>
						<Grid.Column>
							<Header as='h3' dividing textAlign='center'>
								Languages
							</Header>
							<Segment textAlign='center'>
								<List>
									<List.Item>
										<List.Content>English</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>Spanish</List.Content>
									</List.Item>
									<List.Item>
										<List.Content>French (learning)</List.Content>
									</List.Item>
								</List>
							</Segment>
						</Grid.Column>
					</Grid>
				</Container>
				<Container text textAlign='left' style={summaryStyle.container}>
					<Header>Projects</Header>
					<Accordion fluid styled>
						<Accordion.Title active={activeProjectIndex === 0} index={0} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							Project 1
						</Accordion.Title>
						<Accordion.Content active={activeProjectIndex === 0}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae maxime eveniet
								aspernatur esse modi id tempore, et officiis, dolorem, cum molestiae! Aspernatur
								explicabo atque minus. Eos velit nesciunt quasi?
							</p>
						</Accordion.Content>
					</Accordion>
					<Accordion fluid styled>
						<Accordion.Title active={activeProjectIndex === 1} index={1} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							Project 2
						</Accordion.Title>
						<Accordion.Content active={activeProjectIndex === 1}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae maxime eveniet
								aspernatur esse modi id tempore, et officiis, dolorem, cum molestiae! Aspernatur
								explicabo atque minus. Eos velit nesciunt quasi?
							</p>
						</Accordion.Content>
					</Accordion>
					<Accordion fluid styled>
						<Accordion.Title active={activeProjectIndex === 2} index={2} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							Project 3
						</Accordion.Title>
						<Accordion.Content active={activeProjectIndex === 2}>
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
