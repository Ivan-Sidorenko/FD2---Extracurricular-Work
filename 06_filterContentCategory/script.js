"use strict";

function app() {
    const buttons = document.querySelectorAll(".button");
    const cards = document.querySelectorAll(".card");

    function filter(categary, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(categary);
            const isShowAll = categary.toLowerCase() === "all";

            if (isItemFiltered && !isShowAll) {
                item.classList.add("anime");
            } else {
                item.classList.remove("anime");
                item.classList.remove("hide");
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const currentCategory = button.dataset.filter;

            filter(currentCategory, cards);
        });
    })

    cards.forEach((card) => {
        card.ontransitionend = function() {
            if (card.classList.contains("anime")) {
                card.classList.add("hide");
            }
        }
    })
}

app();