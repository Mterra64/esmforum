# Instalação e execução — ESM Forum

## Repositórios

- Backend: https://github.com/Mterra64/esmforum
- Frontend: https://github.com/Mterra64/esmforum-react

Ambiente verificado em Node.js 22.23.2 e npm 10.9.8. São necessários Node.js, npm e Git. O pacote `better-sqlite3` já fornece o acesso ao SQLite; o executável `sqlite3` só é necessário para recriar o banco pelo script legado `bd/criar_bd.sh`.

## Backend

```bash
git clone https://github.com/Mterra64/esmforum.git
cd esmforum
npm ci
npm test -- --runInBand
node server.js
```

API em `http://localhost:5000`. `GET /` lista todas as perguntas; `GET /?q=javascript` busca por palavra-chave. O banco de demonstração `bd/esmforum.db` já está no repositório. Mantenha o terminal do backend aberto.

## Frontend

Em outro terminal:

```bash
git clone https://github.com/Mterra64/esmforum-react.git
cd esmforum-react
npm ci
npm start
```

Abra `http://localhost:3000`. A tela principal permite consultar, criar perguntas e buscar. A busca é literal, ignora maiúsculas/minúsculas para caracteres ASCII, aceita de 1 a 100 caracteres e mostra a contagem de respostas. Use **Limpar** para voltar à lista completa.

## Verificação rápida

```bash
curl 'http://localhost:5000/?q=javascript'
curl 'http://localhost:5000/?q=%20%20' # deve retornar HTTP 400
```

As portas 5000 e 3000 devem estar livres. Se a interface mostrar erro de carregamento, confirme que o backend está rodando. Nenhum serviço externo ou credencial é necessário.
