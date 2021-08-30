//Reduce
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 9, 10, 20, 32]

const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor // soma todos os valores dentro do array
  return acumulador
})

console.log(total)
