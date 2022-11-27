const uLogado = leUserLogado();
const urlParams = new URLSearchParams(window.location.search);
const idAluno = parseInt(urlParams.get("id"));
const indexAluno = urlParams.get("id") - 1;

if (!checaLogin()) {
  alert("Você deve estar logado para acessar esta página");
  window.location.href = "./login.html";
} else if (uLogado.categoria !== "aluno") {
  alert("Você deve ser um aluno registrado para acessar esta página");
  window.location.href = "./index.html";
} else if (idAluno !== uLogado.id) {
  alert("Você não pode acessar a página de outro aluno");
  window.location.href = "./index.html";
}
