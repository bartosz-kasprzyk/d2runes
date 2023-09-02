{
    const toggleGradient = (event) => {
        const body = document.querySelector(".js-body");
        const textChange = document.querySelector(".js-textChange");

        body.classList.toggle("gradient");
        textChange.innerText = (body.classList.contains("gradient")) ? "Wyłącz" : "Włącz";
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");

        buttonElement.addEventListener("click", toggleGradient);
    };

    init();
}