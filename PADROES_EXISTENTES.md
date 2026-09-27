# Padrões encontrados no sistema recebido

| Padrão | Onde | Situação e melhoria |
|---|---|---|
| MVC, em variante SPA + API | React em `esmforum-react/src/pages/` como visão; `server.js` como controlador HTTP; `modelo.js` como modelo | Parcial. O backend não possui pastas formais `controllers`, `views`, `models`; JSON é a representação entregue à visão React. Separar controladores e serialização quando o sistema crescer. |
| Repository/Data Access Object, parcial | `bd/bd_utils.js` encapsula `query`, `queryAll` e `exec`; `modelo.js` contém SQL de domínio | Parcial. O utilitário abstrai a biblioteca, mas não oferece operações de domínio. `RepositorioPerguntasSqlite` introduz essa fronteira para a busca. |
| Dependency Injection, parcial | `modelo.reconfig_bd(mock_bd)` e `bd.reconfig(nome)` usados nos testes | Funciona para testes, porém muta estado global. Injeção por construtor, como em `ServicoBusca` e `RepositorioPerguntasSqlite`, evita interferência entre testes. |

Não identificamos Observer, Singleton formal ou Factory no código original. Usar `require()` de um módulo único não prova a intenção nem as garantias de um Singleton de domínio.
