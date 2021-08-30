// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function rand(min = 500, max = 1000) {
  const num = Math.random() * max - min + min
  return Math.floor(num)
}

function Primeiro(callback) {
  setTimeout(function () {
    console.log('Primeiro')
    if (callback) callback()
  }, rand())
}

function Segundo(callback) {
  setTimeout(function () {
    console.log('Segundo')
    if (callback) callback()
  }, rand())
}

function Terceiro(callback) {
  setTimeout(function () {
    console.log('Terceiro')
    if (callback) callback()
  }, rand())
}

Primeiro(primeiroCallback)

function primeiroCallback() {
  Segundo(segundoCallback)
}

function segundoCallback() {
  Terceiro(terceiroCallback)
}

function terceiroCallback() {
  console.log('Bom dia !!')
}
