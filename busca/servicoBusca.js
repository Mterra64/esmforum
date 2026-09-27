const { CriterioTexto } = require('./criterioTexto');

class ServicoBusca {
  // Repositório e critério são contratos injetados; o serviço não conhece SQLite.
  constructor(repositorio, criterio = new CriterioTexto()) {
    this.repositorio = repositorio;
    this.criterio = criterio;
  }

  buscar(termo) {
    if (typeof termo !== 'string') {
      throw new TypeError('A palavra-chave deve ser um texto.');
    }
    const palavra = termo.trim();
    if (!palavra || palavra.length > 100) {
      throw new RangeError('Informe uma palavra-chave de 1 a 100 caracteres.');
    }
    return this.repositorio.buscar(this.criterio, palavra);
  }
}

module.exports = { ServicoBusca };
