const projects = [
	{
		nr: '001',
		name: 'Глобальный релиз «Нейромантиков». Пристегнитесь!',
		link: 'https://vk.com/neuromantics',
		path: 'src/images/blogs/'
	},
	{
		nr: '002',
		name: 'Кейс для департамента культуры. Приложение «VisitTobolsk»',
		link: 'https://apps.rustore.ru/app/ru.travel.visittobolsk',
		path: 'src/images/blogs/'
	},
	{
		nr: '003',
		name: 'Нейромантики призеры «Всероссийского конкурса open source проектов»',
		link: 'https://vk.com/kvanttob?w=wall-187862365_5853',
		path: 'src/images/blogs/'
	},
	{
		nr: '004',
		name: 'Нейромантики победители фестиваля «Технострелка»!',
		link: 'https://vk.com/kvanttob?w=wall-187862365_5839',
		path: 'src/images/blogs/'
	},
	{
		nr: '005',
		name: 'Кейс для министерства спорта Нижнего Новгорода. Приложение «Здоровяш»',
		link: 'https://github.com/belochka200/zdorovyash',
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
	projectEl.href = project.link;
	projectEl.target = '_blank';

	projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

	app.appendChild(projectEl);
});
