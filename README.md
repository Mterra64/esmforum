# ESM Forum

> **Projeto Final ES1:** este fork reúne as Partes 1, 2 e 3. Veja [INSTALACAO.md](INSTALACAO.md), [PROCESSO.md](PROCESSO.md), [HISTORIAS.md](HISTORIAS.md), [DIAGRAMAS_PARTE2.md](DIAGRAMAS_PARTE2.md), [IMPLEMENTACAO_SOLID.md](IMPLEMENTACAO_SOLID.md), [PADROES_PROPOSTOS.md](PADROES_PROPOSTOS.md), [ARQUITETURA.md](ARQUITETURA.md) e [PROPOSTA_ARQUITETURA.md](PROPOSTA_ARQUITETURA.md). O frontend está no [fork React](https://github.com/Mterra64/esmforum-react) e o planejamento no [GitHub Project](https://github.com/users/Mterra64/projects/5).

> **Contexto da entrega:** as três partes foram executadas e publicadas em uma entrega consolidada em 27/09/2026. A ordem Parte 1 → Parte 2 → Parte 3 representa a sequência de trabalho e dos commits, não entregas feitas nas semanas originalmente previstas pelos enunciados.

O **ESM Forum** é um sistema minimalista de demonstração do livro [Engenharia de Software Moderna](https://engsoftmoderna.info). 
Ele é um fórum simples de perguntas e respostas. O objetivo é permitir que os alunos tenham um primeiro contato prático com os conceitos estudados no livro. Ou seja:

* Trata-se de um sistema com objetivo didático e, por isso, não temos a intenção de colocá-lo em produção. 
* Também não temos a intenção de implementar um sistema completo, com todas as funcionalidades possíveis.

## Frontend
 
A interface do sistema é também muito simples, conforme  mostrado abaixo. 

![Primeiro screenshot](docs/screen1.png)

O frontend está implementado, usando React, em um [repositório](https://github.com/mtov/esmforum-react) separado.

## Backend

O backend do sistema, que está neste repositório, usa JavaScript e também as seguintes tecnologias:

  * [Node.js](https://nodejs.org/en), um sistema que permite a execução de programas JavaScript fora de browsers, isto é, em servidores.
  * [Express](https://expressjs.com), uma biblioteca para construção de aplicações Web em Node.js.
  * [SQLite](https://www.sqlite.org), um banco de dados relacional simples.
  * [Jest](https://jestjs.io/), um framework para implementação de testes de unidade e de integração.

### Instalação e Execução do Backend

Veja neste [link](docs/instalacao.md).

## Praticando o Conteúdo do Livro

* [Histórias de Usuários e Backlog](docs/backlog.md)
* [Arquitetura MVC](docs/arquitetura.md)
* [Diagramas de Sequência](docs/uml.md)
* Testes:
  * [Testes de Unidade](docs/testes-unidade.md)
  * [Testes de Integração](docs/testes-integracao.md)
  * [Testes End-to-End](docs/testes-e2e.md)
* [Integração Contínua](docs/ci.md)
