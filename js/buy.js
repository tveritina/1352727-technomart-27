var itemCartModal = document.querySelector("#item-in-cart");
var itemCartClose = document.querySelector("#item-in-cart .modal-close");
var buyButton = document.querySelectorAll(".buy");

buyButton.forEach(button => {
    button.addEventListener("click", function (evt) {
        evt.preventDefault();
        itemCartModal.classList.remove("visually-hidden");
    });
});

itemCartClose.addEventListener("click", function () {
    itemCartModal.classList.add("visually-hidden");
});
