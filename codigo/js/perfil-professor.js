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
 * Função com propósito de mostrar na tela todos os dados do professor
 */
function setDadosProfessor() {
  const dados = leUsers();

  document.querySelector("#professor-nome").value = dados[indexProf].nome;
  document.querySelector("#professor-sobrenome").value = dados[indexProf].sobrenome;
  document.querySelector("#professor-escolaridade").value = dados[indexProf].escolaridade;
  document.querySelector("#professor-materia").value = dados[indexProf].materias;
  document.querySelector("#professor-preco").value = dados[indexProf].preco;
  document.querySelector("#professor-tel").value = dados[indexProf].telefone;
  document.querySelector("#professor-desc").value = dados[indexProf].descricao;
}

function salvarDados() {
  const users = leUsers();

  document.querySelector("#salvar-perfil").addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === uLogado.id) {
        alert("Seus dados foram alterados com sucesso!");

        users[i].nome = document.querySelector("#professor-nome").value;
        users[i].sobrenome = document.querySelector("#professor-sobrenome").value;
        users[i].escolaridade = document.querySelector("#professor-escolaridade").value;
        users[i].materias = document.querySelector("#professor-materia").value;
        users[i].preco = document.querySelector("#professor-preco").value;
        users[i].telefone = document.querySelector("#professor-tel").value;
        users[i].descricao = document.querySelector("#professor-desc").value;
        localStorage.setItem("usuarios", JSON.stringify(users));

        window.location.reload();
      }
    }
  });
}

/**
 * Função para alterar os estados das aulas
 */
function alteraAula() {
  const aulas = leAulas();

  document.querySelector("#solicitacao-aulas").addEventListener("click", (e) => {
    let aulaAtual = e.target.parentElement.parentElement.parentElement;

    if (e.target.id === "confirma-aula") {
      e.preventDefault();
      let idAula = parseInt(aulaAtual.id.replace("aula-", ""));

      for (let i = 0; i < aulas.length; i++) {
        if (aulas[i].id === idAula) {
          alert("A aula foi aceita e está em andamento!");
          aulas[i]["status"] = "em andamento";
          localStorage.setItem("aulas", JSON.stringify(aulas));
          aulaAtual.remove();
          window.location.reload();
        }
      }
    } else if (e.target.id === "deleta-aula") {
      e.preventDefault();
      let idAula = parseInt(aulaAtual.id.replace("aula-", ""));

      for (let i = 0; i < aulas.length; i++) {
        if (aulas[i].id === idAula) {
          alert("A aula foi rejeitada.");
          aulas[i]["status"] = "rejeitada";
          localStorage.setItem("aulas", JSON.stringify(aulas));
          aulaAtual.remove();
          window.location.reload();
        }
      }
    }
  });

  document.querySelector("#andamento-aulas").addEventListener("click", (e) => {
    let aulaAtual = e.target.parentElement.parentElement.parentElement;

    if (e.target.id === "confirma-aula") {
      e.preventDefault();
      let idAula = parseInt(aulaAtual.id.replace("aula-", ""));

      for (let i = 0; i < aulas.length; i++) {
        if (aulas[i].id === idAula) {
          alert("Parabéns por concluir mais uma aula!");
          aulas[i]["status"] = "concluida";
          localStorage.setItem("aulas", JSON.stringify(aulas));
          aulaAtual.remove();
          window.location.reload();
        }
      }
    }
  });
}

/**
 * Função para recuperar solicitações de aulas
 */
function recuperaAulas() {
  const aulas = leAulas();

  aulas.forEach((aula) => {
    const divPai = document.createElement("div");
    divPai.className = "d-flex mt-2 p-2 info-professor";
    divPai.id = `aula-${aula.id}`;

    if (aula.idProfessor === idProfessor && aula.status === "aguardando") {
      divPai.innerHTML = `
        <div class="justify-content-start"><i class="pr-1 fas fa-user text-muted"></i> ${aula.nome}</div>
        <div class="ml-auto opcoes-professor">
            <a href="#" class="text-success"><i id="confirma-aula" class="fas fa-check"></i></a>
            <a href="#" class="text-danger"><i id="deleta-aula" class="fas fa-times"></i></a>
        </div>
      `;
      document.querySelector("#solicitacao-aulas").appendChild(divPai);
    } else if (aula.idProfessor === idProfessor && aula.status === "em andamento") {
      divPai.innerHTML = `
        <div class="justify-content-start"><i class="pr-1 fas fa-user text-muted"></i> ${aula.nome}</div>
        <div class="ml-auto opcoes-professor">
            <a href="#" class="text-success"><i id="confirma-aula" class="fas fa-check"></i></a>
        </div>
      `;
      document.querySelector("#andamento-aulas").appendChild(divPai);
    } else if (aula.idProfessor === idProfessor && aula.status === "concluida") {
      let divAtual = document.createElement("div");
      divAtual.innerHTML = `
        <div id="aula-${aula.id}" class="p-2 bg-secondary text-light info-professor"><i class="pr-1 fas fa-user-graduate text-light"></i> ${aula.nome}</div>
      `;
      document.querySelector("#finalizado-aulas").appendChild(divAtual);
    }
  });
}

setDadosProfessor();
alteraAula();
recuperaAulas();
salvarDados();
