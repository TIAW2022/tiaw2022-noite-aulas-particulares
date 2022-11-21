// Query Selectors
const UISelectors = {
  nomeProfessor: "#nome-professor",
  escolaridadeProfessor: "#escolaridade-professor",
  modalidadeProfessor: "#modalidade-professor",
  precoProfessor: "#preco-professor",
  materiaProfessor: "#materia-professor",
  contatoProfessor: "#contato-professor",
  descProfessor: "#desc-professor",
  form: "#form-aula",
  nomeAluno: "#nome-aluno",
  dadosAluno: "#dados-aluno",
  dataAula: "#data-aula",
  horaAula: "#hora-aula",
  localAluno: "#local-aluno",
};

/**
 * Função com propósito de recuperar os dados do local storage e devolver na tela.
 */
function setDadosProfessor(idProfessor) {
  const dados = leUsers();
  const idProf = idProfessor - 1;
  const nomeCompleto = dados[idProf].nome + " " + dados[idProf].sobrenome;
  const telefone = dados[idProf].telefone.replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").replaceAll("-", "");

  document.querySelector(UISelectors.nomeProfessor).innerHTML = `
    <b>Nome:</b> ${nomeCompleto}
  `;
  document.querySelector(UISelectors.escolaridadeProfessor).innerHTML = `
    <b>Escolaridade:</b> ${dados[idProf].escolaridade}
  `;
  document.querySelector(UISelectors.modalidadeProfessor).innerHTML = `
    <b>Modalidade:</b> ${dados[idProf].modalidade}
  `;
  document.querySelector(UISelectors.precoProfessor).innerHTML = `
  <b>Preço hora/aula:</b> R$${dados[idProf].preco}
  `;
  document.querySelector(UISelectors.materiaProfessor).innerHTML = `
    <b>Matérias:</b> ${dados[idProf].materias.replaceAll(";", " / ")}
  `;
  document.querySelector(UISelectors.contatoProfessor).innerHTML = `
    <b>Contato:</b> <a href="https://wa.me/+55${telefone}" class="text-success text-decoration-none"><i class="fab fa-whatsapp"></i> WhatsApp</a>
  `;
  document.querySelector(UISelectors.descProfessor).innerHTML = `
    <p>${dados[idProf].descricao}</p>
  `;
}

setDadosProfessor(1);

/**
 * Função com propósito de capturar os dados da aula solicitada pelo aluno.
 */
function setAula(e) {
  e.preventDefault();

  const nomeInput = document.querySelector(UISelectors.nomeAluno).value;
  const contatoInput = document.querySelector(UISelectors.dadosAluno).value;
  const dataInput = document.querySelector(UISelectors.dataAula).value;
  const horaInput = document.querySelector(UISelectors.horaAula).value;
  const localInput = document.querySelector(UISelectors.localAluno).value;

  if (nomeInput === "" || contatoInput === "" || dataInput === "" || horaInput === "" || localInput === "") {
    alert("Confira se todos os campos foram preenchidos!");
  } else {
    const aula = {
      id: Math.floor(Math.random() * 1000) + 1,
      nome: nomeInput,
      contato: contatoInput,
      data: dataInput,
      hora: horaInput,
      local: localInput,
      idProfessor: 1,
      status: "aguardando",
    };

    try {
      cadastraAula(aula);
      alert("Aula cadastrada com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar a aula. Tente novamente mais tarde.");
      geraLogs(false, "Erro ao cadastrar a aula.", err);
    }

    document.querySelector(UISelectors.nomeAluno).value = "";
    document.querySelector(UISelectors.dadosAluno).value = "";
    document.querySelector(UISelectors.dataAula).value = "";
    document.querySelector(UISelectors.horaAula).value = "";
    document.querySelector(UISelectors.localAluno).value = "";
  }
}

document.querySelector(UISelectors.form).addEventListener("submit", setAula);

// {
//   id: 1,
//   categoria: "professor",
//   nome: "Hebert",
//   sobrenome: "Matta Vidal",
//   escolaridade: "Mestre",
//   telefone: "(35) 98525-0448",
//   materias: "Matemática;Física;",
//   descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nisi officia? Accusantium a natus amet.",
//   email: "hebert.vidal@geradornv.com.br",
//   senha: "senhadohebert123",
// },
// {
//   id: 7,
//   categoria: "aluno",
//   nome: "Hevelyn",
//   sobrenome: "Peixoto Alfradique",
//   email: "hevelyn.alfradique@geradornv.com.br",
//   senha: "senhadahevelyn123",
// },
