const menuButton = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");

const barOne = document.querySelector(".bar1");
const barTwo = document.querySelector(".bar2");
const barThree = document.querySelector(".bar3");


menuButton.addEventListener('click', () => {
    if (mobileNav.classList.contains("active")) {
        mobileNav.classList.add("hideNav");
        mobileNav.classList.remove("active");

        barOne.classList.remove("bar1active");
        barTwo.classList.remove("bar2active");
        barThree.classList.remove("bar3active");

        barOne.classList.add("returnbar1");
        barTwo.classList.add("returnbar2");
        barThree.classList.add("returnbar3");

    } else {
        barOne.classList.remove("returnbar1");
        barTwo.classList.remove("returnbar2");
        barThree.classList.remove("returnbar3");

        barOne.classList.add("bar1active");
        barTwo.classList.add("bar2active");
        barThree.classList.add("bar3active");


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