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
	'word',
	'powerpoint',
	'flask'
];

function renderTechnologies(){
	let technologyHTML ='';
	Technologies.forEach(function(tech){
		technologyHTML+=`
		<div id="${tech}" class="skill-image"></div>
		`;
	});
	return technologyHTML;
}

export default renderTechnologies;
