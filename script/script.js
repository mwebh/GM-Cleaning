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