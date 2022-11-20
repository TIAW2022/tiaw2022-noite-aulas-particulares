// Inicializa todas as funções do app
init();

/**
 * Função com propósito de popular o Local Storage com dados fictícios.
 */
function populaStorage() {
  let usuarios = [
    {
      id: 1,
      categoria: "professor",
      nome: "Hebert",
      sobrenome: "Matta Vidal",
      escolaridade: "Mestre",
      telefone: "(35) 98525-0448",
      materias: "Matemática;Física;",
      descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nisi officia? Accusantium a natus amet.", // TODO: Colocar uma descrição real
      email: "hebert.vidal@geradornv.com.br",
      senha: "senhadohebert123",
    },
    {
      id: 2,
      categoria: "professor",
      nome: "David",
      sobrenome: "Folly Pinho",
      escolaridade: "Doutor",
      telefone: "(33) 99812-4258",
      materias: "Português;Inglês;",
      descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nisi officia? Accusantium a natus amet.", // TODO: Colocar uma descrição real
      email: "david.pinho@geradornv.com.br",
      senha: "senhadodavid123",
    },
    {
      id: 3,
      categoria: "professor",
      nome: "Rafaella",
      sobrenome: "Coelho Pacheco",
      escolaridade: "Mestra",
      telefone: "(37) 98358-8734",
      materias: "Geografia;História;",
      descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nisi officia? Accusantium a natus amet.", // TODO: Colocar uma descrição real
      email: "raffaela.pacheco@geradornv.com.br",
      senha: "senhadarafaella123",
    },
    {
      id: 4,
      categoria: "professor",
      nome: "Cleonice",
      sobrenome: "Salomão Alentejo",
      escolaridade: "Doutora",
      telefone: "(31) 99677-1824",
      materias: "Ciências;Artes;",
      descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nisi officia? Accusantium a natus amet.", // TODO: Colocar uma descrição real
      email: "cleonice.alentejo@geradornv.com.br",
      senha: "senhadacleonice123",
    },
    {
      id: 5,
      categoria: "aluno",
      nome: "Marco",
      sobrenome: "Trindade Albuquerque",
      email: "marco.albuquerque@geradornv.com.br",
      senha: "senhadomarco123",
    },
    {
      id: 6,
      categoria: "aluno",
      nome: "Wellington",
      sobrenome: "Mata Borralho",
      email: "wellington.borralho@geradornv.com.br",
      senha: "senhadowellington123",
    },
    {
      id: 7,
      categoria: "aluno",
      nome: "Hevelyn",
      sobrenome: "Peixoto Alfradique",
      email: "hevelyn.alfradique@geradornv.com.br",
      senha: "senhadahevelyn123",
    },
    {
      id: 8,
      categoria: "aluno",
      nome: "Daniele",
      sobrenome: "Damasceno Albuquerque",
      email: "daniele.albuquerque@geradornv.com.br",
      senha: "senhadadanielle123",
    },
  ];

  if (localStorage.getItem("usuarios") === null) {
    try {
      //localStorage.setItem("usuarios", JSON.stringify(usuarios));
      salvaDados(usuarios);
      geraLogs(true, "Storage 'usuarios' populado com sucesso.");
    } catch (err) {
      geraLogs(false, "Erro ao popular o storage 'usuarios'.", err);
    }
  } else {
    try {
      usuarios = JSON.parse(localStorage.getItem("usuarios"));
      geraLogs(true, "Storage 'usuarios' recuperado com sucesso.");
    } catch (err) {
      geraLogs(false, "Erro ao popular o storage 'usuarios'.", err);
    }
  }

  //console.log(usuarios.length);
}

/**
 * Função com propósito de gerar logs para a aplicação.
 *
 * @example
 *   geraLogs(true, "Storage 'usuarios' populado com sucesso.") // [LOG] Storage 'usuarios' populado com sucesso.
 *   geraLogs(false, "Erro ao popular o storage 'usuarios', err") // [LOG] Erro ao popular o storage 'usuarios'.\nDescrição completa do erro
 *
 * @param {Boolean} Obrigatório Traz o status da situação do log. True para sucesso, false para erro.
 * @param {String} Obrigatório Mensagem de erro a ser mostrada no log.
 * @param {Error} [Opcional] Mensagem de erro provinda do catch.
 */
function geraLogs(status, mensagem, err) {
  if (status) {
    console.log("[LOG] " + mensagem);
  } else {
    console.log("[LOG] " + mensagem + "\n" + err);
  }
}

/**
 * Função com propósito de inicializar todas as funções do app.
 *
 * Obrigatório ser a última função a ser declarada e todas as funções a serem chamadas devem ser inicializadas dentro desta função.
 */
function init() {
  populaStorage();
}

function leUsers() {
  let strUsuarios = localStorage.getItem('usuarios');

  if(strUsuarios !== null){
    strUsuarios = JSON.parse(strUsuarios);
  }

  return strUsuarios;
}

function salvaDados(dados){
  localStorage.setItem('usuarios', JSON.stringify(dados));
}

function cadastra(){
  let usuarios = leUsers();

  let estaRegistrado = false;

  let id = usuarios.length + 1;
  let categoria = 'aluno';
  let nome = document.getElementById('name').value;
  let sobrenome = document.getElementById('lastname').value;
  let email = document.getElementById('email').value;
  let senha = document.getElementById('password').value;

  for(let i = 0 ; i < usuarios.length ; i++){
    if(email === usuarios[i].email){
      estaRegistrado = true;
      console.log("teste");
    }
  }

  if(estaRegistrado == false){
    let novoAluno = {
      id: id,
      categoria: categoria,
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha
  
    };
  
    usuarios.push(novoAluno);
  
    salvaDados(usuarios);
  }
  else{
    alert('e-mail já cadastrado');
  }

}

//document.getElementById('btnConcluirCadastro').addEventListener('click', cadastra);
document.getElementById('btn-submit').addEventListener('click', cadastra);


//criei só para teste
// function printaCadastrados(){
//   let tela = document.getElementById('container-cadastrados');

//   let strHtml = ''

//   let usuarios = leUsers();

//   for(let i = 0 ; i < usuarios.length ; i++){
//     strHtml += `<p> id: ${usuarios[i].id} /
//                 Nome: ${usuarios[i].nome} ${usuarios[i].sobrenome} /
//                 email: ${usuarios[i].email} </p>
//                 `
//   }

//   tela.innerHTML = strHtml;
// }

// document.getElementById('carregaCadastros').addEventListener('click', printaCadastrados);

function cadastraProfessor(){
  let usuarios = leUsers();
  
  let estaRegistrado = false;

  let id = usuarios.length + 1;
  let categoria = 'professor';
}

/*
id: 4,
      categoria: "professor",
      nome: "Cleonice",
      sobrenome: "Salomão Alentejo",
      escolaridade: "Doutora",
      telefone: "(31) 99677-1824",
      materias: "Ciências;Artes;",
      descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, nisi officia? Accusantium a natus amet.", // TODO: Colocar uma descrição real
      email: "cleonice.alentejo@geradornv.com.br",
      senha: "senhadacleonice123",
*/