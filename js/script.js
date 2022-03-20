const buttons = document.querySelectorAll(".gallery--button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.className === "gallery--nextButton" ? 1 : -1;
        const slides = button.closest(".gallery").querySelector(".gallery--slides");

        const activeSlide = slides.querySelector(".activeSlide");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1
        }
        if (newIndex >= slides.children.length) {
            newIndex = 0
        }
        slides.children[newIndex].classList.add("activeSlide");
        activeSlide.classList.remove("activeSlide");
    })
})

const seeMoreButtons = document.querySelectorAll(".section__offerSeeMoreButton");

seeMoreButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.innerHTML += "";
    })
})