var firstImg = document.querySelector(".slider-list-one");
var secondtImg = document.querySelector(".slider-list-two");
var iconArrow = document.querySelectorAll(".slider-icon");

var deliveryItem = document.querySelector(".delivery-service");
var guaranteeItem = document.querySelector(".guarantee-service");
var creditItem = document.querySelector(".credit-service");

var deliveryMenu = document.querySelector(".service-menu button:nth-child(1)");
var guaranteeMenu = document.querySelector(".service-menu button:nth-child(2)");
var creditMenu = document.querySelector(".service-menu button:nth-child(3)");


for (var i = 0; i < iconArrow.length; i++) {
    iconArrow[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        secondtImg.classList.toggle("visually-hidden");
        firstImg.classList.toggle("visually-hidden");
    });
}

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
