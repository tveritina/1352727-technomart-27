var mapBig = document.querySelector("#map-big");
var feedbackModal = document.querySelector("#feedback");
var registrationModal = document.querySelector("#registration");

var mapClose = document.querySelector(".map-big .modal-close");
var feedbackClose = document.querySelector(".feedback .modal-close");
var registrationClose = document.querySelector("#registration .modal-close");

var mapImage = document.querySelector(".company-info .map");
var feedbackButton = document.querySelector(".company-info-button-feedback");
var registrationButton = document.querySelector(".register-back");

mapImage.addEventListener("click", function () {
    mapBig.classList.remove("visually-hidden");
});

feedbackButton.addEventListener("click", function () {
    feedbackModal.classList.add("modal-show");
});

registrationButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    registrationModal.classList.remove("visually-hidden");
});


mapClose.addEventListener("click", function () {    
    mapBig.classList.add("visually-hidden");
});

feedbackClose.addEventListener("click", function () { 
    feedbackModal.classList.remove("modal-show");    
    feedbackModal.classList.add("hidden-modal"); 
});

registrationClose.addEventListener("click", function () {    
    registrationModal.classList.add("visually-hidden");
});


