// TDD - Test Driven Development
var novoMapa = new Map();

class HistoryMap {

}

// 11/11/2011 às 11 da noite
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título do site', url: '' });
novoMapa.set('11/11/2011 - 23:31 - URL', {});

var resultado = novoMapa.get('11/11/2011 - 23:30 - URL');
console.log(resultado);
