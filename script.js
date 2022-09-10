let numeroAleatorio = parseInt(Math.random() * 11);

function Chutar() {
    const chute = parseInt(document.getElementById("valor").value);
    const elementoResultado = document.getElementById("resultado");

    if (chute == numeroAleatorio) {
        elementoResultado.innerHTML = "Você acerto!"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve escolher um número entre 0 e 10."
    } else {
        elementoResultado.innerHTML = "Você errou!"
    }
}