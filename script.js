"use strict";
const removeHidden = () => {
  document.querySelector(".modal-window").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
};
const addHidden = () => {
  document.querySelector(".modal-window").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};
const button = document.querySelectorAll(".list-item");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", removeHidden);
}
document
  .querySelector(".material-symbols-outlined")
  .addEventListener("click", addHidden);
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !document.querySelector(".modal-window").classList.contains("hidden")
  ) {
    addHidden();
  }
});
document.querySelector(".overlay").addEventListener("click", addHidden);
