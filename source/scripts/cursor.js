const cursor = document.querySelector(".cursor")
window.addEventListener("mousemove", (e) => {
    const Y = e.clientY
    const X = e.clientX
    cursor.style.transform = `translate3d(${X}px, ${Y}px, 0)`
})