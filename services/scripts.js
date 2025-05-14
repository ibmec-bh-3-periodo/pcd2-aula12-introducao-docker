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
