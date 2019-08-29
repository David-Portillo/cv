import React from 'react';
export const summaryObject = {
	cardHeader       : 'David Portillo',
	cardDescription  : 'placeholder',
	cardMetaContent  : 'Full Stack Java Developer',
	extraContent     : [
		{ icon: 'music', content: 'I enjoy listening to music' },
		{ icon: 'plane', content: 'I like travelling to new places' },
		{ icon: 'tv', content: 'I like to chill by watching tv' },
		{ icon: 'code', content: 'I code, code, code' },
		{ icon: 'game', content: 'I enjoy playing games with an interesting story' },
		{ icon: 'beer', content: 'No need to explain' }
	],

	aboutContent     : `
    I’m a full stack Java developer at Atos/Syntel, skilled in developing software with 
    best practices using React JS framework with Java Spring Boot technologies and
    building, managing Microsoft’s Azure SQL. I’m an initiative-taking and professional
    developer that has demonstrated the ability to meet goals and exceed expectations, I
    thrive in finding creative solutions that focuses in resolving and fulfilling
    client’s needs.`,

	favQuote         : () => {
		return (
			<span>
				<q>Success is not final; failure is not fatal. It is the courage to continue that counts</q>
				<div style={{ textAlign: 'right', paddingTop: '10px' }}>
					<p>- Winston Churchill</p>
				</div>
			</span>
		);
	},

	objectiveContent : `
    To seek oportunity to create innovative application solutions that focuses on resolving business
    problems.`,

	skills           : {
		proficient  : [ `Springboot (Java)`, `React JS & Redux`, `Microsoft SQL` ],
		experienced : [
			{ title: '', list: [ 'HTML & JavaScript', 'CSS', 'Java' ] },
			{ title: '', list: [ 'Azure SQL', 'MySQL', 'GraphQL' ] },
			{ title: 'Frameworks', list: [ 'Springboot', 'React Js & Redux', 'Material UI' ] }
		]
	},

	languages        : [ 'English (Proficient)', 'Spanish (Proficient)' ],

	workExperience   : {
		exp1 : {
			companyName : 'Atos/Syntel',
			content     : () => {
				return (
					<span>
						<p>
							I collaborated in an ECOM development team, helped develop many different microservice
							applications using Spring Boot Framework (Java), front-end applications using React Js,
							Redux and Material UI, maintained and developed databases using Microsoft Server Azure SQL
							and MySQL that would in turn help fulfill clients needs.
						</p>
						<p>
							Using Agile, I’ve worked closely with clients to gather business requirements, created and
							completed user stories, participated in daily stand-ups, and executed SDLC. Upon joining the
							team I’ve collaborated in migrating legacy application that needed to be changed from Struts
							technology to Spring Boot refactoring legacy code into a maintainable, scalable code.
						</p>
						<p>
							Created many small Proof of Concept for other teams to help them find creative solutions to
							their client’s needs.
						</p>
						<p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Focal points:</p>
						<ul>
							<li>Developed Microservices using Spring Boot Framework (Java).</li>
							<li>Carefully created database designs using UML, ERDs.</li>
							<li>Developed, managed and implemented Microsoft Server Azure SQL.</li>
							<li>Participated in an agile development team.</li>
							<li>Managed an offshore team for project development.</li>
							<li>Developed CRUD applications using React Js, Redux, GraphQL, Material UI.</li>
						</ul>
					</span>
				);
			}
		}
	}
};
