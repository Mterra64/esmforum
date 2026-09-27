const bdPadrao = require('../bd/bd_utils');

class RepositorioPerguntasSqlite {
  constructor(bd = bdPadrao) {
    this.bd = bd;
  }

  buscar(criterio, termo) {
    const { where, params } = criterio.consulta(termo);
    return this.bd.queryAll(
      `SELECT p.id_pergunta, p.texto, p.id_usuario,
              (SELECT COUNT(*) FROM respostas r WHERE r.id_pergunta = p.id_pergunta) AS num_respostas
         FROM perguntas p WHERE ${where} ORDER BY p.id_pergunta`,
      params
    );
  }
}

module.exports = { RepositorioPerguntasSqlite };
