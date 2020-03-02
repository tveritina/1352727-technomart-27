var itemCartModal = document.querySelector("#item-in-cart");
var itemCartClose = document.querySelector("#item-in-cart .modal-close");
var buyButton = document.querySelectorAll(".buy");

for (var i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        itemCartModal.classList.remove("visually-hidden");
    });
}

itemCartClose.addEventListener("click", function () {
    itemCartModal.classList.add("visually-hidden");
});
