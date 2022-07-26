const menuItems = document.querySelectorAll(".navlink")
const itemsActivity = document.querySelectorAll(".activity")
const nextBtns = document.querySelectorAll(".next-btn")

function setActiveMenuItem(activity) {
    itemsActivity.forEach((item) => {
        if (item.getAttribute("activity") == activity) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")                
        }
    })
    menuItems.forEach((item) => {
        if (item.getAttribute("activity") == activity) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
}

// вешаем слушатель кликер на кнопки смены экрана
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        let activity = item.getAttribute('activity')
        setActiveMenuItem(activity)
    })
})
nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let activity = btn.getAttribute('activity')
        console.log(btn);
        setActiveMenuItem(activity)
    })
})


// beta
const names = document.querySelectorAll(".card-name")
const cards = document.querySelectorAll(".card-body")
names.forEach((item) => {
    item.addEventListener("mouseover", () => {
        const cardId = item.getAttribute("id")
        cards.forEach((card) => {
            if (card.getAttribute("id") == cardId) {
                card.style.height = "100px"
            } else {
                card.style.height = "0"
            }
        })
    })
    item.addEventListener("mouseout", () => {
        // const cardId = item.getAttribute("id")
        cards.forEach((card) => {
            card.style.height = "0"
        })
    })
})

// beta cursor
const cursor = document.querySelector(".cursor")
const moveCursor = (e) => {
    const Y = e.clientY
    const X = e.clientX
    cursor.style.transform = `translate3d(${X}px, ${Y}px, 0)`
}

window.addEventListener("mousemove", moveCursor)