// Alterar o texto ao passar o rato
const hoverText = document.getElementById("hover-text");
hoverText.addEventListener("mouseover", () => {
    hoverText.textContent = "1. Obrigado por passares!";
});
hoverText.addEventListener("mouseout", () => {
    hoverText.textContent = "1. Passa por aqui!";
});

// Alterar a cor do texto "Pinta-me!"
document.querySelectorAll('#color-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.dataset.color;
        document.getElementById('color-buttons').style.color = color;
        totalClicks();
    });
});

// Alterar a cor da caixa de texto ao digitar
const textInput = document.getElementById("text-input");
textInput.addEventListener("input", () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    textInput.style.backgroundColor = randomColor;
    totalClicks();
});

// Submeter formulário e exibir mensagem
function submitUserInfo(event) {
    // Prevenir a atualização da página
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    const age = document.getElementById('user-age').value;
    document.getElementById('user-message').textContent = `Olá, o ${name} tem ${age}!`;
    totalClicks();
}

// Contador de cliques que persiste usando Local Storage
let counter = parseInt(localStorage.getItem('counter')) || 0;
const counterDisplay = document.getElementById('counter-display');
counterDisplay.textContent = counter;

const counterButton = document.getElementById('counter-button');
counterButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    localStorage.setItem('counter', counter);
    totalClicks();
});

// Contador de cliques totais na página
let totalClicksCounter = parseInt(localStorage.getItem('totalClicksCounter')) || 0;
const totalClicksDisplay = document.createElement('p');
totalClicksDisplay.id = 'total-clicks-display';
totalClicksDisplay.textContent = `Total de cliques: ${totalClicksCounter}`;
document.body.appendChild(totalClicksDisplay);

function totalClicks() {
    totalClicksCounter++;
    totalClicksDisplay.textContent = `Total de cliques: ${totalClicksCounter}`;
    localStorage.setItem('totalClicksCounter', totalClicksCounter);
}

// Contador automático que conta os cliques totais na página
let autoCounter = parseInt(localStorage.getItem('autoCounter')) || 0;
const autoCounterDisplay = document.getElementById('auto-counter');
autoCounterDisplay.textContent = autoCounter;

document.addEventListener('click', () => {
    autoCounter++;
    autoCounterDisplay.textContent = autoCounter;
    localStorage.setItem('autoCounter', autoCounter);
});
