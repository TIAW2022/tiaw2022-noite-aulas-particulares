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

function setDadosAluno() {
  const nomeCompleto = uLogado.nome + " " + uLogado.sobrenome;

  document.querySelector(".descricao-aluno").innerHTML = `
    <h4>${nomeCompleto}</h4>
    <p class="text-secondary mb-1">${uLogado.categoria}</p>
    <p class="text-muted font-size-sm">${uLogado.email}</p>
  `;
}

setDadosAluno();

const aulas = leAulas();
const user = leUsers();

function atualizaAulas() {
  for (let i = 0; i < aulas.length; i++) {
    if (aulas[i].idAluno == uLogado.id) {
      if (aulas[i].status == "aguardando") {
        const divAula = document.createElement("div");
        divAula.className = "d-flex mt-2 p-2 info-professor";
        divAula.id = `aula-${aulas.id}`;

        document.querySelector(`.aula-aguardando`).innerHTML += `
        <div class="justify-content-start info-aulas">
          <i class="pr-1 fas fa-user text-muted"></i> 
            Professor(a) ${user[aulas[i].idProfessor - 1].nome}
            <p>Código da aula: ${aulas[i].id} </p>
            <p><b>Contato:</b> ${user[aulas[i].idProfessor - 1].telefone}</p>
            <p><b>Data:</b> ${aulas[i].data}, ${aulas[i].hora}</p>
            <p><b>Local:</b> ${aulas[i].local}</p>
          </div>
        <div class="ml-auto opcoes-professor">
        </div>
        `;
      } else if (aulas[i].status == "em andamento") {
        const divAula = document.createElement("div");
        divAula.className = "d-flex mt-2 p-2 info-professor";
        divAula.id = `aula-${aulas.id}`;

        document.querySelector(`.aula-andamento`).innerHTML += `
        <div class="justify-content-start info-aulas">
          <i class="pr-1 fas fa-user text-muted"></i> 
            Professor ${user[aulas[i].idProfessor - 1].nome}
            <p>Código da aula: ${aulas[i].id} </p>
          </div>
        <div class="ml-auto opcoes-professor">
        </div>
        `;
      } else if (aulas[i].status == "concluida") {
        const divAula = document.createElement("div");
        divAula.className = "d-flex mt-2 p-2 info-professor";
        divAula.id = `aula-${aulas.id}`;

        document.querySelector(`.aula-finalizada`).innerHTML += `
        <div class="justify-content-start info-aulas">
          <i class="pr-1 fas fa-user text-muted"></i> 
            Professor ${user[aulas[i].idProfessor - 1].nome}
            <p>Código da aula: ${aulas[i].id} </p>
          </div>
        <div class="ml-auto opcoes-professor">
        </div>
        `;
      }
    }
  }
}

atualizaAulas();
