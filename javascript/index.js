import Typewriter from 'typewriter-effect/dist/core';
import Projects from './projects';
import Languages from './languages';
import Technologies from './technologies';

import '../scss/styles.scss';

window.onload = function() {
	const about = document.querySelector('#about');
	const resume = document.querySelector('#resume');
	const projects = document.querySelector('#projects');
	const contact = document.querySelector('#contact');
	const home = document.querySelector('#home');

	const mainContent = document.querySelector('#main-content');

	

	function TypeString(stringToType) {
		const typewriter = new Typewriter('#page-title', {
			cursor: '|',
			loop: true
		});

		typewriter.typeString(stringToType).pauseFor(3000).deleteAll().start();
	}

	

	home.addEventListener('click',function(){
		TypeString('Welcome');
		mainContent.innerHTML=`       <h2>Introduction</h2>
		<p> 
			Hello! My name is Bhavya and I am a Toronto based Software Developer. I am currently pursuing a Bachelors in Computer Science from University of Toronto
	   </p>`;
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
			<img border=0 loading="lazy" id="${tech}" class="skill-image"/>
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
			<iframe src="../public/files/Resume.pdf"  loading="lazy" width="110%" style="height: 100vh;" />
		`
	});

	projects.addEventListener('click', function() {
		TypeString('Projects');
		let projectHTML = "";

		Projects.forEach(function(project){
			let techStackHTML = "";
			let projectImages='';
			project.techStack.forEach(function(tech){
				techStackHTML +=` 
				<li>
				${tech} 
				</li>
				`;
			});

			project.images.forEach(function(image,idx){
				projectImages+=`
				<li>
					<div class="image-slide" id="slide-${idx}" alt="No Image Available">
						<img  src="${image}" height=60% width=60%  />
					</div>
				</li>
				`;
			});

			projectHTML+=`

			<div class="project-slide">

			<div class="image-slider">
			<ul>
				${projectImages}
			</ul>
			</div>

			<div class="project-detail-container">
				<span class="project-title">
				<a href="${project.link}" target="_blank">
				${project.name}
				</a>
				  </span>
			  <span class="project-summary">
				${project.summary}
			  </span>
			  <div class="tech-stack-project">
			  <span> Tech stack learnt </span>
			  <ul>
				${techStackHTML}
			</ul>
			</div>
			</div>  
			</div>
			`;
		});
		mainContent.innerHTML=
		`<div id="project-slider">
			${projectHTML}
			</div>
		`;
	});
	
		contact.addEventListener('click', function() {
			TypeString('Contact');
	
			mainContent.innerHTML = `
			<div id="contact-info">
			<h2> Feel free to reach me at </h2>
			<ul>
				<li>
				<div id="email">
				<h3>Email </h3>
				<span><a href="mailto:bhavya.jain@mail.utoronto.ca">bhavya.jain@mail.utoronto.ca</a></span>
				</div>
				</li>
			
				<li>
				<div id="linkedin">
				<h3> Linkedin  </h3>
				<span><a href="https://linkedin.com/in/bhavyaj99">bhavyaj99</a></span>
				</div>
				</li>

				<li>
				<div id="github">
				<h3>Github  </h3>
				<span><a href="https://github.com/bjain853">bjain853</a></span>
				</div>
				</li>
				<li>
				<div id="phone">
				<h3>Phone  </h3>
				<span> <a href="tel:437-981-0687">(437) 981-0687</a> </span>
				</div>
				</li>
			</ul>
			</div>`;
		});

	//default behaviour
	TypeString('Welcome');
};
