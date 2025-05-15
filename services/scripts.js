// Modo escuro

const darkMode = document.getElementById("toggle-dark-mode");

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("modo-escuro");
  if (document.body.classList.contains("modo-escuro")) {
    darkMode.innerText = "Light Mode";
  } else {
    darkMode.innerText = "Dark Mode";
  }
});

// JS Assíncrono - API

document
  .querySelector(".formulario")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    try {
      const resposta = await fetch("http://localhost:3000/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (!resposta.ok) throw new Error("Erro ao enviar mensagem.");

      alert("Mensagem enviada com sucesso!");
      document.querySelector(".formulario").reset();
    } catch (erro) {
      alert("Falha ao enviar. Tente novamente.");
      console.error(erro);
    }
  });

// Funcionalidade para verificar mensagens
document
  .getElementById("btn-verificar-mensagens")
  .addEventListener("click", async function () {
    try {
      // Altera o texto do botão para indicar carregamento
      const btnVerificar = this;
      btnVerificar.disabled = true;

      // Faz requisição GET para buscar mensagens
      const resposta = await fetch("http://localhost:3000/mensagens");

      if (!resposta.ok) throw new Error("Erro ao buscar mensagens.");

      const mensagens = await resposta.json();

      // Exibe as mensagens na página
      const listaMensagens = document.getElementById("lista-mensagens");
      const containerMensagens = document.getElementById("mensagens-container");

      // Remove a classe hidden para mostrar o container
      containerMensagens.classList.remove("hidden");

      // Limpa a lista atual
      listaMensagens.innerHTML = "";

      if (mensagens.length === 0) {
        listaMensagens.innerHTML =
          "<p class='sem-mensagens'>Nenhuma mensagem encontrada.</p>";
      } else {
        // Cria elementos para cada mensagem
        mensagens.forEach((mensagem) => {
          const mensagemEl = document.createElement("div");
          mensagemEl.className = "mensagem-item";

          // Formata a data
          const data = new Date(mensagem.data);
          const dataFormatada = data.toLocaleString("pt-BR");

          mensagemEl.innerHTML = `
          <h3>${mensagem.nome}</h3>
          <p><strong>Email:</strong> ${mensagem.email}</p>
          <p><strong>Mensagem:</strong> ${mensagem.mensagem}</p>
          <p class="data">${dataFormatada}</p>
        `;

          listaMensagens.appendChild(mensagemEl);
        });
      }

      // Rola até a seção de mensagens
      containerMensagens.scrollIntoView({ behavior: "smooth" });
    } catch (erro) {
      alert("Falha ao buscar mensagens. Tente novamente.");
      console.error(erro);
    } finally {
      // Restaura o texto original do botão
      btnVerificar.textContent = textoOriginal;
      btnVerificar.disabled = false;
    }
  });
