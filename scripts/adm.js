const chave = "usuariosCurupira";
let usuarios = [];
let indiceParaExcluir = -1;
let excluirTodos = false;
let campoPesquisa = "nome";

const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const botaoCadastrar = document.getElementById("btn-cadastrar");
const botaoLimpar = document.getElementById("btn-limpar");

const campoBusca = document.getElementById("pesquisa");
const botaoPesquisarNome = document.getElementById("btn-pesquisar-nome");
const botaoPesquisarEmail = document.getElementById("btn-pesquisar-email");
const botaoExcluirTodos = document.getElementById("btn-excluir-todos");

const lista = document.getElementById("lista");
const mensagemLista = document.getElementById("mensagem-lista");

const areaConfirmacao = document.getElementById("confirmacao");
const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");
const botaoConfirmar = document.getElementById("btn-confirmar");
const botaoCancelar = document.getElementById("btn-cancelar");

function carregarUsuarios() {
  const dados = localStorage.getItem(chave);

  if (dados !== null) {
    usuarios = JSON.parse(dados);
  } else {
    usuarios = [];
  }
}

function salvarUsuarios() {
  localStorage.setItem(chave, JSON.stringify(usuarios));
}

function obterData() {
  const dataAtual = new Date();

  let dia = dataAtual.getDate();
  let mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();

  if (dia < 10) {
    dia = "0" + dia;
  }

  if (mes < 10) {
    mes = "0" + mes;
  }

  return `${dia}/${mes}/${ano}`;
}

function cadastrarUsuario() {
  const nome = campoNome.value;
  const email = campoEmail.value;

  if (nome.length == 0) {
    alert("Informe o nome do usuário");
  } else if (email.length == 0) {
    alert("Informe o e-mail");
  } else {
    const usuario = {
      nome: nome,
      email: email,
      data: obterData(),
    };

    usuarios[usuarios.length] = usuario;

    salvarUsuarios();
    limparCampos();
    campoBusca.value = "";
    listarUsuarios();
  }
}

function limparCampos() {
  campoNome.value = "";
  campoEmail.value = "";
}

function contem(texto, termo) {
  if (termo.length == 0) {
    return true;
  }

  for (let i = 0; i <= texto.length - termo.length; i++) {
    let achou = true;

    for (let j = 0; j < termo.length; j++) {
      if (texto[i + j] != termo[j]) {
        achou = false;
      }
    }

    if (achou) {
      return true;
    }
  }

  return false;
}

function listarUsuarios() {
  lista.innerHTML = "";

  const termo = campoBusca.value;
  let quantidade = 0;

  for (let i = 0; i < usuarios.length; i++) {
    let valor = "";

    if (campoPesquisa == "nome") {
      valor = usuarios[i].nome;
    } else {
      valor = usuarios[i].email;
    }

    if (contem(valor, termo)) {
      const item = document.createElement("li");
      const dados = document.createElement("div");
      const nome = document.createElement("p");
      const email = document.createElement("p");
      const data = document.createElement("p");
      const botaoExcluir = document.createElement("button");

      dados.className = "dados";
      nome.className = "nome";
      email.className = "email";
      data.className = "data";

      botaoExcluir.textContent = "Excluir";
      botaoExcluir.className = "btn btn-perigo btn-excluir";

      nome.textContent = usuarios[i].nome;
      email.textContent = usuarios[i].email;
      data.textContent = "Data de cadastro: " + usuarios[i].data;

      let posicao = i;

      botaoExcluir.addEventListener("click", function () {
        indiceParaExcluir = posicao;
        excluirTodos = false;
        abrirConfirmacao("Deseja realmente excluir este usuário?");
      });

      dados.appendChild(nome);
      dados.appendChild(email);
      dados.appendChild(data);
      item.appendChild(dados);
      item.appendChild(botaoExcluir);
      lista.appendChild(item);

      quantidade++;
    }
  }

  if (usuarios.length == 0) {
    mensagemLista.textContent = "Nenhum usuário cadastrado.";
    mensagemLista.style.display = "block";
  } else if (quantidade == 0) {
    mensagemLista.textContent = "Nenhum usuário encontrado.";
    mensagemLista.style.display = "block";
  } else {
    mensagemLista.style.display = "none";
  }
}

function pesquisarPorNome() {
  campoPesquisa = "nome";
  botaoPesquisarNome.classList.add("campo-ativo");
  botaoPesquisarEmail.classList.remove("campo-ativo");
  listarUsuarios();
}

function pesquisarPorEmail() {
  campoPesquisa = "email";
  botaoPesquisarEmail.classList.add("campo-ativo");
  botaoPesquisarNome.classList.remove("campo-ativo");
  listarUsuarios();
}

function abrirConfirmacao(mensagem) {
  mensagemConfirmacao.textContent = mensagem;
  areaConfirmacao.style.display = "block";
}

function fecharConfirmacao() {
  areaConfirmacao.style.display = "none";
  indiceParaExcluir = -1;
  excluirTodos = false;
}

function solicitarExclusaoTodos() {
  if (usuarios.length == 0) {
    alert("Não há usuários para excluir");
  } else {
    excluirTodos = true;
    indiceParaExcluir = -1;
    abrirConfirmacao("Deseja realmente excluir todos os usuários?");
  }
}

function confirmarExclusao() {
  if (excluirTodos) {
    usuarios = [];
    localStorage.removeItem(chave);
  } else {
    const novaLista = [];

    for (let i = 0; i < usuarios.length; i++) {
      if (i != indiceParaExcluir) {
        novaLista[novaLista.length] = usuarios[i];
      }
    }

    usuarios = novaLista;
    salvarUsuarios();
  }

  fecharConfirmacao();
  listarUsuarios();
}

botaoCadastrar.addEventListener("click", cadastrarUsuario);
botaoLimpar.addEventListener("click", limparCampos);

campoBusca.addEventListener("input", listarUsuarios);
botaoPesquisarNome.addEventListener("click", pesquisarPorNome);
botaoPesquisarEmail.addEventListener("click", pesquisarPorEmail);

botaoExcluirTodos.addEventListener("click", solicitarExclusaoTodos);
botaoConfirmar.addEventListener("click", confirmarExclusao);
botaoCancelar.addEventListener("click", fecharConfirmacao);

carregarUsuarios();
listarUsuarios();
