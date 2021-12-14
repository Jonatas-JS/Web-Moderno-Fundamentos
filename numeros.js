const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //peso1 é um valor inteiro (verdadeiro=true)
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //arredondamento, visual mas o valor permanece o msm
console.log(media.toString(2)); //"transformado" em númeor binário
console.log(typeof media); // typeof => comando para ver o tipo
console.log(typeof Number);