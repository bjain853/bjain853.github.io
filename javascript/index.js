import Typewriter from 'typewriter-effect/dist/core';
import '../scss/styles.scss';

window.onload = function() {
	const about = document.querySelector('#about');
	const resume = document.querySelector('#resume');
	const projects = document.querySelector('#projects');
	const contact = document.querySelector('#contact');
	const home = document.querySelector('#home');

	const mainContent = document.querySelector('#content');

	const Projects =[
		{
			name:"Proflix",
			summary:"A streaming platform built for ease of use and user privacy",
			link:"https://github.com/bjain853/Proflix",
			img:"",
			techStack:[]
		},
		{
			name:"Code Collab",
			summary:"A collaborative cloud-based code editor capable of real time editing and sharing",
			img:"",
			link:"https://github.com/bjain853/codecollab",
			techStack:[]
		},
		{
			name:"Web Gallery",
			summary:"A secure image respository where users can see other user's posts and comment on those too",
			img:"",
			link:"https://github.com/bjain853/webgallery",
			techStack:[]
		},
		{
			name:"Microblog",
			summary:"A blog where people can comment and like and/or dislike other user's posts",
			img:"",
			link:"https://github.com/bjain853/microblog",
			techStack:[]
		},
		{
			name:"UImpactify MVP",
			summary:"A MVP for an Ed-tech UImpactify",
			link:"",
			img:"",
			techStack:[]
		},
	];

	const Languages = [
		{ lang: 'C', prof: '90%' },
		{ lang: 'C++', prof: '60%' },
		{ lang: 'Java', prof: '80%' },
		{ lang: 'Python', prof: '75%' },
		{ lang: 'JavaScript', prof: '90%' },
		{ lang: 'TypeScript', prof: '60%' },
		{ lang: 'CSS3', prof: '85%' },
		{ lang: 'HTML5', prof: '90%' }
	];

	const Technologies = [
		'react',
		'nextjs',
		'gatsby',
		'nodejs',
		'express',
		'numpy',
		'material-ui',
		'bootstrap',
		'mysql',
		'linux',
		'git',
		'postgres',
		'docker',
		'rest',
		'graphql',
		'mongodb',
		'springboot',
		'android',
		'excel',
		'word'
	];

	function TypeString(stringToType) {
		const typewriter = new Typewriter('#page-title', {
			cursor: '|',
			loop: true
		});

		typewriter.typeString(stringToType).pauseFor(3000).deleteAll().start();
	}

	

	home.addEventListener('click',function(){
		TypeString('Welcome');
		mainContent.innerHTML=`   <h2>Introduction</h2>
		<p> A tech enthusiast with a passion for software development </p>`;
	});

	about.addEventListener('click', function() {
		TypeString('About');
		let languageHTML = '';
		let technologyHTML = '';
		Languages.forEach(function(langObj) {
			languageHTML += `<li class="skill-item"> ${langObj.lang}
			<div>
			<div class="skill-bar" style="width:${langObj.prof}"></div>
		  </div> 
			</li>`;
		});
		Technologies.forEach(function(tech){
			technologyHTML+=`
			<img id="${tech}" class="skill-image"/>
			`;
		});

		mainContent.innerHTML = `
		 <h2>Skills </h2>
		 <h3> Programming Languages</h3>
		 <ul>
			${languageHTML}
		 </ul>
		 <h3>I have worked with the following frameworks and technologies: </h3>
		 <div id="framework-grid">
			${technologyHTML}
			</div>
		`;
	});

	resume.addEventListener('click', function() {
		TypeString('Resume');
		mainContent.innerHTML=`
			<iframe src="../public/files/Resume.pdf" width="100%" style="height: 100vh;" />
		`
	});

	projects.addEventListener('click', function() {
		TypeString('Projects');
		let projectHTML = "";

		Projects.forEach(function(project){
			let techStackHTML = "";
			project.techStack.forEach(function(tech){
				techStackHTML +=` ${tech} `;
			});

			projectHTML+=`<div class="project-card">
			<div class="project-container">
			  <img class="posted-image" alt="No Image Available" src="${project.img}"/>
			</div>
			<div class="project-detail-container">
				<span class="project-title">
				<a href="${project.link}">
				${project.name}
				</a>
				  </span>
			  <span class="project-summary">
				${project.summary}
			  </span>
			  <span class="tech-stack">
				${techStackHTML}
			</span>
			</div>  
			</div>
			`;
		});
		mainContent.innerHTML=
		`<div id="projects-contents">
			${projectHTML}
			</div>
		`;
	});
	
		contact.addEventListener('click', function() {
			TypeString('Contact');
	
			mainContent.innerHTML = `
			<div id="contact-info">
			<ul>
				<li>
				<div id="email">
				<h2>Email </h2>
				<span><a href="mailto:bhavya.jain@mail.utoronto.ca">bhavya.jain@mail.utoronto.ca</a></span>
				</div>
				</li>
	
				<li>
				<div id="phone">
				<h2>Phone  </h2>
				<span> 437-981-0687 </span>
				</div>
				</li>
			</ul>
			</div>`;
		});

	//default behaviour
	TypeString('Welcome');
};
