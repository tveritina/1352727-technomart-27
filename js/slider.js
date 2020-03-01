var firstImg = document.querySelector(".slider-list-one");
var secondtImg = document.querySelector(".slider-list-two");

var iconArrow = document.querySelectorAll(".slider-icon");

iconArrow.forEach(icon => {
    icon.addEventListener("click", function (evt) {
        evt.preventDefault();
        secondtImg.classList.toggle("visually-hidden");
        firstImg.classList.toggle("visually-hidden");
    });
});


