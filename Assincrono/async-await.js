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

async function executa() {
  //executa até achar um erro
  try {
    const fase1 = await servidor('Fase1', rand())
    console.log(fase1)
    const fase2 = await servidor('Fase2', rand())
    console.log(fase2)
    const fase3 = await servidor('Fase3', rand())
    console.log(fase3)
    console.log('Terminamos na fase', fase3)
  } catch (e) {
    console.log(e)
  }
}

executa()
