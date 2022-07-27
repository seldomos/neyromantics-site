document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader")
    setTimeout(() => {
        loader.classList.add("not-active")
    }, 1000)
    setTimeout(() => {
        loader.classList.add("disable")
    }, 1500)
})