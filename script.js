let numeroAleatorio = parseInt(Math.random() * 11);
let tentativas = 0;

function Chutar() {
    const chute = parseInt(document.getElementById("valor").value);
    const elementoResultado = document.getElementById("resultado");
    const elementoTentativas = document.getElementById("tentativas");

    if (chute == numeroAleatorio) {
        elementoResultado.innerHTML = "você acertou!"
        
        console.log(tentativas)
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = `Você deve escolher um número entre 0 e 10. \n tentativa: ${tentativas}`
        tentativas++
        
    } else {
        elementoResultado.innerHTML = `você errou! \n tentativa: ${tentativas}`
        tentativas++
        
    }
    if (tentativas > 3) {
        elementoTentativas.innerHTML = `Você gastou suas tentativas, a resposta certa é: ${numeroAleatorio}`
    }

}


