var firstImg = document.querySelector(".slider-list-one");
var secondtImg = document.querySelector(".slider-list-two");
var iconArrowLeft = document.querySelector(".slider-icon-left");
var iconArrowRight = document.querySelector(".slider-icon-right");

var toggleSliderOne = document.querySelector("#one");
var toggleSliderTwo = document.querySelector("#two");
var sliderToggles = document.querySelectorAll('[name="slider"]')

var deliveryItem = document.querySelector(".delivery-service");
var guaranteeItem = document.querySelector(".guarantee-service");
var creditItem = document.querySelector(".credit-service");

var deliveryMenu = document.querySelector(".service-menu button:nth-child(1)");
var guaranteeMenu = document.querySelector(".service-menu button:nth-child(2)");
var creditMenu = document.querySelector(".service-menu button:nth-child(3)");

iconArrowLeft.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstImg.classList.remove("visually-hidden");
    secondtImg.classList.add("visually-hidden");
    sliderToggles[0].checked = true;
});

iconArrowRight.addEventListener("click", function (evt) {
    evt.preventDefault();
    firstImg.classList.add("visually-hidden");
    secondtImg.classList.remove("visually-hidden");
    sliderToggles[1].checked = true;
});



toggleSliderOne.addEventListener("click", function () {
    firstImg.classList.remove("visually-hidden");
    secondtImg.classList.add("visually-hidden");
});

toggleSliderTwo.addEventListener("click", function () {
    firstImg.classList.add("visually-hidden");
    secondtImg.classList.remove("visually-hidden");
});


deliveryMenu.addEventListener("click", function () {
    deliveryMenu.classList.add("service-item-active");
    guaranteeMenu.classList.remove("service-item-active");
    creditMenu.classList.remove("service-item-active");

    deliveryItem.classList.remove("visually-hidden");
    guaranteeItem.classList.add("visually-hidden");
    creditItem.classList.add("visually-hidden");
});

guaranteeMenu.addEventListener("click", function () {
    guaranteeMenu.classList.add("service-item-active");
    deliveryMenu.classList.remove("service-item-active");
    creditMenu.classList.remove("service-item-active");

    deliveryItem.classList.add("visually-hidden");
    guaranteeItem.classList.remove("visually-hidden");
    creditItem.classList.add("visually-hidden");
});

creditMenu.addEventListener("click", function () {
    creditMenu.classList.add("service-item-active");
    deliveryMenu.classList.remove("service-item-active");
    guaranteeMenu.classList.remove("service-item-active");

    deliveryItem.classList.add("visually-hidden");
    guaranteeItem.classList.add("visually-hidden");
    creditItem.classList.remove("visually-hidden");
});
