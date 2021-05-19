import Typewriter from 'typewriter-effect/dist/core';

window.onload = function(event) {
	const about = document.querySelector('#about');
	const resume = document.querySelector('#resume');
	const projects = document.querySelector('#projects');
	const contact = document.querySelector('#contact');


	const mainContent = document.querySelector('#content');

	function TypeString(stringToType){

		const typewriter = new Typewriter('#page-title', {
			cursor:"|",
			loop: true,
	
		});
	
		typewriter
			.typeString(stringToType)
			.pauseFor(3000)
			.deleteAll()
			.start();
	}
	

	TypeString("Welcome");


	about.addEventListener('click', function() {
		TypeString("About");
		mainContent.innerHTML=`
		 <h2>Skills </h2>
		 <h3> Programming Languages</h3>
		 <ul>
			<li class="skill-item"> C
			<div>
			<div class="skill-bar" style="width:70%"></div>
		  </div> 
			</li>

			<li class="skill-item"> SQL
			<div>
			<div class="skill-bar" style="width:70%"></div>
		  </div> 
			</li>
			<li class="skill-item"> TypeScript
			<div>
			<div class="skill-bar" style="width:70%"></div>
		  </div> 
			</li>
			<li class="skill-item"> C++
			<div>
			<div class="skill-bar" style="width:40%"></div>
		  </div> 
			</li>
			<li class="skill-item"> Python
			<div>
			<div class="skill-bar" style="width:40%"></div>
		  </div> 
			</li>
			<li class="skill-item"> Java
			<div>
			<div class="skill-bar" style="width:40%"></div>
		  </div> 
			</li>
			<li class="skill-item"> Haskell
			<div>
			<div class="skill-bar" style="width:40%"></div>
		  </div> 
			</li>
			<li class="skill-item"> R
			<div>
			<div class="skill-bar" style="width:40%"></div>
		  </div> 
			</li>

		 </ul>
		 <h3>I have worked with the following frameworks and technologies: </h3>
		 <div id="framework-grid">
			<img id="react" class="skill-image"/>
			<img id="nextjs" class="skill-image"/>
			<img id="gatsby" class="skill-image"/>
			<img id="nodejs" class="skill-image"/>
			<img id="express" class="skill-image"/>
			<img id="numpy" class="skill-image"/>
			<img id="material-ui" class="skill-image"/>
			<img id="bootstrap" class="skill-image"/>
			<img id="mysql" class="skill-image"/>
			<img id="linux" class="skill-image"/>
			<img id="git" class="skill-image"/>
			<img id="postgres" class="skill-image"/>
			<img id="docker" class="skill-image"/>
			<img id="rest" class="skill-image"/>
			<img id="graphql" class="skill-image"/>
			<img id="mongodb" class="skill-image"/>
			<img id="bootstrap" class="skill-image"/>
			<img id="bootstrap" class="skill-image"/>
			<img id="bootstrap" class="skill-image"/>
			<img id="bootstrap" class="skill-image"/>
			</div>
		`;
	});

	resume.addEventListener('click', function() {

		TypeString("Resume");
		
	});

	projects.addEventListener('click', function() {

		TypeString("Projects");
		
	});

	contact.addEventListener('click', function() {

		TypeString("Contact");

		mainContent.innerHTML=
		`<ul>
			<li>Email : bhavya.jain@mail.utoronto.ca</li>
			<li>Phone : 437-981-0687</li>
		</ul>`
		;
		
	});
};
