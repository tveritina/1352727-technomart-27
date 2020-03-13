// Модальные окна
var mapBig = document.querySelector("#map-big");
var feedbackModal = document.querySelector("#feedback");
var registrationModal = document.querySelector("#registration");

var mapClose = document.querySelector(".map-big .modal-close");
var feedbackClose = document.querySelector(".feedback .modal-close");
var registrationClose = document.querySelector("#registration .modal-close");

var mapLink = document.querySelector(".company-info .map-link");
var feedbackButton = document.querySelector(".company-info-button-feedback");
var registrationButton = document.querySelector(".register-back");

//переменные для формы обратной связи
if (feedbackModal) {
    var userName = feedbackModal.querySelector("[name=name]");
    var userEmail = feedbackModal.querySelector("[name=e-mail]");
    var userText = feedbackModal.querySelector("[name=text]");
    var form = feedbackModal.querySelector(".feedback-form");
    var user = registrationModal.querySelector("[name=reg-name]");
};
//переменные для формы обратной связи

// Блок покупки и закладок
var itemCartModal = document.querySelector("#item-in-cart");
var itemCartClose = document.querySelector("#item-in-cart .modal-close");
var buyButton = document.querySelectorAll(".buy");
var bookmarkButton = document.querySelectorAll(".bookmark");
var buyOrderButton = document.querySelector(".shopping-buttons .buy-order-button");
var continueButton = document.querySelector(".shopping-buttons .shopping-continue");

var bookmarksMenu = document.querySelector(".bookmarks");
var cartMenu = document.querySelector(".cart");

// Слайдеры
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

// Методы для работы с модальными окнами
if (mapLink) {
    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapBig.classList.remove("visually-hidden");
    });
};

if (feedbackButton) {
    feedbackButton.addEventListener("click", function () {
        feedbackModal.classList.add("modal-show");
        userName.focus();
    });
};

//Обработка формы обратной связи
if (feedbackModal) {
    form.addEventListener("submit", function (evt) {
        if (!userName.value || !userEmail.value || !userText.value) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-error");
            feedbackModal.offsetWidth = feedbackModal.offsetWidth;
            feedbackModal.classList.add("modal-error");
        }
    });
};
//Обработка формы обратной связи

if (registrationButton) {
    registrationButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        registrationModal.classList.remove("visually-hidden");
    });
};

if (mapClose) {
    mapClose.addEventListener("click", function () {
        mapBig.classList.add("visually-hidden");
    });
};

if (feedbackClose) {
    feedbackClose.addEventListener("click", function () {
        feedbackModal.classList.remove("modal-show");
        feedbackModal.classList.add("hidden-modal");
    });
};

if (registrationClose) {
    registrationClose.addEventListener("click", function () {
        registrationModal.classList.add("visually-hidden");
    });
};

// Методы для работы с окнами покупки
for (var i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        itemCartModal.classList.remove("visually-hidden");
    });
};

for (var i = 0; i < bookmarkButton.length; i++) {
    bookmarkButton[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        bookmarksMenu.classList.add("red-background");
    });
};

buyOrderButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartMenu.classList.add("red-background");
});

itemCartClose.addEventListener("click", function () {
    itemCartModal.classList.add("visually-hidden");
});

continueButton.addEventListener("click", function () {
    itemCartModal.classList.add("visually-hidden");
});

// Методы для работы со слайдерами
if (iconArrowLeft) {
    iconArrowLeft.addEventListener("click", function (evt) {
        evt.preventDefault();
        firstImg.classList.remove("visually-hidden");
        secondtImg.classList.add("visually-hidden");
        sliderToggles[0].checked = true;
    });
};

if (iconArrowRight) {
    iconArrowRight.addEventListener("click", function (evt) {
        evt.preventDefault();
        firstImg.classList.add("visually-hidden");
        secondtImg.classList.remove("visually-hidden");
        sliderToggles[1].checked = true;
    });
};

if (toggleSliderOne) {
    toggleSliderOne.addEventListener("click", function () {
        firstImg.classList.remove("visually-hidden");
        secondtImg.classList.add("visually-hidden");
    });
};

if (toggleSliderTwo) {
    toggleSliderTwo.addEventListener("click", function () {
        firstImg.classList.add("visually-hidden");
        secondtImg.classList.remove("visually-hidden");
    });
};

if (deliveryMenu) {
    deliveryMenu.addEventListener("click", function () {
        deliveryMenu.classList.add("service-item-active");
        guaranteeMenu.classList.remove("service-item-active");
        creditMenu.classList.remove("service-item-active");

        deliveryItem.classList.remove("visually-hidden");
        guaranteeItem.classList.add("visually-hidden");
        creditItem.classList.add("visually-hidden");
    });
};

if (guaranteeMenu) {
    guaranteeMenu.addEventListener("click", function () {
        guaranteeMenu.classList.add("service-item-active");
        deliveryMenu.classList.remove("service-item-active");
        creditMenu.classList.remove("service-item-active");

        deliveryItem.classList.add("visually-hidden");
        guaranteeItem.classList.remove("visually-hidden");
        creditItem.classList.add("visually-hidden");
    });
};

if (creditMenu) {
    creditMenu.addEventListener("click", function () {
        creditMenu.classList.add("service-item-active");
        deliveryMenu.classList.remove("service-item-active");
        guaranteeMenu.classList.remove("service-item-active");

        deliveryItem.classList.add("visually-hidden");
        guaranteeItem.classList.add("visually-hidden");
        creditItem.classList.remove("visually-hidden");
    });
};
