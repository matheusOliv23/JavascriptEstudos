document.addEventListener('click', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if (tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href')
    const response = await fetch(href)
    const html = await response.text()
    if (response.status !== 200) throw new Error('ERROR 404')
    carregaResultado(html)
  } catch (e) {
    console.log('Erro')
  }
}
function carregaResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}
