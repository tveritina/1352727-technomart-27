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



var deliveryItem = document.querySelector(".delivery-service");
var guaranteeItem = document.querySelector(".guarantee-service");
var creditItem = document.querySelector(".credit-service");

var deliveryMenu = document.querySelector(".service-menu li:nth-child(1)");
var guaranteeMenu = document.querySelector(".service-menu li:nth-child(2)");
var creditMenu = document.querySelector(".service-menu li:nth-child(3)");

deliveryMenu.addEventListener("click", function () {
    deliveryMenu.classList.add("service-item-active");
    guaranteeMenu.classList.remove("service-item-active");
    creditMenu.classList.remove("service-item-active");
});

guaranteeMenu.addEventListener("click", function () {
    guaranteeMenu.classList.add("service-item-active");
    deliveryMenu.classList.remove("service-item-active");
    creditMenu.classList.remove("service-item-active");
});

creditMenu.addEventListener("click", function () {
    creditMenu.classList.add("service-item-active");
    deliveryMenu.classList.remove("service-item-active");
    guaranteeMenu.classList.remove("service-item-active");
});
