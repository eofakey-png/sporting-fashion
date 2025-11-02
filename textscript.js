const frases = [
  " na medida",
  " na moda",
  " na hora certa",
  " na vibe certa",
  " na sua cara",
  " na elegância"
];

const elemento = document.getElementById("texto");
const speed = 100; // velocidade de digitar/apagar
const pause = 1000; // pausa no fim da frase

// função de esperar
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function escreverFrase(frase) {
  for (let i = 0; i <= frase.length; i++) {
    elemento.textContent = frase.slice(0, i);
    await sleep(speed);
  }
  await sleep(pause);
}

async function apagarFrase() {
  const textoAtual = elemento.textContent;
  for (let i = textoAtual.length; i >= 0; i--) {
    elemento.textContent = textoAtual.slice(0, i);
    await sleep(speed);
  }
}

async function loopFrases() {
  let index = 0;
  while (true) {
    await escreverFrase(frases[index]);
    await apagarFrase();
    index = (index + 1) % frases.length;
  }
}

// iniciar o loop
loopFrases();