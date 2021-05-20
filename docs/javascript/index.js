import Typewriter from '../snowpack/pkg/typewriter-effect/dist/core.js';
import Projects from './projects.js';
import Languages from './languages.js';
import Technologies from './technologies.js';

import '../scss/styles.css.proxy.js';

window.onload = function() {
	const about = document.querySelector('#about');
	const resume = document.querySelector('#resume');
	const projects = document.querySelector('#projects');
	const contact = document.querySelector('#contact');
	const home = document.querySelector('#home');

	const mainContent = document.querySelector('#content');

	

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
			languageHTML += `<li class="skill-item"> 
			<span class="language">
			${langObj.lang}
			</span>
			<div>
			<div class="skill-bar" style="width:${langObj.prof}"></div>
		  </div> 
			</li>`;
		});
		Technologies.forEach(function(tech){
			technologyHTML+=`
			<img border=0 id="${tech}" class="skill-image"/>
			`;
		});

		mainContent.innerHTML = `
		 <h2>Skills </h2>
		 <h3> Programming Languages</h3>
		 <ul>
			${languageHTML}
		 </ul>
		 <h3> Technological Stack </h3>
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

			projectHTML+=`
			<div class="project-card">

			<video autoplay loop muted playsinline width="100%" height="80%" >
			<source src="${project.vid}" type="video/mp4">
			</video>

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
				<div id="linkedin">
				<h2> Linkedin  </h2>
				<span><a href="https://linkedin.com/in/bhavyaj99">bhavyaj99</a></span>
				</div>
				</li>

				<li>
				<div id="github">
				<h2>Github  </h2>
				<span><a href="https://github.com/bjain853">bjain853</a></span>
				</div>
				</li>
				<li>
				<div id="phone">
				<h2>Phone  </h2>
				<span> (437) 981-0687 </span>
				</div>
				</li>
			</ul>
			</div>`;
		});

	//default behaviour
	TypeString('Welcome');
};
