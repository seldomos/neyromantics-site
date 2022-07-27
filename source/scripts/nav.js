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