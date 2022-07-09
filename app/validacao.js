function verificaChute(chute) {
    const numero = +chute;   

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }

    if(NumeroPassouRange(numero)){
        elementoChute.innerHTML += `
        <div>
        Valor invalido: Fale um número entre ${menorValor} e ${maiorValor}
        </div>`;
        return;
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>0 número secreto era ${numeroSecreto}</h3>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
        O número secreto é menor <i class="fa-solid fa-angles-down"></i>
        </div>
        `;
        recognition.end();
    } else {
        elementoChute.innerHTML += `
        <div>
        O número secreto é maior <i class="fa-solid fa-angles-up"></i>
        </div>
        `;
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function NumeroPassouRange(numero){
    return numero > maiorValor || numero < menorValor;
}
