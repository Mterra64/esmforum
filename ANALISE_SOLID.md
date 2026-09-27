# Análise SOLID do código recebido — Parte 3

O enunciado se refere a `routes/` e `models/`, mas o fork recebido não contém esses diretórios. As rotas estão em `server.js`, o modelo em `modelo.js` e o acesso SQLite em `bd/bd_utils.js`. A avaliação abaixo trata esses arquivos, antes da extensão de busca. “Segue” significa aderência localizada, não que o módulo inteiro cumpra todos os princípios.

## Três pontos positivos

1. **SRP localizado — `bd/bd_utils.js`:** `query`, `queryAll` e `exec` encapsulam chamadas ao `better-sqlite3`; não formatam a resposta HTTP nem renderizam a interface. Exemplo: `return bd.prepare(query).all(params)`.
2. **DIP parcial — `modelo.js`:** `reconfig_bd(mock_bd)` permite substituir a dependência de dados por um objeto que oferece `query`, `queryAll` e `exec`. O teste `testes/listar_perguntas.test.js` demonstra essa substituição. Há injeção prática por contrato estrutural, embora a dependência padrão continue concreta e global.
3. **SRP localizado — handlers de `server.js`:** a rota `POST /perguntas` lê o corpo HTTP, delega a inserção a `modelo.cadastrar_pergunta` e devolve JSON. A instrução SQL fica fora do handler, mantendo a responsabilidade de transporte separada da persistência.

## Duas oportunidades de melhoria

1. **SRP — `modelo.js`:** o módulo reúne listagem, inserção de perguntas, respostas e contagem. Uma mudança na persistência de respostas pode afetar um arquivo que também cuida de perguntas. Separar serviços e repositórios por caso de uso facilita mudança e testes. Na busca implementada, `ServicoBusca` valida a entrada enquanto `RepositorioPerguntasSqlite` consulta o banco.
2. **DIP/OCP — `server.js` e `modelo.js`:** `server.js` importa diretamente `modelo.js`; `modelo.js` importa `bd_utils.js`. A nova operação de busca não deve exigir que regras de validação dependam de SQLite. A solução injeta um repositório no serviço e um critério de busca com método `consulta(termo)`, permitindo acrescentar outro critério sem alterar `ServicoBusca`.

Não há evidência suficiente para reivindicar LSP ou ISP completos no projeto original: não existem hierarquias de subclasses nem interfaces formais. A análise evita atribuir princípios apenas por analogia superficial.
