function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function servidor(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

servidor('Conexão com BG', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return servidor('Buscando dados da Base', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return servidor('Tratando os dados da base', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Exibe os dados na tela')
  })
  .catch()
