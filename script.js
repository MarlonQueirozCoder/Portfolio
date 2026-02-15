const foto = document.querySelector(".foto-perfil");



function enviarWhats (event){

    event.preventDefault()

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5511986262642';

const texto = `Olá! Me chamo ${nome}, ${mensagem}`

const msgFormatada = encodeURIComponent(texto)


const url = `https://wa.me/${telefone}?text=${msgFormatada}`

console.log(url)

window.open(url, '_blank')
}

// desativa animação CSS para evitar conflito
foto.style.animation = "none";

let angulo = 0;
let tempo = 0;
let animando = true;
let frameId = null;

function animar() {
  if (!animando) return;

  angulo += 2;
  tempo += 0.06;

  const sobeDesce = Math.sin(tempo) * 20;

  foto.style.transform = `
    rotateY(${angulo}deg)
    translateY(${sobeDesce}px)
  `;

  frameId = requestAnimationFrame(animar);
}

// inicia girando
animar();

// clique alterna: parar / continuar
foto.addEventListener("click", () => {
  animando = !animando;

  if (animando) {
    animar(); // volta a animar
  } else {
    cancelAnimationFrame(frameId); // para
  }
});


