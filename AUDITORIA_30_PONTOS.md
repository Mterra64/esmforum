# Auditoria da entrega contra a rubrica (30 pontos possíveis)

Esta é uma conferência de evidências, não uma previsão de nota. A avaliação final pertence ao professor. Código de busca, testes e diagramas foram verificados localmente; links públicos devem ser conferidos após os commits e o envio aos forks.

**Ressalva de prazo:** os enunciados distribuíam as entregas pelas semanas 3, 6 e 9, mas os três conjuntos foram preparados e publicados de uma vez em 27/09/2026. A tabela avalia cobertura técnica da rubrica, não comprova cumprimento dos prazos nem da cadência gradual prevista. Uma eventual penalidade por atraso ou entrega conjunta depende das regras da disciplina.

| Parte | Critério / peso | Evidência |
|---|---:|---|
| 1 | Ambiente — 1,0 | Dois forks; `INSTALACAO.md`; backend e frontend executados |
| 1 | Escolha do board — 2,0 | Kanban justificado em `PROCESSO.md` |
| 1 | Board — 3,0 | GitHub Project #5 público, cinco colunas e cinco cards ordenados P1–P5 |
| 1 | Design simples — 2,0 | `DESIGN_SIMPLES.md` com exemplos reais e divergência dos caminhos do enunciado |
| 1 | Pair programming — 2,0 | `PAIR_PROGRAMMING.md` como planejamento individual hipotético |
| 2 | Histórias — 2,0 | `HISTORIAS.md`: três histórias, cinco critérios cada, ordem e justificativa |
| 2 | Caso de uso — 1,5 | `CASO_DE_USO.md`: atores, pré/pós-condições, fluxo e três alternativas |
| 2 | Classes — 2,0 | `diagramas/diagrama_classes.mmd` e `.png` |
| 2 | Sequência — 2,0 | `diagramas/diagrama_sequencia.mmd` e `.png` |
| 2 | Atividades — 1,5 | `diagramas/diagrama_atividades.mmd` e `.png` |
| 2 | Estados — 1,0 | `diagramas/diagrama_estados.mmd` e `.png` |
| 3 | Análise SOLID — 1,5 | `ANALISE_SOLID.md`: três aderências localizadas e duas melhorias |
| 3 | Implementação SOLID — 2,0 | `busca/`, `server.js`, frontend, testes; `IMPLEMENTACAO_SOLID.md` |
| 3 | Padrões existentes — 1,0 | `PADROES_EXISTENTES.md` |
| 3 | Três padrões propostos — 2,5 | `PADROES_PROPOSTOS.md` e três pares `.mmd`/`.png` |
| 3 | Arquitetura atual — 1,0 | `ARQUITETURA.md` e par `arquitetura_atual` |
| 3 | Arquitetura proposta — 2,0 | `PROPOSTA_ARQUITETURA.md` e par `arquitetura_proposta` |

**Validações locais:** 7 testes do backend em 3 suítes; build React concluído; API respondeu HTTP 200 e 400 nos cenários verificados; interface exibiu estado vazio e restaurou a lista; nove fontes Mermaid geraram nove PNGs. Dependências antigas do projeto original produziram avisos no build e auditoria do npm. O relatório não afirma que votação, tags, perfil ou notificações foram implementados.
