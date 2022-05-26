import { closePopup, openPopup } from "./utils.js";

const roolist = Array.from(document.querySelectorAll(".gallery__roos-image"));
const imageCloseButton = document.querySelector(".image__close-button");
const popup = document.querySelector(".image");

roolist.forEach((item) => {
  item.addEventListener("click", function () {
    const imagePopupImage = popup.querySelector(".image__popup");
    imagePopupImage.src = item.src;
    imagePopupImage.alt = item.alt;
    openPopup(popup);
  });
});
imageCloseButton.addEventListener("click", () => {
  closePopup(popup);
});
