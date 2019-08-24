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
import { summaryObject } from '../utilities/summaryObject';

class Summary extends Component {
	state = {
		activeExpIndex : 0
	};

	handleActiveProject = (e, project) => {
		const { index } = project;

		this.setState((prevState) => {
			if (prevState.active !== index) return { activeExpIndex: index };
		});
	};
	render() {
		const { activeExpIndex } = this.state;
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
											{summaryObject.cardHeader} &nbsp;
											<Flag name='canada' />
										</Card.Header>
										<Card.Meta>
											<span>{summaryObject.cardMetaContent}</span>
										</Card.Meta>
										<Card.Description>{summaryObject.cardDescription}</Card.Description>
									</Card.Content>
									<Card.Content extra textAlign='center'>
										{summaryObject.extraContent.map((extra, index) => {
											return (
												<Popup
													key={`pop-${index}`}
													content={extra.content}
													trigger={<Icon name={extra.icon} />}
												/>
											);
										})}
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<Header style={{ padding: '5px', backgroundColor: '#bbded6' }}>About</Header>
								<p>{summaryObject.aboutContent}</p>
								<Header style={{ padding: '5px', backgroundColor: '#bbded6' }}>Favorite Quote</Header>
								<q>{summaryObject.favQuote.quote}</q>
								<div
									style={{
										textAlign : 'right'
									}}>
									{summaryObject.favQuote.author}
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				<Container text hidden style={summaryStyle.container}>
					<Divider />
				</Container>
				<Container text style={summaryStyle.container}>
					<Header style={{ padding: '5px', backgroundColor: '#bbded6' }}>Objective</Header>
					<p>{summaryObject.objectiveContent}</p>
				</Container>
				<Container text textAlign='left' style={summaryStyle.container}>
					<Header content='Skills' style={{ padding: '5px', backgroundColor: '#bbded6' }} />
					<Header as='h3' dividing textAlign='center'>
						Proficient
					</Header>
					<Segment textAlign='center'>
						<List horizontal>
							{summaryObject.skills.proficient.map((skill, index) => {
								return (
									<List.Item key={`prof-${index}`}>
										<List.Content>{skill}</List.Content>
									</List.Item>
								);
							})}
						</List>
					</Segment>
					<Header as='h3' dividing textAlign='center'>
						Languages
					</Header>
					<Grid columns={3}>
						{summaryObject.skills.languages.map((language, index) => {
							return (
								<Grid.Column key={`lang-${index}`}>
									{/* title can go here */}
									<Segment textAlign='center'>
										<List>
											{language.list.map((item, index) => {
												return (
													<List.Item key={`lang-item-${index}`}>
														<List.Content>{item}</List.Content>
													</List.Item>
												);
											})}
										</List>
									</Segment>
								</Grid.Column>
							);
						})}
					</Grid>
				</Container>
				<Container text textAlign='left' style={summaryStyle.container}>
					<Header style={{ padding: '5px', backgroundColor: '#bbded6' }}>Experience</Header>
					<Accordion fluid styled>
						<Accordion.Title active={activeExpIndex === 0} index={0} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							Atos/Syntel
						</Accordion.Title>
						<Accordion.Content active={activeExpIndex === 0}>
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
						<Accordion.Title active={activeExpIndex === 1} index={1} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							Experience 2
						</Accordion.Title>
						<Accordion.Content active={activeExpIndex === 1}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae maxime eveniet
								aspernatur esse modi id tempore, et officiis, dolorem, cum molestiae! Aspernatur
								explicabo atque minus. Eos velit nesciunt quasi?
							</p>
						</Accordion.Content>
					</Accordion>
					<Accordion fluid styled>
						<Accordion.Title active={activeExpIndex === 2} index={2} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							Experience 3
						</Accordion.Title>
						<Accordion.Content active={activeExpIndex === 2}>
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
