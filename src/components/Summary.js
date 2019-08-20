import React, { Component } from 'react';
import {
	Card,
	Icon,
	Image,
	Container,
	Header,
	Grid,
	Divider,
	List,
	Accordion,
	Flag,
	Segment,
	Popup
} from 'semantic-ui-react';
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
											David Portillo &nbsp;
											<Flag name='canada' />
										</Card.Header>
										<Card.Meta>
											<span className='date'>Full Stack Java Developer</span>
										</Card.Meta>
										<Card.Description>placeholder</Card.Description>
									</Card.Content>
									<Card.Content extra textAlign='center'>
										<Popup content='I enjoy listening to music' trigger={<Icon name='music' />} />
										&nbsp;
										<Popup
											content='I like travelling to new places'
											trigger={<Icon name='plane' />}
										/>
										&nbsp;
										<Popup content='I like to chill by watching tv' trigger={<Icon name='tv' />} />
										&nbsp;
										<Popup content='I code, code, code' trigger={<Icon name='code' />} /> &nbsp;
										<Popup
											content='I enjoy playing games with an interesting story'
											trigger={<Icon name='game' />}
										/>
										&nbsp;
										<Popup content='no need to explain' trigger={<Icon name='beer' />} />
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Header>About</Header>
								<p>
									I’m a full stack Java developer at Atos/Syntel, skilled in developing software with
									best practices using React JS framework with Java Spring Boot technologies and
									building, managing Microsoft’s Azure SQL. I’m an initiative-taking and professional
									developer that has demonstrated the ability to meet goals and exceed expectations, I
									thrive in finding creative solutions that focuses in resolving and fulfilling
									client’s needs.
								</p>
								<Header>Favorite Quote</Header>
								<q>
									Success is not final; failure is not fatal. It is the courage to continue that
									counts
								</q>
								<div
									style={{
										textAlign : 'right'
									}}>
									- Winston Churchill
								</div>
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
						To seek oportunity to create innovative application solutions that focuses on resolving business
						problems.
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
					<Header>Experience</Header>
					<Accordion fluid styled>
						<Accordion.Title active={activeProjectIndex === 0} index={0} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							Atos/Syntel
						</Accordion.Title>
						<Accordion.Content active={activeProjectIndex === 0}>
							<p>
								I collaborated in an ECOM development team, helped develop many different microservice
								applications using Spring Boot Framework (Java), front-end applications using React Js,
								Redux and Material UI, maintained and developed databases using Microsoft Server Azure
								SQL and MySQL that would in turn help fulfill clients needs.<br />
								Using Agile, I’ve worked closely with clients to gather business requirements, created
								and completed user stories, participated in daily stand-ups, and executed SDLC. Upon
								joining the team I’ve collaborated in migrating legacy application that needed to be
								changed from Struts technology to Spring Boot refactoring legacy code into a
								maintainable, scalable code. <br />
								Created many small Proof of Concept for other teams to help them find creative solutions
								to their client’s needs.
								<br />
								<br />
								<i>
									<b>Focal points:</b>
								</i>
							</p>

							<ul>
								<li>Developed Microservices using Spring Boot Framework (Java).</li>
								<li>Carefully created database designs using UML, ERDs.</li>
								<li>Developed, managed and implemented Microsoft Server Azure SQL.</li>
								<li>Participated in an agile development team.</li>
								<li>Managed an offshore team for project development.</li>
								<li>Developed CRUD applications using React Js, Redux, GraphQL, Material UI.</li>
							</ul>
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
