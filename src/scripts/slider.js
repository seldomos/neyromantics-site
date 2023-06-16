const allPersonBlocks = document.querySelectorAll('.person')
const navButtons = document.querySelectorAll('.navigation-buttons')

hideAllPersons(persons = allPersonBlocks)
let selectedId = 0
allPersonBlocks[selectedId].classList.add('show')

function hideAllPersons(persons) {
	persons.forEach(block => {
		block.classList.remove('show')
	})
}
console.log(navButtons[0].children)
for (let i = navButtons[0].children.length - 1; i >= 0; i--) {
	let button = navButtons[0].children[i]
	button.addEventListener('click', () => {
		console.log(button)
		if (button.classList.contains('next')) {
			try {
				selectedId++
				hideAllPersons(allPersonBlocks)
				allPersonBlocks[selectedId].classList.add('show')
			} catch(e) {
				selectedId = 0
				hideAllPersons(allPersonBlocks)
				allPersonBlocks[selectedId].classList.add('show')
			}
		} else {
			try {
				selectedId--
				hideAllPersons(allPersonBlocks)
				allPersonBlocks[selectedId].classList.add('show')
			} catch(e) {
				selectedId = 0
				hideAllPersons(allPersonBlocks)
				allPersonBlocks[selectedId].classList.add('show')
			}
		}
	})
}