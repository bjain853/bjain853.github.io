import Typewriter from '../snowpack/pkg/typewriter-effect/dist/core.js';
import renderProjects from './projects.js';
import renderTechnologies from './technologies.js';
import renderLangauges from './languages.js';
import Glider from '../snowpack/pkg/glider-js.js';

import '../scss/styles.css.proxy.js';

window.onload = function() {
	const about = document.querySelector('#about');
	const resume = document.querySelector('#resume');
	const projects = document.querySelector('#projects');
	const contact = document.querySelector('#contact');
	const home = document.querySelector('#home');

	const mainContent = document.querySelector('#main-content');

	function TypeString(stringToType) {
		const typewriter = new Typewriter('#location', {
			cursor: '|',
			loop: true
		});
		typewriter.typeString(stringToType).pauseFor(6000).deleteAll().start();
	}

	home.addEventListener('click', function() {
		TypeString('cd ~');
		mainContent.innerHTML = `
		<h2>Introduction</h2>
		<p> 
			Hello! My name is Bhavya and I am a Toronto based Software Developer. I am currently pursuing a Bachelors in Computer Science from University of Toronto
	   </p>`;
	});

	about.addEventListener('click', function() {
		TypeString('cd ~/about');

		mainContent.innerHTML = `
		 <h2>Skills </h2>
		 <h3> Programming Languages</h3>
		 <ul class="language-list">
			${renderLangauges()}
		 </ul>
		 <h3> Technological Stack </h3>
		 <div id="framework-grid">
			${renderTechnologies()}
			</div>
		`;
	});

	resume.addEventListener('click', function() {
		TypeString('cd ~/resume');
		mainContent.innerHTML = `
			<iframe src="../public/files/Resume.pdf"  loading="lazy" width="110%" style="height: 100vh;" />
		`;
	});

	projects.addEventListener('click', function() {
		TypeString('cd ~/projects');
		const projectHTML = renderProjects();
		mainContent.innerHTML = `
		<div id="project-slider">
			${projectHTML}
			</div>
		`;
		const dots = document.querySelectorAll('.dots');
		document.querySelectorAll('.glider').forEach((elem,idx)=>{
			const dot = dots[idx];
			new Glider(elem,{
				scrollLock:true,
				dots:dot
			});
		});
	
	});

	contact.addEventListener('click', function() {
		TypeString('cd ~/contact');

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
				<span> <a href="tel:437-981-0687"> +1 (437) 981-0687 </a> </span>
				</div>
				</li>
			</ul>
			</div>`;
	});

	//default behaviour
	TypeString('cd ~');
};
