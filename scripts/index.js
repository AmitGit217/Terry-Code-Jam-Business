import { closePopup, openPopup } from "./utils.js";

const roolist = Array.from(document.querySelectorAll(".gallery__roos-image"));
const imagePopup = document.querySelector(".image");
const imageCloseButton = document.querySelector(".image__close-button");

roolist.forEach((item) => {
  item.addEventListener("click", function () {
    const imagePopupImage = imagePopup.querySelector(".image__popup");

    imagePopupImage.src = item.src;
    imagePopupImage.alt = item.alt;

    console.log(imagePopupImage);

    openPopup(imagePopupImage);
  });
});

imageCloseButton.addEventListener("click", closePopup(imagePopup));
