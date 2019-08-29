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
								<Header content='About Me' style={{ padding: '5px', backgroundColor: '#bbded6' }} />
								<p>{summaryObject.aboutContent}</p>
								<Header
									content='Favorite Quote'
									style={{ padding: '5px', backgroundColor: '#bbded6' }}
								/>
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
					<Header content='Objective' style={{ padding: '5px', backgroundColor: '#bbded6' }} />
					<p>{summaryObject.objectiveContent}</p>
				</Container>
				<Container text textAlign='left' style={summaryStyle.container}>
					<Header content='Skills' style={{ padding: '5px', backgroundColor: '#bbded6' }} />
					<Header content='Proficient' as='h3' dividing textAlign='center' />
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
					<Header content='Experienced' as='h3' dividing textAlign='center' />
					<Grid columns={3}>
						{summaryObject.skills.experienced.map((exp, index) => {
							return (
								<Grid.Column key={`exp-${index}`}>
									{/* title can go here */}
									<Segment textAlign='center'>
										<List>
											{exp.list.map((item, index) => {
												return (
													<List.Item key={`exp-item-${index}`}>
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
					<Header content='Languages' as='h3' dividing textAlign='center' />
					<Segment textAlign='center'>
						<List horizontal>
							{summaryObject.languages.map((language, index) => {
								return (
									<List.Item key={`lang-${index}`}>
										<List.Content>{language}</List.Content>
									</List.Item>
								);
							})}
						</List>
					</Segment>
				</Container>
				<Container text textAlign='left' style={summaryStyle.container}>
					<Header content='Work Experience' style={{ padding: '5px', backgroundColor: '#bbded6' }} />
					<Accordion fluid styled>
						<Accordion.Title active={activeExpIndex === 0} index={0} onClick={this.handleActiveProject}>
							<Icon name='dropdown' />
							{summaryObject.workExperience.exp1.companyName}
						</Accordion.Title>
						<Accordion.Content active={activeExpIndex === 0}>
							{summaryObject.workExperience.exp1.content()}
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
