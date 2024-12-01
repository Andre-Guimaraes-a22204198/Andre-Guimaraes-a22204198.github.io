document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    if (!localStorage.getItem("produtos-selecionados")) {
        localStorage.setItem("produtos-selecionados", JSON.stringify([]));
    }
    function carregarProdutos(produtos) {
        produtos.forEach(produto => {
            const artigo = criarProduto(produto);
            productList.appendChild(artigo);
        });
    }

    function criarProduto(produto) {
        const article = document.createElement("article");

        const img = document.createElement("img");
        img.src = produto.image;
        img.alt = produto.title;

        const title = document.createElement("h3");
        title.textContent = produto.title;

        const price = document.createElement("p");
        price.textContent = `Custo total: ${produto.price}€`;

        const description = document.createElement("p");
        description.textContent = produto.description;

        const button = document.createElement("button");
        button.textContent = "+ Adicionar ao Cesto";
        button.addEventListener("click", () => adicionarAoCesto(produto));

        article.append(img, title, price, description, button);
        return article;
    }

    function adicionarAoCesto(produto) {
        const selecionados = JSON.parse(localStorage.getItem("produtos-selecionados"));
        selecionados.push(produto);
        localStorage.setItem("produtos-selecionados", JSON.stringify(selecionados));
        atualizaCesto();
    }

    function atualizaCesto() {
        const selecionados = JSON.parse(localStorage.getItem("produtos-selecionados"));
        cartItems.innerHTML = "";
        let total = 0;

        selecionados.forEach(produto => {
            const artigo = criaProdutoCesto(produto);
            cartItems.appendChild(artigo);
            total += produto.price;
        });

        totalPriceElement.textContent = `Custo total: ${total.toFixed(2)}€`;
    }
    function criaProdutoCesto(produto) {
        const article = document.createElement("article");

        const title = document.createElement("h3");
        title.textContent = produto.title;

        const price = document.createElement("p");
        price.textContent = `Custo total: ${produto.price}€`;

        const button = document.createElement("button");
        button.textContent = "- Remover do Cesto";
        button.addEventListener("click", () => removerDoCesto(produto));

        article.append(title, price, button);
        return article;
    }

    function removerDoCesto(produto) {
        let selecionados = JSON.parse(localStorage.getItem("produtos-selecionados"));
        selecionados = selecionados.filter(p => p.id !== produto.id);
        localStorage.setItem("produtos-selecionados", JSON.stringify(selecionados));
        atualizaCesto();
    }

  
    carregarProdutos(produtos);
    atualizaCesto();
});
