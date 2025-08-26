const seal = document.getElementById('seal');
const letter = document.getElementById('letter');
const flowers = document.querySelectorAll('.flower');
const music = document.getElementById('bg-music');
const message = document.getElementById('message');

let secondOpen = false; // indica si ya se cerró una vez

const frasesSet1 = [
  "Cada momento contigo es un regalo que atesoro.",
  "Tus sonrisas iluminan incluso mis días más oscuros.",
  "Eres mi refugio, mi alegría y mi inspiración.",
  "No existe lugar en el que prefiera estar que a tu lado.",
  "Tus abrazos son mi hogar favorito en el mundo.",
  "Te amo más de lo que las palabras pueden explicar."
];

const frasesSet2 = [
  "Gracias por ser mi mejor aventura.",
  "Tus ojos son mi universo favorito.",
  "Me haces creer en la magia del amor.",
  "Eres la calma en medio de mis tormentas.",
  "Siempre serás mi persona favorita.",
  "Mi futuro tiene sentido porque estás en él."
];

// por defecto se usan las frases del primer set
let frases = frasesSet1;

seal.addEventListener('click', () => {
  if (letter.classList.contains('open')) {
    // Si ya está abierta → cerrar
    letter.classList.remove('open');
    flowers.forEach(f => f.style.display = 'block');
    message.textContent = "Vuelve a abrirme 💌"; // Mensaje especial
    seal.classList.remove('open-heart');
    secondOpen = true; // marca que ya se cerró una vez
    // música sigue sonando
  } else {
    // Si está cerrada → abrir
    letter.classList.add('open');
    flowers.forEach(f => f.style.display = 'none');
    seal.classList.add('open-heart');

    // si ya se cerró una vez, usar frasesSet2
    if (secondOpen) {
      frases = frasesSet2;
      message.textContent = "Eres aún más especial cada vez que te leo 💖";
    } else {
      frases = frasesSet1;
    }

    // iniciar música solo si está en pausa
    if (music.paused) {
      music.play().catch(() => {
        console.log("El navegador bloqueó la reproducción automática.");
      });
    }
  }
});

function changeMessage(index) {
  message.textContent = frases[index];
}
