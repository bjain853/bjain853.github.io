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
	'powerpoint'
];

function renderTechnologies(){
	let technologyHTML ='';
	Technologies.forEach(function(tech){
		technologyHTML+=`
		<img border=0 loading="lazy" id="${tech}" class="skill-image"/>
		`;
	});
	return technologyHTML;
}

export default renderTechnologies;
