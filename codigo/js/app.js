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

/*
 * Função que lê e retorna um array de objetos com todos os usuário registrados no local storage
 */

function leUsers() {
  let strUsuarios = localStorage.getItem('usuarios');

  if(strUsuarios !== null){
    strUsuarios = JSON.parse(strUsuarios);
  }

  return strUsuarios;
}

/* 
 * Função que salva os dados dos usuarios no local storage
 */


function salvaDados(dados){
  localStorage.setItem('usuarios', JSON.stringify(dados));
}

/*
 * Função que cadastra novos alunos e salva os dados no local storage
 */

function cadastraAluno(){
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

//event listener que da trigger na função cadatraAluno quando o botao de cadastrar é clicado
let enviaAluno = document.getElementById('btn-submit-aluno');
if(enviaAluno){
  enviaAluno.addEventListener('click', cadastraAluno);
}


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


/*
 * Função que cadastra novos professores e salva os dados no local storage
 */

function cadastraProfessor(){
  let usuarios = leUsers();
  
  let estaRegistrado = false;

  let id = usuarios.length + 1;
  let categoria = 'professor';
  let nome = document.getElementById('name').value;
  let sobrenome = document.getElementById('lastname').value;
  let email = document.getElementById('email').value;
  let senha = document.getElementById('password').value;
  let escolaridade = document.getElementById('escolaridade').value;
  let telefone = document.getElementById('telefone').value;

  let vetMateria = [];
  let materia = document.getElementsByName('materia');
  for(let i = 0 ; i < materia.length ; i++){
    if(materia[i].checked){
      vetMateria.push(materia[i].value + ';');
    }
  }

  let materias = vetMateria.toString().replaceAll(",", "")
  console.log(materias)

  let descricao = '';

  for(let i = 0 ; i < usuarios.length ; i++){
    if(email === usuarios[i].email){
      estaRegistrado = true;
    }
  }


  if(estaRegistrado == false){
    let novoProfessor = {
      id: id,
      categoria: categoria,
      nome: nome,
      sobrenome: sobrenome,
      escolaridade: escolaridade,
      telefone: telefone,
      materia: materias,
      descricao: descricao,
      email: email,
      senha: senha,
    };
    usuarios.push(novoProfessor);
  
    salvaDados(usuarios);

    //adicionaCardProf();
  }
  else{
    alert('e-mail já cadastrado');
  }

}

//event listener que da trigger na função cadatraProfessor quando o botao de cadastrar é clicado
let enviaProfessor = document.getElementById('btn-submit-professor');
if(enviaProfessor){
  enviaProfessor.addEventListener('click', cadastraProfessor)
}

/*
 * Função que faz a validação, efetua o login do usuário, redireciona o usuário para o seu perfil
 * e salva os dados do usuário logado no session storage
 */

function login(){

  let estaLogado = false;
  let usuario = leUsers()
  
  let emailLogin = document.getElementById('email-login').value
  let senhaLogin = document.getElementById('password-login').value
  let idUsuario = ''

  // console.log(emailLogin)
  // console.log(senhaLogin)
  // console.log(usuario[0].email)
  // console.log(usuario[0].senha)

  for(let i = 0 ; i < usuario.length ; i++){
    if(usuario[i].email === emailLogin && usuario[i].senha === senhaLogin){
      estaLogado = true
      idUsuario = usuario[i].id;
      usuarioLogado = usuario[i]
    }
  }

  console.log(estaLogado)
  console.log(idUsuario)
  console.log(usuarioLogado)

  //console.log(usuario[idUsuario - 1].categoria)

  if(estaLogado === false){
    console.log('usuario ou senha incorretos')
    alert('usuario ou senha incorretos')
  }else if(estaLogado === true){
    //alert('Logado com sucesso')
    if(usuario[idUsuario - 1].categoria === 'aluno'){
      console.log('é aluno')
      window.open("meu-perfil-aluno.html");
      sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
    }
    else if(usuario[idUsuario - 1].categoria === 'professor'){
      console.log('é professor')
      window.open('perfil-professor.html')
      //window.location.replace("perfil-professor.html");
      sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
    }
  }

}

let logar = document.getElementById('btn-submit-login');
if(logar){
  logar.addEventListener('click', login)
}



function adicionaCardProf(){
  let containerCards = document.getElementById('containerCards')
  let novoCard = document.createElement('div')
  containerCards.appendChild(novoCard)

  console.log('teste')
}

let btnAdd = document.getElementById('btn-filtrar')
if(btnAdd){
  btnAdd.addEventListener('click', adicionaCardProf)
}
