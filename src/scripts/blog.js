const projects = [
	{
		nr: '001',
		name: 'Новый выпуск нашего подкаста sudo podcast',
		link: 'https://codepen.io/FlorinPop17/full/gOYZxyE',
		path: 'src/images/blogs/'
	},
	{
		nr: '001',
		name: 'Кейс департамента культуры. Приложение "VisitTobolsk"',
		link: 'https://vk.com/kvanttob?w=wall-187862365_5853',
		path: 'src/images/blogs/'
	},
	{
		nr: '002',
		name: 'Нейромантики призеры FOSS',
		link: 'https://vk.com/kvanttob?w=wall-187862365_5853',
		path: 'src/images/blogs/'
	},
	{
		nr: '003',
		name: 'Double Noise Flow Field',
		link: 'https://codepen.io/FlorinPop17/full/GRKwmgK',
		path: 'src/images/blogs/'
	},
	{
		nr: '004',
		name: 'Catch the insect',
		link: 'https://codepen.io/FlorinPop17/full/NWKELoq',
		path: 'src/images/blogs/'
	},
	{
		nr: '005',
		name: 'User Profile Design',
		link: 'https://codepen.io/FlorinPop17/full/QWLzdrV',
		path: 'src/images/blogs/'
	},
	
];

const app = document.getElementById('app');
const imgBaseURL = '';

projects.forEach(project => {
	const title = `${project.name}`;
	const imgURL = imgBaseURL + project.path +project.nr + '.jpg';
	
	const projectEl = document.createElement('a');
	projectEl.classList.add('project');
	projectEl.href = project.path;
	projectEl.target = '_blank';

	projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

	app.appendChild(projectEl);
});
