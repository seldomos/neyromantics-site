// beta
const names = document.querySelectorAll(".card-name")
const cards = document.querySelectorAll(".card-body")

names.forEach((item) => {
    item.addEventListener("mouseover", () => {
        const cardId = item.getAttribute("id")
        cards.forEach((card) => {
            if (card.getAttribute("id") == cardId) {

            } else {

            }
        })
    })
    item.addEventListener("mouseout", () => {
        // const cardId = item.getAttribute("id")
        cards.forEach((card) => {

        })
    })
})
