// 1. Criar o novo elemento
const novoTexto = document.createElement("p");

// 2. Adicionar conteúdo no novo elemento
novoTexto.innerText = "Preencha os dados de contato";

// 3. Capturar o elemento pai
const pai = document.getElementsByTagName("header")[0];
console.log(pai);

// 4. Relacionar pai e filho
pai.appendChild(novoTexto);

// Modo escuro

const darkMode = document.getElementById("toggle-dark-mode");

darkMode.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");
    darkMode.innerText = "Modo claro"
})
