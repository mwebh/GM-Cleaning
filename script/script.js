const menuButton = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");


menuButton.addEventListener('click', () => {
    if (mobileNav.classList.contains("active")) {
        mobileNav.classList.add("hideNav");
        mobileNav.classList.remove("active");
    } else {
        
        mobileNav.classList.add("active");
        mobileNav.classList.remove("hideNav");
    }
})

const cleanHomeText = document.querySelector(".clean-title");
const happyHomeText = document.querySelector(".happy-title");

cleanHomeText.addEventListener('click', () => {
    cleanHomeText.classList.toggle("pink-title");
})
happyHomeText.addEventListener('click', () => {
    happyHomeText.classList.toggle("pink-title");
})