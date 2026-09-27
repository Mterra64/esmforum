# Planejamento de pair programming — Parte 1

Este trabalho está sendo realizado individualmente. Se houvesse um par, usaríamos VS Code Live Share para edição conjunta e Discord ou chamada equivalente para voz e compartilhamento de tela. A sessão começaria com a leitura da história e seus critérios, seguida por uma pequena tarefa de teste, código, execução e revisão.

O **driver** escreveria o código e executaria testes. O **navigator** acompanharia requisitos, questionaria casos de borda, observaria a arquitetura e anotaria decisões. Trocaríamos papéis a cada 25 minutos ou ao concluir um teste pequeno, o que ocorrer primeiro. Em caso de impasse, faríamos uma pausa curta para comparar opções e registrar a decisão no commit ou documento pertinente.

Plano por funcionalidade: na busca, o par revisaria tratamento de entradas vazias, `%`/`_`, contagem de respostas e integração da tela; na votação, definiria identidade e voto único antes de codificar; nas tags, verificaria cardinalidade e migração do banco. Cada sessão terminaria com testes passando, revisão do diff e um commit descritivo. A descrição é um plano didático, não uma alegação de que houve um segundo participante.
