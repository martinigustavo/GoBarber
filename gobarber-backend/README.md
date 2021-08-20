<p align="center">
    <img width="300" align="center" src=".github/gostack.svg">
</p>

<h1 align="center">
    GoBarber API
</h1>

<h3 align="center">
Plataforma de agendamento e gerenciamento para barbearias
</h3>

## :rocket: Sobre o projeto

<p>
Esta é uma plataforma completa onde o cliente pode visualizar a agenda de barbeiros e agendar um horário,
e para barbeiros, permite gerenciar os horários marcados.
</p>
<p>
Este repositório contém a API REST que faz todo o CRUD da aplicação, persistência de dados, tratativa de exceções e que serve dados tanto ao projeto front-end quanto ao projeto mobile.
</p>

## :computer: Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Mongodb](https://www.mongodb.com/)

## :books: Guia de instalação e execução

### Pré-requisitos

## :books: Requisitos

- Ter [**Git**](https://git-scm.com/) para clonar o projeto.
- Ter [**Node.js**](https://nodejs.org/en/) instalado.
- Ter [**Docker**](https://www.docker.com/) rodando um container PostgreSQL.

### Como executar

- Clone o repositório `git clone https://github.com/martinigustavo/GoBarberAPI`
- Vá até o diretório `cd gostack-gobarber-server`
- Execute `yarn` para instalar as dependências
- Copie o arquivo .env.example executando `cp .env.example .env` para linux ou mac e `copy .env.example .env` para windows
- Abra o arquivo .env e preencha com suas variáveis de ambiente
- Abra o arquivo ormconfig.json e verifique as informações para criar os bancos de dados ou troque conforme as suas configurações
- Execute `yarn typeorm migration:run` para rodar as migrations
- Execute `yarn dev:server` para rodar o servidor

Caso deseje executar os testes unitários e de integração basta executar `yarn test` em seu terminal. Você poderá ver um relatório da cobertura acessando o arquivo `coverage/lcov-report/index.html`.
