if (!checaLogin()) {
  window.location.href = "./index.html";
}

/**
 * Função para recuperar aula
 */
function recuperaAulas() {
  const aulas = leAulas();
  const urlParams = new URLSearchParams(window.location.search);
  const idProfessor = parseInt(urlParams.get("id"));

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
  const idProf = urlParams.get("id") - 1;
  const nomeCompleto = dados[idProf].nome + " " + dados[idProf].sobrenome;

  document.querySelector("#professor-nome").innerText = nomeCompleto;
  document.querySelector("#professor-escolaridade").innerHTML = dados[idProf].escolaridade;
  //   document.querySelector(UISelectors.materiaProfessor).innerHTML = `
  //       <b>Matérias:</b> ${dados[idProf].materias.replaceAll(";", " / ")}
  //     `;
  document.querySelector("#professor-preco").innerHTML = "R$" + dados[idProf].preco;
  document.querySelector("#professor-tel").innerHTML = dados[idProf].telefone;
  document.querySelector("#professor-desc").innerHTML = dados[idProf].descricao;
}

recuperaAulas();
setDadosProfessor();
