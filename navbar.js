const open = document.querySelector(".open")
const close = document.querySelector(".close")
const navbar = document.querySelector(".nav-section")
const navwrapper = document.querySelector(".nav-wrapper")

open.addEventListener("click", () => {
    if (navwrapper.style.maxHeight) {
        navwrapper.style.maxHeight = ""
        navwrapper.style.height = ""
        navbar.style.height = ""
        navbar.style.maxHeight = ""
    } else {
        navwrapper.style.maxHeight = "500px"
        navbar.style.maxHeight = "500px"
        navwrapper.style.height = "auto"
        navbar.style.height = "auto"
    }
});
