var novoSet = new Set();

novoSet.add('backend');
novoSet.add('frontend');
novoSet.add('mobile');

var resultado = novoSet;
console.log(resultado);

// O map, baseado no id, vai sempre sobrescrever o último item e evitar a duplicata
// O set, para um valor simples, evita ter múltiplas cópias
