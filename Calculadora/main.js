// factory functions
function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes() //sempre que precisar referenciar uma chave do objeto, precisa usar o this
      this.pressionaEnter()
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta()
        }
      })
    },

    realizaConta() {
      let conta = this.display.value

      try {
        conta = eval(conta)
        if (!conta) {
          alert('Conta invalida')
          return
        }

        this.display.value = String(conta)
      } catch (e) {
        alert('conta inválida')
        return
      }
    },

    clearDisplay() {
      this.display.value = ''
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    cliqueBotoes() {
      // this -- calculadora
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm()
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta()
        }
      }) // bind => ao inves de usar o this padrão 'document' volta a usar o this calculadora
    },
    btnParaDisplay(valor) {
      this.display.value += valor
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
