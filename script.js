var elementos = document.querySelectorAll(".player div > img")
var playerOpt = ""
var inimigoOpt = ""

var somaVitoria = 0
var somaDerrota = 0
var somaEmpate = 0

function atualizarContadores() {
  /*Fazer a atualização dos contadores que estão nas divs*/
  document.querySelector("#vitoria").textContent = somaVitoria
  document.querySelector("#empate").textContent = somaEmpate
  document.querySelector("#derrota").textContent = somaDerrota
}

function validarVitoria() {
  /*Condições para validar se é Vitória, Derrota ou Empate! */
  if (playerOpt == inimigoOpt) {
    somaEmpate++
  } else if (
    (playerOpt == "papel" && inimigoOpt == "pedra") ||
    (playerOpt == "tesoura" && inimigoOpt == "papel") ||
    (playerOpt == "pedra" && inimigoOpt == "tesoura")
  ) {
    somaVitoria++
  } else {
    somaDerrota++
  }
  atualizarContadores()
}

function resetInimigo() {
  /*Função para resetar a opacidade das imagens da máquina*/
  const enemyOptions = document.querySelectorAll(".enemy div > img")
  enemyOptions.forEach((option) => (option.style.opacity = 0.3))
}

function inimigoJogar() {
  /*Função para gerar a opção de jogada da máquina*/
  let rand = Math.floor(Math.random() * 3)

  const enemyOptions = document.querySelectorAll(".enemy div > img")
  resetInimigo()
  enemyOptions[rand].style.opacity = 1
  inimigoOpt = enemyOptions[rand].getAttribute("opt")

  validarVitoria()
}

function resetOpacityPlayer() {
  /*Função para resetar a opacidade das imagens do player*/
  elementos.forEach((element) => (element.style.opacity = 0.3))
}

/*opção para pegar o clique feito pelo player em uma imagem*/
elementos.forEach((element) => {
  element.addEventListener("click", function (t) {
    resetOpacityPlayer()
    t.target.style.opacity = 1
    playerOpt = t.target.getAttribute("opt")

    inimigoJogar()
  })
})

/*Botão para reiniciar a contagem*/
document.querySelector("button").addEventListener("click", () => {
  alert("Reiniciado o Jogo")
  somaVitoria = 0
  somaEmpate = 0
  somaDerrota = 0

  atualizarContadores()

  resetInimigo()
  resetOpacityPlayer()
})
