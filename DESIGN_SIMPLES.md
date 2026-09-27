# Design simples e YAGNI — Parte 1

O enunciado cita `routes/perguntas.js` e `routes/respostas.js`, mas esses arquivos não existem nos repositórios fornecidos. As rotas reais estão em `server.js`; persistência e regras simples estão em `modelo.js`. A análise abaixo usa essa versão efetiva.

## Acertos existentes

`server.js` registra apenas quatro operações necessárias ao fórum atual: listar/cadastrar perguntas e obter/cadastrar respostas. Não há hierarquia de controladores, mensageria ou infraestrutura distribuída para uma aplicação de demonstração. Em `modelo.js`, `cadastrar_pergunta` usa uma inserção direta e retorna o identificador; `get_respostas` usa uma consulta parametrizada. O banco tem somente duas tabelas, `perguntas` e `respostas`. Isso exemplifica YAGNI: não antecipar recursos sem uma necessidade atual.

```js
function get_respostas(id_pergunta) {
  return bd.queryAll('select * from respostas where id_pergunta = ?', [id_pergunta]);
}
```

## Simplificações úteis

O `server.js` repete `try/catch` em cada rota e mistura abertura da porta com a criação da aplicação. Se mais rotas forem adicionadas, um pequeno manipulador de erros e uma exportação de `app` podem reduzir repetição e facilitar testes HTTP. Isso só deve ser feito quando a repetição começar a prejudicar manutenção.

`listar_perguntas()` executa uma consulta de contagem por pergunta (N+1). Uma consulta com subselect, como a usada na busca, elimina essa repetição sem criar um mecanismo de cache prematuro:

```sql
SELECT p.id_pergunta, p.texto,
       (SELECT COUNT(*) FROM respostas r WHERE r.id_pergunta = p.id_pergunta) AS num_respostas
FROM perguntas p;
```

O argumento `id_usuario` é fixado como `1` em `cadastrar_pergunta`; isso atende à demonstração atual, mas não representa autenticação real. Não seria simples nem correto introduzir login completo apenas para a busca. A votação e o perfil exigirão uma decisão explícita de identidade antes de sua implementação.
