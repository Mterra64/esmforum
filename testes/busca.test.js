const Database = require('better-sqlite3');
const { ServicoBusca } = require('../busca/servicoBusca');
const { RepositorioPerguntasSqlite } = require('../busca/repositorioSqlite');

let sqlite;
let busca;

beforeEach(() => {
  sqlite = new Database(':memory:');
  sqlite.exec('CREATE TABLE perguntas (id_pergunta INTEGER PRIMARY KEY, texto TEXT, id_usuario INTEGER); CREATE TABLE respostas (id_resposta INTEGER PRIMARY KEY, id_pergunta INTEGER, texto TEXT)');
  const inserir = sqlite.prepare('INSERT INTO perguntas VALUES (?, ?, 1)');
  inserir.run(1, 'Como usar JavaScript?');
  inserir.run(2, 'Dúvida sobre SQLite');
  inserir.run(3, 'JavaScript e 100% de testes');
  sqlite.prepare('INSERT INTO respostas VALUES (1, 1, ?)').run('Use a documentação');
  const bd = { queryAll: (sql, params) => sqlite.prepare(sql).all(params) };
  busca = new ServicoBusca(new RepositorioPerguntasSqlite(bd));
});

afterEach(() => sqlite.close());

test('busca palavra no texto e mantém quantidade de respostas', () => {
  const resultado = busca.buscar(' javascript ');
  expect(resultado.map(p => p.id_pergunta)).toEqual([1, 3]);
  expect(resultado[0].num_respostas).toBe(1);
  expect(resultado[1].num_respostas).toBe(0);
});

test('trata símbolos LIKE como caracteres literais', () => {
  expect(busca.buscar('100%').map(p => p.id_pergunta)).toEqual([3]);
  expect(busca.buscar('_')).toEqual([]);
});

test('não aceita palavra vazia ou excessiva', () => {
  expect(() => busca.buscar('   ')).toThrow(RangeError);
  expect(() => busca.buscar('a'.repeat(101))).toThrow(RangeError);
});

test('permite novo critério sem alterar o serviço', () => {
  const criterioPrefixo = { consulta: termo => ({ where: 'p.texto LIKE ?', params: [`${termo}%`] }) };
  const repo = new RepositorioPerguntasSqlite({ queryAll: (sql, params) => sqlite.prepare(sql).all(params) });
  expect(new ServicoBusca(repo, criterioPrefixo).buscar('Como').map(p => p.id_pergunta)).toEqual([1]);
});
