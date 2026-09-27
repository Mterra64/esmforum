// Estratégia de busca: novos critérios podem implementar consulta(termo).
class CriterioTexto {
  consulta(termo) {
    const literal = termo.replace(/[\\%_]/g, '\\$&');
    return {
      where: "p.texto LIKE ? ESCAPE '\\' COLLATE NOCASE",
      params: [`%${literal}%`]
    };
  }
}

module.exports = { CriterioTexto };
