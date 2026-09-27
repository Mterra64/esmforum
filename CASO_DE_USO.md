# Caso de uso: buscar perguntas por palavra-chave

**Atores:** visitante do fórum; sistema ESM Forum.

**Pré-condições:** frontend e backend em execução; banco SQLite acessível. Não é necessário login.

**Fluxo principal**

1. O sistema mostra a lista de perguntas e o campo de busca.
2. O visitante digita uma palavra-chave de até 100 caracteres e seleciona **Buscar**.
3. O frontend remove espaços nas pontas e envia `GET /?q=palavra` com codificação de URL.
4. A API valida que há texto não vazio e delega a consulta ao serviço de busca.
5. O repositório consulta o SQLite com parâmetro SQL e recupera os resultados com o número de respostas.
6. A API devolve JSON com a lista, e a interface a apresenta.
7. O visitante pode abrir as respostas de uma pergunta encontrada.

**Fluxo alternativo A — nenhum resultado:** no passo 5, a consulta devolve lista vazia; no passo 6, a interface mostra “Nenhuma pergunta encontrada.”

**Fluxo alternativo B — expressão vazia:** no passo 3, se o visitante clicar em Buscar com o campo vazio, a interface restaura a lista completa. Se um cliente chamar a API com `q` vazio ou só espaços, o passo 4 devolve HTTP 400 com mensagem de validação.

**Fluxo alternativo C — falha de comunicação:** no passo 5 ou 6, se a API estiver indisponível, a interface preserva a lista atual e exibe um aviso de carregamento.

**Pós-condições:** nenhuma pergunta é alterada. A interface apresenta os resultados ou o estado vazio; a busca pode ser limpa para retornar à lista geral.
