let video = document.querySelector("#team_video")
changeVideoSize()
window.addEventListener("resize", () => {
    changeVideoSize()
})

function changeVideoSize() {
    let width = video.offsetWidth
    video.style.height = width / 16 * 9 + "px"
}