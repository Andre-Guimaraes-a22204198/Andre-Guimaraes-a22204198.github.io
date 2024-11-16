// 1. Clique no título (click) - Altera o texto do título
const headerTitle = document.getElementById('header-title');
headerTitle.addEventListener('click', () => {
    headerTitle.textContent = "Bem-vindo à Minha Cidade!";
    headerTitle.style.color = "blue";
});

// 2. Mouseover e Mouseout em imagens - Destaca as imagens ao passar o rato
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.border = "2px solid red";
    });
    img.addEventListener('mouseout', () => {
        img.style.border = "none";
    });
});

// 3. Duplo clique no poema (dblclick) - Adiciona uma linha extra ao poema
const poemText = document.getElementById('poem-text');
poemText.addEventListener('dblclick', () => {
    const extraLine = document.createElement('p');
    extraLine.innerHTML = "<p><em> Meu filho, vai abrir o cú e apanhar moscas, o quintal é meu e planto o que eu quiser</em></p>";
    poemText.appendChild(extraLine);
});

// 4. Movimento do rato sobre a imagem principal (mousemove) - Mostra as coordenadas do rato
const cityImg = document.getElementById('city-img');
cityImg.addEventListener('mousemove', (event) => {
    cityImg.alt = `Posição do rato: X=${event.offsetX}, Y=${event.offsetY}`;
});

// 5. Evento de teclado no subtítulo (keydown e keyup) - Altera temporariamente o subtítulo
const subTitle = document.getElementById('sub-title');
document.addEventListener('keydown', (event) => {
    subTitle.textContent = `Tecla pressionada: ${event.key}`;
});
document.addEventListener('keyup', () => {
    subTitle.textContent = "Multimédia";
});
