const buttonElement = document.querySelector(".js-button");
const body = document.querySelector(".js-body");
const textChange = document.querySelector(".js-textChange");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("gradient");
    textChange.innerText = (body.classList.contains("gradient")) ? "Wyłącz" : "Włącz"
});
