const uLogado = leUserLogado();
const urlParams = new URLSearchParams(window.location.search);
const idProfessor = parseInt(urlParams.get("id"));
const indexProf = urlParams.get("id") - 1;

if (!checaLogin()) {
  alert("Você deve estar logado para acessar esta página");
  window.location.href = "./login.html";
} else if (uLogado.categoria !== "professor") {
  alert("Você deve ser um professor registrado para acessar esta página");
  window.location.href = "./index.html";
} else if (idProfessor !== uLogado.id) {
  alert("Você não pode acessar a página de outro professor");
  window.location.href = "./index.html";
}

/**
 * Função para recuperar aula
 */
function recuperaAulas() {
  const aulas = leAulas();

  aulas.forEach((aula) => {
    const divPai = document.createElement("div");
    divPai.className = "d-flex mt-2 p-2 info-professor";
    divPai.innerHTML = `
      <div id="aula-${aula.id}" class="justify-content-start"><i class="pr-1 fas fa-user text-muted"></i> ${aula.nome}</div>
      <div class="ml-auto opcoes-professor">
          <a href="#" class="text-success"><i class="fas fa-check"></i></a>
          <a href="#" class="text-danger"><i class="fas fa-times"></i></a>
      </div>
    `;

    if (aula.idProfessor === idProfessor && aula.status === "aguardando") {
      document.querySelector("#solicitacao-aulas").appendChild(divPai);
    }
  });
}

function setDadosProfessor() {
  const dados = leUsers();
  const urlParams = new URLSearchParams(window.location.search);
  const nomeCompleto = dados[indexProf].nome + " " + dados[indexProf].sobrenome;

  document.querySelector("#professor-nome").innerText = nomeCompleto;
  document.querySelector("#professor-escolaridade").innerHTML = dados[indexProf].escolaridade;
  //   document.querySelector(UISelectors.materiaProfessor).innerHTML = `
  //       <b>Matérias:</b> ${dados[indexProf].materias.replaceAll(";", " / ")}
  //     `;
  document.querySelector("#professor-preco").innerHTML = "R$" + dados[indexProf].preco;
  document.querySelector("#professor-tel").innerHTML = dados[indexProf].telefone;
  document.querySelector("#professor-desc").innerHTML = dados[indexProf].descricao;
}

recuperaAulas();
setDadosProfessor();
