let bola = document.getElementById("bola");
let seta = document.getElementById("seta");
bola.style.position = "absolute";
seta.style.position = "absolute";

let borderLimits = {
  altura: window.innerHeight,
  largura: window.innerWidth,
};

function atualizarBorderLimits() {
  borderLimits.altura = window.innerHeight;
  borderLimits.largura = window.innerWidth;
}

function atualizarLimites() {
  atualizarBorderLimits();
  atualizarBola();
  atualizarSeta();
}

window.addEventListener("resize", atualizarLimites);

function atualizarBola() {
  bola.style.top = borderLimits.altura - 100 + "px";
  bola.style.left = borderLimits.largura / 2 - 50 + "px";
}
function atualizarSeta() {
  seta.style.top = borderLimits.altura - 250 + "px";
  seta.style.left = borderLimits.largura / 2 - 50 + "px";
}

let angulo = 0;
let velocidade = -1;

function girarSeta() {
  seta.style.transform = `rotate(${angulo}deg)`;

  angulo += velocidade;

  if (angulo == -90) {
    velocidade = -velocidade;
  }
  if (angulo == +90) {
    velocidade = -velocidade;
  }
}

setInterval(girarSeta, 10);

atualizarBola();
atualizarSeta();
