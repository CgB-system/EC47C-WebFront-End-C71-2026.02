<p align="center">
  <img src="assets-readme/curupira.png" alt="Curupira" width="500" />
</p>


<h1 align="center">Curupira - Portal ODS 15 (Vida Terrestre)</h1>


> [!IMPORTANT]
> Repositório desenvolvido para a disciplina **Programação Web Front-End (EC47C - C71 - 2026/02)**, do curso de Engenharia de Computação da Universidade Tecnológica Federal do Paraná (UTFPR), campus Cornélio Procópio.

---

## Descrição do Projeto

> [!NOTE]
> O **Curupira** é visto como uma entidade sagrada e protetora das matas e dos animais na visão dos povos indígenas brasileiros, por isso o nome do projeto leva este nome. O projeto **Curupira** é uma página desenvolvida para uma ONG local focada na preservação da fauna e do ecossistema brasileiro, assim, estamos alinhados ao **[Objetivo de Desenvolvimento Sustentável (ODS) 15](https://brasil.un.org/pt-br/sdgs/15)** da ONU, que busca proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres. O tema principal é vida silvestre. Nesta primeira etapa do projeto, conforme descrito, foi apenas utilizado HTML e CSS, sob aplicação de conceitos como: tags semânticas, modelo de caixa, flexbox, grid layout e responsividade vistos em sala de aula. O sistema como um todo possui uma página principal, cujo nome do arquivo é `index.html`, uma página de login, cujo arquivo é `login.html` e, por fim, uma página de cadastro, cujo nome é `cadastro.html`.
> Nessa segunda etapa do projeto foi aplicado a linguagem JavaScript e alguns conceitos que permeiam tal. Abaixo, temos uma visão geral completa de ambos projetos.

---

### Projeto 1 - HTML e CSS

A primeira etapa consistiu na construção da estrutura e da apresentação
visual da aplicação, utilizando HTML e CSS.

Foram desenvolvidas as seguintes páginas:

-   `index.html`: página principal, com informações sobre preservação
    ambiental, orientações e galeria de animais silvestres.
-   `login.html`: página de autenticação, com campos de e-mail e senha.
-   `cadastro.html`: página de cadastro, contendo formulário para
    preenchimento dos dados do usuário.

O desenvolvimento aplicou conceitos de HTML semântico, modelo de caixa,
Flexbox, Grid Layout e responsividade.

### Projeto 2 - JavaScript

A segunda etapa consistiu na implementação de funcionalidades dinâmicas
utilizando JavaScript, manipulação da API DOM e armazenamento local por
meio da API Web Storage.

Foi desenvolvida a página `adm.html`, acessível pela opção **Adm** no
menu de navegação da página principal.

As funcionalidades implementadas são:

-   **Cadastro de usuários:** inclusão de usuários por meio dos campos
    nome e e-mail.
-   **Listagem dinâmica:** apresentação dos usuários cadastrados em uma
    lista não ordenada, contendo nome, e-mail e data de cadastro.
-   **Armazenamento local:** persistência dos registros no navegador
    utilizando Local Storage, em uma única chave com dados estruturados
    em JSON.
-   **Exclusão individual:** remoção de um usuário específico, mediante
    confirmação.
-   **Exclusão coletiva:** remoção de todos os usuários cadastrados,
    mediante confirmação.
-   **Pesquisa por nome:** filtragem dos registros utilizando o nome do
    usuário.
-   **Pesquisa por e-mail:** filtragem dos registros utilizando o
    e-mail.
-   **Limpeza de campos:** opção para limpar os campos do formulário de
    cadastro.

Os registros são armazenados localmente no navegador do usuário, sem
necessidade de comunicação com um servidor ou banco de dados externo.

---

## 🌐 Acesso ao Projeto

Pode-se acessar o GitPages por meio do link:

[GitPages - Projeto Curupira](https://cgb-system.github.io/EC47C-WebFront-End-C71-2026.02/)

---

## 📁 Validações e Apresentação

No Drive estão disponíveis os prints das validações realizadas no **W3C Validator**.

Os prints das validações também estão disponíveis diretamente no repositório, organizados nas seguintes pastas:

- [Prints HTML](https://github.com/cgb-system/EC47C-WebFront-End-C71-2026.02/tree/main/printsHTML-validados)
- [Prints CSS](https://github.com/cgb-system/EC47C-WebFront-End-C71-2026.02/tree/main/printsCSS-Validado)

[📂 Drive - Prints das validações e vídeo de apresentação](https://drive.google.com/drive/folders/1N4mvvWEJRk2wZ8Wf48bDUG_fs_lMxJmk?usp=sharing)


>[!IMPORTANT]
> Temos 3 branches no repositório, mas a branch que deve ser consultada é a `main`. As demais servem apenas para mostrar o que cada integrante desenvolveu. A homepage é a parte desenvolvida pelo Antonio, enquanto a `feature-login-cadastro` foi desenvolvida pelo Carlos. A `main` é basicamente a unificação de ambas as partes.

---

## Estrutura do Projeto

A organização dos arquivos está apresentada a seguir:

``` text
.
├── assets/
│   ├── arara_azul.jpg
│   ├── lobo_guara.webp
│   ├── mico_leao.jpg
│   ├── onca_pintada.jpg
│   ├── tamandua_bandeira.jpg
│   └── tatu_bola.webp
├── adm.html
├── cadastro.html
├── index.html
├── login.html
├── scripts/
│   └── adm.js
├── styles/
│   ├── adm.css
│   ├── cadastro.css
│   ├── index.css
│   └── login.css
├── printsCSS-Validado/
│   ├── cadastroCSSValidado.png
│   ├── indexCSSValidado.png
│   └── loginCSSValidado.png
├── printsHTML-validados/
│   ├── cadastroHTMLValidado.png
│   ├── indexHTMLValidado.png
│   └── loginHTMLValidado.png
├── LICENSE
└── README.md
```

---

## Tecnologias Utilizadas

<table align="center">
  <tr>
    <th align="center">Categoria</th>
    <th align="center">Tecnologias</th>
  </tr>
  <tr>
    <td align="center"><b>Estrutura</b></td>
    <td align="center">
      <img src="https://skillicons.dev/icons?i=html" width="50" alt="HTML5" />
    </td>
  </tr>
  <tr>
    <td align="center"><b>Estilização</b></td>
    <td align="center">
      <img src="https://skillicons.dev/icons?i=css" width="50" alt="CSS3" />
    </td>
  </tr>
  <tr>
    <td align="center"><b>Funcionalidades e Manipulação de elementos</b></td>
    <td align="center">
      <img src="https://skillicons.dev/icons?i=js" width="50" alt="JavaScript e API DOM" />
    </td>
  </tr>
  <tr>
    <td align="center"><b>Armazenamento</b></td>
    <td align="center">
      <img src="https://skillicons.dev/icons?i=js" width="50" alt="API Web Storage (Local Storage)" />
    </td>
  </tr>
  <tr>
    <td align="center"><b>Publicação</b></td>
    <td align="center">
      <img src="https://skillicons.dev/icons?i=github" width="50" alt="GitHub Pages" />
    </td>
  </tr>
</table>

---

## Integrantes

Este projeto foi desenvolvido pelos alunos:

1.  **Antonio Gabriel Nunes Martins** - 2865548\
    [Curriculum Vitae](https://antonollo.github.io/Curriculum-Vitae/)

2.  **Carlos Gabriel Baratieri** - 2706598\
    [Curriculum Vitae](https://fuyuakii.github.io/curriculum-vitae/)

