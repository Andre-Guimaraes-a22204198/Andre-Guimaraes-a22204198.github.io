// 1. Alterar o texto ao passar o rato
const hoverText = document.getElementById("hover-text");
hoverText.addEventListener("mouseover", () => {
    hoverText.textContent = "1. Obrigado por passares!";
});
hoverText.addEventListener("mouseout", () => {
    hoverText.textContent = "1. Passa por aqui!";
});

// 2. Alterar a cor do texto "Pinta-me!"
const colorButtons = {
    red: document.getElementById("red-button"),
    green: document.getElementById("green-button"),
    blue: document.getElementById("blue-button"),
};
const colorText = document.getElementById("color-buttons");

colorButtons.red.addEventListener("click", () => {
    colorText.style.color = "red";
});
colorButtons.green.addEventListener("click", () => {
    colorText.style.color = "green";
});
colorButtons.blue.addEventListener("click", () => {
    colorText.style.color = "blue";
});

// 3. Alterar a cor da caixa de texto ao digitar
const textInput = document.getElementById("text-input");
textInput.addEventListener("input", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    textInput.style.backgroundColor = randomColor;
});

// 4. Alterar a cor da página ao submeter uma cor
const pageColorInput = document.getElementById("page-color-input");
const submitColorButton = document.getElementById("submit-color");

submitColorButton.addEventListener("click", () => {
    const newColor = pageColorInput.value.trim();
    document.body.style.backgroundColor = newColor;
    pageColorInput.value = ""; // Limpa o campo de texto
});

// 5. Contar quantas vezes o botão foi clicado
let counter = 0;
const counterButton = document.getElementById("counter-button");
const counterDisplay = document.getElementById("counter-display");

counterButton.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
});
