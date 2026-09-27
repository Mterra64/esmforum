# Implementação SOLID — busca por palavra-chave

## Escopo entregue

A Parte 3 implementa P1 de ponta a ponta: campo de busca e estados da tela React, `GET /?q=...`, validação de 1 a 100 caracteres, consulta literal parametrizada no SQLite, contagem de respostas e testes. `GET /` permanece compatível com a listagem existente. A busca por palavra-chave é sobre `Pergunta.texto`; tags e votos continuam propostas.

## SRP

`busca/servicoBusca.js` valida e normaliza a entrada; `busca/criterioTexto.js` define como interpretar a expressão; `busca/repositorioSqlite.js` executa a consulta e compõe os dados retornados; `server.js` traduz HTTP em chamada de aplicação; `src/pages/Pergunta.js` (frontend) cuida da interação visual. Cada módulo tem uma razão principal para mudar.

```js
buscar(termo) {
  const palavra = termo.trim();
  if (!palavra || palavra.length > 100) throw new RangeError('...');
  return this.repositorio.buscar(this.criterio, palavra);
}
```

## DIP

O serviço recebe `repositorio` com operação `buscar(criterio, termo)`; não importa `better-sqlite3`. Recebe também um `criterio` com `consulta(termo)`. JavaScript usa contratos estruturais, sem interface sintática. O repositório SQLite recebe o adaptador de banco no construtor, o que permite teste com um banco em memória.

```js
const busca = new ServicoBusca(new RepositorioPerguntasSqlite());
```

A composição concreta fica em `server.js`, na borda da aplicação. Os testes injetam outro adaptador, exercitando o contrato em vez de acessar o banco de produção.

## OCP

`ServicoBusca` chama `criterio.consulta(termo)`. É possível acrescentar um critério de prefixo ou, após a migração das tags, um critério de tag, sem editar o serviço. O teste `permite novo critério sem alterar o serviço` demonstra uma extensão real. Critérios são código interno confiável, não SQL fornecido pelo cliente HTTP; o texto do usuário entra exclusivamente como parâmetro SQL.

```js
const criterioPrefixo = {
  consulta: termo => ({ where: 'p.texto LIKE ?', params: [`${termo}%`] })
};
new ServicoBusca(repositorio, criterioPrefixo).buscar('Como');
```

`CriterioTexto` escapa `%`, `_` e `\\` para preservar sentido literal. O `LIKE` do SQLite ignora caixa para ASCII por padrão; não prometemos normalização universal de acentos. O limite de 100 caracteres reduz entradas desmedidas, mas a aplicação continua didática, sem autenticação ou infraestrutura de produção.

## Evidência de validação

`npm test -- --runInBand`: 3 suítes e 7 testes passaram, incluindo busca, caracteres especiais, validação e extensão por critério. `npm run build` do frontend confirma compilação. A instalação e uma verificação manual da API e da tela são descritas em `INSTALACAO.md`.
