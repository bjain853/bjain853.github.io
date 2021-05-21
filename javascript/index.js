import Typewriter from 'typewriter-effect/dist/core';
import renderProjects from './projects';
import renderTechnologies from './technologies';
import renderLangauges from './languages';
import Glider from 'glider-js';

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

	home.addEventListener('click', function() {
		TypeString('Welcome');
		mainContent.innerHTML = `
		<h2>Introduction</h2>
		<p> 
			Hello! My name is Bhavya and I am a Toronto based Software Developer. I am currently pursuing a Bachelors in Computer Science from University of Toronto
	   </p>`;
	});

	about.addEventListener('click', function() {
		TypeString('About');

		mainContent.innerHTML = `
		 <h2>Skills </h2>
		 <h3> Programming Languages</h3>
		 <ul>
			${renderLangauges()}
		 </ul>
		 <h3> Technological Stack </h3>
		 <div id="framework-grid">
			${renderTechnologies()}
			</div>
		`;
	});

	resume.addEventListener('click', function() {
		TypeString('Resume');
		mainContent.innerHTML = `
			<iframe src="../public/files/Resume.pdf"  loading="lazy" width="110%" style="height: 100vh;" />
		`;
	});

	projects.addEventListener('click', function() {
		TypeString('Projects');
		const projectHTML = renderProjects();
		mainContent.innerHTML = `
		<div id="project-slider">
			${projectHTML}
			</div>
		`;
		document.querySelectorAll('.glider').forEach(elem=>{
			new Glider(elem,{
				slidesToShow:1.05,
				slidesToScroll:1,
				scrollLock:true,
				rewind:true,
				draggable:true
			});
		});
	
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
				<span><a href="mailto:bhavya.jain@mail.utoronto.ca">bhavya.jain@mail.utoronto.ca </a></span>
				</div>
				</li>
			
				<li>
				<div id="linkedin">
				<h3> Linkedin  </h3>
				<span><a href="https://linkedin.com/in/bhavyaj99" target="_blank"> bhavyaj99 </a></span>
				</div>
				</li>

				<li>
				<div id="github">
				<h3>Github  </h3>
				<span><a href="https://github.com/bjain853" target="_blank"> bjain853 </a></span>
				</div>
				</li>
				<li>
				<div id="phone">
				<h3>Phone  </h3>
				<span> <a href="tel:437-981-0687">(437) 981-0687> </a> </span>
				</div>
				</li>
			</ul>
			</div>`;
	});

	//default behaviour
	TypeString('Welcome');
};
