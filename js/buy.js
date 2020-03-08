var itemCartModal = document.querySelector("#item-in-cart");
var itemCartClose = document.querySelector("#item-in-cart .modal-close");
var buyButton = document.querySelectorAll(".buy");
var bookmarkButton = document.querySelectorAll(".bookmark");
var buyOrderButton = document.querySelector(".shopping-buttons .buy-order-button");
var continueButton = document.querySelector(".shopping-buttons .shopping-continue");

var bookmarksMenu = document.querySelector(".bookmarks");
var cartMenu = document.querySelector(".cart");

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
