function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function servidor(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Erro')
      return
    }

    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

const promises = [
  servidor('Promise 1', 3000),
  servidor('Promise 2', 500),
  servidor('Promise 3', 1000)
]

Promise.all(promises)
  .then(valor => {
    console.log(valor)
  })
  .catch(erro => {
    console.log(erro)
  })

Promise.race(promises)
  .then(valor => {
    console.log(valor)
  })
  .catch(erro => {
    console.log(erro)
  })

function baixaPag() {
  const emCache = true

  if (emCache) {
    return Promise.resolve('Pagina em cache')
  } else {
    return servidor('Página baixada', 3000)
  }
}

baixaPag()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log(e))
