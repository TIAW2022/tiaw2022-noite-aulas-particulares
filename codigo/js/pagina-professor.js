// Query Selectors
const UISelectors = {
  nomeProfessor: "#nome-professor",
  precoProfessor: "#preco-professor",
  materiaProfessor: "#materia-professor",
  descProfessor: "#desc-professor",
  nomeAluno: "#nome-aluno",
  dadosAluno: "#dados-aluno",
  dataAula: "#data-aula",
  horaAula: "#hora-aula",
  localAluno: "#local-aluno",
};

/**
 * Função com propósito de recuperar os dados do local storage e devolver na tela.
 */
const setaDadosProfessor = (idProfessor) => {
  const dados = leUsers();
  const nomeCompleto = dados[idProfessor].nome + " " + dados[idProfessor].sobrenome;

  document.querySelector(UISelectors.nomeProfessor).innerHTML = `
    <b>Nome:</b> ${nomeCompleto}
  `;
  document.querySelector(UISelectors.precoProfessor).innerHTML = `
  <b>Preço hora/aula:</b> R$${dados[idProfessor].preco}
  `;
  document.querySelector(UISelectors.materiaProfessor).innerHTML = `
    <b>Matérias:</b> ${dados[idProfessor].materias.replaceAll(";", " / ")}
  `;
  document.querySelector(UISelectors.descProfessor).innerHTML = `
    <p>${dados[idProfessor].descricao}</p>
  `;
};

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
