// Calcule a média de diversas notas digitadas pelo usuário

const notas = [20, 25, 30, 40]

const mediaValores = notas.reduce((acumulador, valor) => {
  acumulador += valor
  media = acumulador / notas.length
  return media
})

console.log(notas, mediaValores)
