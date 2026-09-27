# Histórias de usuário priorizadas — Parte 2

A ordem P1–P3 corresponde ao quadro Kanban. Busca entrega valor imediato sem exigir cadastro. Votação vem depois por depender de identidade e controle de voto único. Tags completam a descoberta de conteúdo e exigem mudança de esquema.

## P1 — Busca por palavra-chave

**Como** visitante do fórum, **eu quero** buscar perguntas por palavra-chave **para** encontrar discussões relevantes sem percorrer toda a lista.

**Critérios de aceitação**

1. Ao informar de 1 a 100 caracteres não vazios e clicar em Buscar, a lista exibe apenas perguntas cujo texto contém a expressão.
2. A busca ignora maiúsculas e minúsculas para texto ASCII e trata `%` e `_` como caracteres literais.
3. Cada resultado mantém seu identificador, texto e número de respostas, com acesso à página de respostas.
4. Sem correspondências, a interface informa que nenhuma pergunta foi encontrada.
5. Limpar restaura a lista completa; uma expressão composta só de espaços recebe erro HTTP 400 na API.

## P2 — Votação em perguntas

**Como** usuário identificado, **eu quero** votar positiva ou negativamente em uma pergunta **para** indicar sua utilidade à comunidade.

**Critérios de aceitação**

1. Cada pergunta exibe placar e controles de voto positivo e negativo.
2. Um usuário tem no máximo um voto ativo por pergunta; repetir o mesmo voto o remove.
3. Trocar o sentido do voto atualiza o placar em duas unidades na direção correspondente.
4. O voto fica persistido e o placar permanece correto após recarregar a página.
5. Usuário sem identificação válida não consegue votar; a API devolve erro apropriado.

## P3 — Categorização por tags

**Como** participante do fórum, **eu quero** associar tags a perguntas e filtrar por elas **para** navegar por assunto.

**Critérios de aceitação**

1. Ao criar ou editar pergunta, o usuário pode selecionar até três tags de uma lista controlada.
2. A mesma tag não pode ser repetida na mesma pergunta.
3. A lista e o detalhe exibem as tags associadas à pergunta.
4. Selecionar uma tag lista apenas perguntas daquela categoria.
5. Perguntas antigas sem tag continuam visíveis na lista geral.

Votação e tags estão modeladas para as próximas iterações; estes critérios não alegam implementação nesta entrega.
