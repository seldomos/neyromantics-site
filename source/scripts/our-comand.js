const names = document.querySelectorAll(".name")
const blocks = document.querySelectorAll(".info-block")

names.forEach((item) => {
    item.addEventListener("click", () => {
        names.forEach((name) => {
            name.classList.remove("active")
            blocks.forEach((block) => {
                block.classList.remove("active")
            })
        })
        const id = item.getAttribute("id")
        blocks.forEach((block) => {
            if (block.getAttribute("id") == id) {
                block.classList.add("active")
                item.classList.add("active")
            }
        })
    })
})
