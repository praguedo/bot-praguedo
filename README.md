<h1 align="center">
  <img src="./src/assets/discord.svg" alt="bot discord" height="100">
<br>
Bot discord Praguedo
</h1>

<p align="center"> Bot para o discord do praguedo, desenvolvido com a biblioteca
    <a aria-label="IMDB" href="https://discord.js.org/#/">
    discord.js
  </a>



<p align="center">
    <img src="https://img.shields.io/github/last-commit/praguedo/bot-praguedo"></img>
    <img src="https://img.shields.io/github/languages/count/praguedo/bot-praguedo"></img>
</p>
<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>


## Features

- Lista de comando personalizados.
- Mensagem de boas vindas personalizada no server.
- Player de música (em breve)

## Tecnologias utilizadas

- linguagem:
  - Typescript.

- Docker:
  - Para ambiente de desenvolvimento.
  - Para ambiente de produção.

- Linters
  - Eslint e Prettier para padronização de código.

## Instalação - Projeto

#### Requisitos:

Clone o projeto em seu computador.
```bash
git clone https://github.com/praguedo/bot-praguedo
```
- Preferencialmente ambiente Unix.

- Docker instalado.

## Start bot
- Criar aplicação no [Discord developers](https://discord.com/developers/applications).
  - Criar um .env na raiz do projeto com o seu token
- Para rodar em modo de desenvolvimento execute:
- ```bash
  docker build -f Dockerfile.dev -t bot-praguedo-dev .

  docker run -it -v ${PWD}:/home/bot -v /home/bot/node_modules --rm bot-praguedo-dev
  ```
- Convidar o bot para o seu servidor
<br><br><br>


## 🤔 Como contribuir

Se quiser contribuir para esse repositório aqui, seja corrigindo algum problema, adicionando comentários ou melhorando a documentação, você pode seguir esse tutorial abaixo:

- Faça [um fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo) desse repositório;
- Entre no seu perfil no GitHub e faça um clone do repositório que você fez um *fork*;
- Crie uma *branch* com a sua alteração: `git checkout -b minha-alteracao`;
- Faça as alterações necessárias no código ou na documentação;
- Faça *commit* das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça *push* para a sua *branch*: `git push origin minha-alteracao`;
- Agora é só abrir a sua *pull request* no repositório que você fez o *fork*;

Depois que o *merge* da sua *pull request* for feito, você pode deletar a sua *branch*.

## :memo: Licença

Esse projeto é licensiado pela MIT License - Veja a página da [licença](https://opensource.org/licenses/MIT) para detalhes
