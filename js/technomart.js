var mapBig = document.querySelector("#map-big");
var mapImage = document.querySelector(".company-info .map");
var close = document.querySelector(".modal-close");

mapImage.addEventListener("click", function () {
    mapBig.classList.remove('visually-hidden');
});

close.addEventListener("click", function () {
    mapBig.classList.add('visually-hidden');
});
