// retorne a soma do dobro de todos os pares
// Filtrar os pares
// Dobrar os valores
// Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 9, 10, 20, 32]
const numerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor)

console.log(numerosPares)
