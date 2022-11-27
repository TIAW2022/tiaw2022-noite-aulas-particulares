// Inicializa todas as funções do app
init();

// TODO: Modificar dinamicamente o perfil-professor e perfil-aluno, com comunicação entre si

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
      preco: 100,
      telefone: "(35) 98525-0448",
      materias: "Matemática;Física;Informática;Português;",
      descricao:
        "Olá! Meu nome é Hebert, sou formado em Física, Licenciatura, pela PUC Minas e aluno da Pós graduação de: Metodologia de Ensino de Matemática e Física. Leciono há mais de 5 anos Física, Matemática, Química e Inglês. Trabalho dando aulas para alunos do Ensino Fundamental ao Ensino Superior. Trabalho constantemente com alunos para Reforço Escolar, preparação para Vestibulares/Concurso, Reforço de dificuldades nas Matérias, auxílios para Prova e Trabalho. Já dei aula para diversos alunos do Brasil inteiro e para o exterior e gosto muito do que faço. Busco sempre melhorar, colhendo feedback dos pais e alunos, melhorando meus equipamentos de aula e o conteúdo. Garanto que irá gostar das minhas aulas, por isso dou uma aula gratuita para que possa me conhecer e avaliar meu trabalho. Caso queira conhecer mais de mim, abaixo há um vídeo e no meu canal do Youtube disponibilizo alguns vídeos explicativos, para ilustrar como são minhas aulas. Espero sempre poder ajudar mais e mais, prazer em conhecer você!",
      email: "hebert.vidal@geradornv.com.br",
      senha: "senhadohebert123",
    },
    {
      id: 2,
      categoria: "professor",
      nome: "David",
      sobrenome: "Folly Pinho",
      escolaridade: "Doutor",
      preco: 80,
      telefone: "(33) 99812-4258",
      materias: "Português;Inglês;",
      descricao:
        "Eu sou licenciando em Matemática na Universidade Federal Rural de Pernambuco (UFRPE) já no fim do curso. Também iniciei a minha graduação em Bacharelado em Ciências Exatas na Universidade Estácio (UNESA). Já fui aprovado 4 vezes no Instituto Federal de Pernambuco (IFPE), estagiário no CODAI, escola federal vinculada à UFRPE e monitor de Cálculo 1 na universidade. Atualmente trabalho em duas Escolas Técnicas Estaduais no estado de Pernambuco. Em uma delas eu realizo o meu estágio obrigatório. Em outra trabalho como voluntário auxiliando uma professora. Também me dedico às minhas aulas particulares, meu trabalho principal hoje. Também já fui aprovado e tomei posse em um cargo publico efetivo, do qual me exonerei no 2º semestre de 2022. Profissional comunicativo, carismático, responsável e que vai te levar em uma viagem intrigante no mundo da matemática. O que você está esperando?",
      email: "david.pinho@geradornv.com.br",
      senha: "senhadodavid123",
    },
    {
      id: 3,
      categoria: "professor",
      nome: "Rafaella",
      sobrenome: "Coelho Pacheco",
      escolaridade: "Mestra",
      preco: 140,
      telefone: "(37) 98358-8734",
      materias: "Geografia;História;",
      descricao:
        "Minhas aulas são preparadas de acordo com o ritmo de cada aluno. Totalmente personalizadas, respeitando o andamento natural dos estudantes. Aulas focadas principalmente em resolução de exercícios, extraindo as principais dúvidas e dificuldades do aluno. Para minha aulas online utilizo uma mesa digitalizadora onde consigo salvar tudo o que escrevo e posteriormente enviar ao aluno. Estou pronta para te atender e ser um suporte para seu aprendizado, como forma de extensão das aulas de seu colégio!",
      email: "raffaela.pacheco@geradornv.com.br",
      senha: "senhadarafaella123",
    },
    {
      id: 4,
      categoria: "professor",
      nome: "Cleonice",
      sobrenome: "Salomão Alentejo",
      escolaridade: "Doutora",
      preco: 170,
      telefone: "(31) 99677-1824",
      materias: "Ciências;Artes;",
      descricao:
        "Tenho muito para ensinar, adoro todos os assuntos relacionados com a matemática e vibro sempre que posso ensinar ou aprender novos! Procuro despertar no aluno o gosto pela matemática, mostrando sempre problemas práticos envolvendo os conteúdos em foco. Além disso, minha grande experiência com o ensino permite detectar as dificuldades de cada aluno e utilizar técnicas de ensino específicas para cada caso.",
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

  let aulas = [
    {
      id: 1,
      nome: "Cláudio",
      contato: "(31) 99123-4567",
      data: "2023-03-04",
      hora: "13:15",
      local: "Rua Minas Gerais, 197, Vila Brasil de Nossa Senhora Aparecida, Poços de Caldas, MG",
      idProfessor: 1,
      status: "aguardando",
    },
    {
      id: 2,
      nome: "Maria Aparecida",
      contato: "(31) 99413-4567",
      data: "2023-03-05",
      hora: "13:25",
      local: "Rua Itajubá, 185, Floresta, Belo Horizonte, MG",
      idProfessor: 2,
      status: "aguardando",
    },
    {
      id: 3,
      nome: "Marcelino",
      contato: "(31) 99759-4567",
      data: "2023-03-15",
      hora: "14:25",
      local: "Rua Jalaliel, 7859, Vitória da Conquista, Belo Horizonte, MG",
      idProfessor: 3,
      status: "aguardando",
    },
    {
      id: 4,
      nome: "Ana Carolinna",
      contato: "(31) 99796-4567",
      data: "2023-06-27",
      hora: "19:00",
      local: "Rua Santa Cruz, 25, Brasiléia, Betim, MG",
      idProfessor: 4,
      status: "aguardando",
    },
  ];

  if (localStorage.getItem("usuarios") === null) {
    try {
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

  if (localStorage.getItem("aulas") === null) {
    try {
      localStorage.setItem("aulas", JSON.stringify(aulas));
      geraLogs(true, "Storage 'aulas' populado com sucesso.");
    } catch (err) {
      geraLogs(false, "Erro ao popular o storage 'aulas'.", err);
    }
  } else {
    try {
      aulas = JSON.parse(localStorage.getItem("aulas"));
      geraLogs(true, "Storage 'aulas' recuperado com sucesso.");
    } catch (err) {
      geraLogs(false, "Erro ao popular o storage 'aulas'.", err);
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
 * Renderiza a navbar de acordo com o login.
 */
function renderizaNavbar() {
  const userLogado = leUserLogado();
  let categoriaUsuario;
  let idUsuarioLogado;

  if (userLogado !== null) {
    categoriaUsuario = userLogado.categoria;
    idUsuarioLogado = userLogado.id;
  }

  if (checaLogin()) {
    document.querySelector(".navbar").innerHTML = `
      <a class="navbar-brand logo text-muted" href="index.html">
      <i class="fas fa-book"></i>
      <span> <b> Aulas Particulares </b></span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon pt-1"> <i class="fas fa-bars text-muted"></i> </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0 px-3">
          <li class="nav-item px-2">
            <a class="nav-link text-muted" href="perfil-${categoriaUsuario}.html?id=${idUsuarioLogado}">
              <span> <b> Meu Perfil </b> </span>
            </a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link text-muted" href="sobre.html">
              <span> <b> Sobre </b> </span>
            </a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link text-muted" href="#">
              <span class="logout" style="font-weight: bold">Sair</span>
            </a>
          </li>
        </ul>
      </div>
    `;
  } else {
    document.querySelector(".navbar").innerHTML = `
    <a class="navbar-brand logo text-muted" href="index.html">
        <i class="fas fa-book"></i>
        <span> <b> Aulas Particulares </b></span> 
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon pt-1"> <i class="fas fa-bars text-muted"></i> </span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0 px-3">
        <li class="nav-item px-2">
          <a class="nav-link text-muted" href="cadastro-aluno.html"> <span><b>Cadastre-se</b></span> <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link text-muted" href="cadastro-professor.html"> <span> <b>Seja Professor</b> </span> </a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link text-muted" href="login.html"> <span> <b> Entrar </b> </span> </a>
        </li>
        <li class="nav-item px-2">
            <a class="nav-link text-muted" href="sobre.html"> <span> <b> Sobre </b> </span> </a>
          </li>
      </ul>
    </div>
    `;
  }
}

document.querySelector(".navbar-nav").addEventListener("click", (e) => {
  if (e.target.className === "logout") {
    e.preventDefault();

    alert("Deslogado com sucesso...");
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "./index.html";
  }
});

/*
 * Função que lê e retorna um array de objetos com todos os usuário registrados no local storage
 */

function leUsers() {
  let strUsuarios = localStorage.getItem("usuarios");

  if (strUsuarios !== null) {
    strUsuarios = JSON.parse(strUsuarios);
  }

  return strUsuarios;
}

function leUserLogado() {
  let strUsuario = sessionStorage.getItem("usuarioLogado");

  if (strUsuario !== null) {
    strUsuario = JSON.parse(strUsuario);
  }

  return strUsuario;
}

/*
 * Função que salva os dados dos usuarios no local storage
 */

function salvaDados(dados) {
  localStorage.setItem("usuarios", JSON.stringify(dados));
}

/**
 * Função com propósito de salvar uma aula no local storage.
 */
function cadastraAula(aula) {
  let aulas;

  if (localStorage.getItem("aulas") === null) {
    aulas = [];
  } else {
    aulas = JSON.parse(localStorage.getItem("aulas"));
  }

  aulas.push(aula);

  localStorage.setItem("aulas", JSON.stringify(aulas));
}

/**
 * Função que lê as aulas do local storage
 */
function leAulas() {
  let aulas;

  if (localStorage.getItem("aulas") === null) {
    aulas = [];
  } else {
    aulas = JSON.parse(localStorage.getItem("aulas"));
  }

  return aulas;
}

/*
 * Função que cadastra novos alunos e salva os dados no local storage
 */

function cadastraAluno() {
  let usuarios = leUsers();

  let estaRegistrado = false;

  let id = usuarios.length + 1;
  let categoria = "aluno";
  let nome = document.getElementById("name").value;
  let sobrenome = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;

  for (let i = 0; i < usuarios.length; i++) {
    if (email === usuarios[i].email) {
      estaRegistrado = true;
      console.log("teste");
    }
  }

  if (estaRegistrado == false) {
    let novoAluno = {
      id: id,
      categoria: categoria,
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
    };

    usuarios.push(novoAluno);

    salvaDados(usuarios);
  } else {
    alert("e-mail já cadastrado");
  }
}

//event listener que da trigger na função cadatraAluno quando o botao de cadastrar é clicado
let enviaAluno = document.getElementById("btn-submit-aluno");
if (enviaAluno) {
  enviaAluno.addEventListener("click", cadastraAluno);
}

/*
 * Função que cadastra novos professores e salva os dados no local storage
 */

function cadastraProfessor() {
  let usuarios = leUsers();

  let estaRegistrado = false;

  let id = usuarios.length + 1;
  let categoria = "professor";
  let nome = document.getElementById("name").value;
  let sobrenome = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("password").value;
  let escolaridade = document.getElementById("escolaridade").value;
  let telefone = document.getElementById("telefone").value;
  let preco = parseInt(document.getElementById("preco").value);

  let vetMateria = [];
  let materia = document.getElementsByName("materia");
  for (let i = 0; i < materia.length; i++) {
    if (materia[i].checked) {
      vetMateria.push(materia[i].value + ";");
    }
  }

  let materias = vetMateria.toString().replaceAll(",", "");
  console.log(materias);

  let descricao = "";

  for (let i = 0; i < usuarios.length; i++) {
    if (email === usuarios[i].email) {
      estaRegistrado = true;
    }
  }

  if (estaRegistrado == false) {
    let novoProfessor = {
      id: id,
      categoria: categoria,
      nome: nome,
      sobrenome: sobrenome,
      escolaridade: escolaridade,
      preco: preco,
      telefone: telefone,
      materias: materias,
      descricao: descricao,
      email: email,
      senha: senha,
    };
    usuarios.push(novoProfessor);

    salvaDados(usuarios);

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 500);
  } else {
    alert("E-mail já cadastrado");
  }
}

//event listener que da trigger na função cadatraProfessor quando o botao de cadastrar é clicado
let enviaProfessor = document.getElementById("btn-submit-professor");
if (enviaProfessor) {
  enviaProfessor.addEventListener("click", cadastraProfessor);
}

/*
 * Função que faz a validação, efetua o login do usuário, redireciona o usuário para o seu perfil
 * e salva os dados do usuário logado no session storage
 */

function login() {
  let estaLogado = false;
  let usuario = leUsers();

  let emailLogin = document.getElementById("email-login").value;
  let senhaLogin = document.getElementById("password-login").value;
  let idUsuario = "";

  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i].email === emailLogin && usuario[i].senha === senhaLogin) {
      estaLogado = true;
      idUsuario = usuario[i].id;
      usuarioLogado = usuario[i];
    }
  }

  if (estaLogado === false) {
    alert("Usuário e/ou senha incorreto(s).");
  } else if (estaLogado === true) {
    if (usuario[idUsuario - 1].categoria === "aluno" || usuario[idUsuario - 1].categoria === "professor") {
      sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
      alert("Logado com sucesso! Clique em 'OK' para ser redirecionado");

      setTimeout(() => {
        window.location.href = "./index.html";
      }, 500);
    }
  }
}

const logado = document.querySelector("#btn-submit-login");

if (logado) {
  logado.addEventListener("click", (e) => {
    e.preventDefault();
    login();
  });
}

function checaLogin() {
  let logado = sessionStorage.getItem("usuarioLogado");
  let estaLogado = false;

  if (logado !== null) {
    estaLogado = true;
  } else {
    console.log("Não há usuários logados");
  }

  return estaLogado;
}

//adiciona um card de professor na página de buscar professores quando uma nova conta de professor é criada

function adicionaCardProf() {
  let usuario = leUsers();

  //console.log(usuario)

  // let containerCards = document.getElementById('containerCards')
  // let novoCard = document.createElement('div')

  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i].categoria == "professor") {
      let containerCards = document.getElementById("containerCards");
      let novoCard = document.createElement("div");
      containerCards.appendChild(novoCard);
      novoCard.className = "col-12 col-sm-12 col-md-6 col-lg-3 card-prof d-grid justify-content-center";
      novoCard.setAttribute("id", `cardProf${i}`);

      const materiasLecionadas = usuario[i].materias.replaceAll(";", "<br>");

      novoCard.innerHTML = `
        <div class="col-xl-5 col-xxl-6 text-center img d-flex mx-auto">
          <img class="rounded-3 my-3" id="divCardProfessor" style="width: 150px; height: 150px;" src="img/professor.png" alt="..." />
        </div>
        <p id="nomeProf">
          <strong>Nome:</strong> ${usuario[i].nome}
        </p>
        <p>
          <strong>Formação:</strong> ${usuario[i].escolaridade} <br>
        </p>
        <p id="materiaProf">
          <strong>Materias:</strong> <br> ${materiasLecionadas}
        </p>
        <p id="precoProf">
          <strong>Preço hora/aula:</strong> R$${usuario[i].preco} <br>
        </p>
        <a href="./pagina-professor.html?id=${usuario[i].id}" class="btn text-primary mt-3"><i class="fas fa-arrow-right"></i> <b>Contate o professor!</b></a>
      `;
    }
  }
}

let containerCards = document.getElementById("containerCards");
if (containerCards) {
  adicionaCardProf();
}

//filtra os cards dos professores de acordo com a matéria e o preço na página de buscar os professores

function filtraCardProf(e) {
  let preco = parseInt(document.getElementById("precoFiltro").value);
  let materia = document.getElementById("materiaFiltro").value;
  let usuarios = leUsers();

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].categoria == "professor") {
      let divCard = document.getElementById(`cardProf${i}`);
      if (!(usuarios[i].materias.includes(materia) && usuarios[i].preco <= preco)) {
        divCard.setAttribute("class", "collapse");
      }
    }
  }
  e.preventDefault();
}

let btnFiltro = document.getElementById("btn-filtrar");
if (btnFiltro) {
  btnFiltro.addEventListener("click", filtraCardProf);
}

/**
 * Função com propósito de inicializar todas as funções do app.
 *
 * Obrigatório ser a última função a ser declarada e todas as funções a serem chamadas devem ser inicializadas dentro desta função.
 */
function init() {
  populaStorage();
  renderizaNavbar();
}
