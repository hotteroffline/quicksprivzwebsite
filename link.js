const form = document.getElementById("leadForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const operadora = document.getElementById("operadora").value;

  console.log("Novo contacto:");
  console.log("Nome:", nome);
  console.log("Telefone:", telefone);
  console.log("Operadora:", operadora);

  mensagem.textContent = "✅ Recebido! Vamos falar contigo em breve.";

  form.reset();
});
