const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

alteraValor('#menor-valor', menorValor);
alteraValor('#maior-valor', maiorValor);

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

function alteraValor(id, valor){
    document.querySelector(id).innerHTML = valor;
}

console.log('Numero secreto: ',numeroSecreto);


