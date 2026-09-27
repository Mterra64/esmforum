# Processo ágil — Parte 1

## Escolha: Kanban

O projeto é pequeno, didático e feito por uma pessoa. Kanban permite visualizar o trabalho, puxar uma tarefa por vez e limitar o trabalho em andamento sem simular cerimônias ou sprints de uma equipe inexistente. O fluxo é contínuo: uma funcionalidade entra no backlog, fica pronta para execução, é implementada, revisada e concluída. A revisão exige código testado e documentação atualizada. O quadro é [Projeto Final ES1 — ESM Forum](https://github.com/users/Mterra64/projects/5).

## Quadro e políticas

| Coluna | Critério de entrada | Critério de saída |
|---|---|---|
| Backlog | Ideia solicitada e ordenada | História e escopo definidos |
| Ready | História compreendida e critério de aceitação claro | Início do trabalho |
| In progress | Implementação ou modelagem em execução; limite de 3 do modelo | Solução pronta para revisão |
| In review | Testes e documentação em conferência | Aceitação dos critérios |
| Done | Entrega validada | — |

O modelo Kanban do GitHub criou as cinco colunas. A ordem dos cards usa o prefixo `P1` a `P5`, preservando a prioridade visível. A prioridade simula uma decisão do Product Owner e pode ser revista diante de novas evidências.

| Prioridade | Funcionalidade | Motivo | Escopo nesta entrega |
|---|---|---|---|
| P1 | Busca por palavra-chave | Melhora descoberta de conteúdo com baixo custo e sem migração do banco | Implementada e testada |
| P2 | Votação em perguntas | Aumenta relevância, mas exige identidade e regra de voto único | História e projeto |
| P3 | Categorização por tags | Organiza o acervo e combina com busca | História e projeto |
| P4 | Perfil com histórico | Depende de identidade de usuário persistente | Backlog futuro |
| P5 | Notificações de respostas | Depende de perfis, preferências e entrega assíncrona | Backlog futuro |

O backlog inicial contém os cinco cards. A busca é a primeira fatia vertical (API, banco já existente, interface e teste); votação e tags seguem como extensões propostas. Esta divisão evita afirmar que funcionalidades ainda não implementadas estão prontas.
