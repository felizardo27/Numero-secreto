const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', (e) => {
    const chute = e.results[0][0].transcript;
    exibeChute(chute);
    verificaChute(chute);
});

function exibeChute(chute) {

    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}


recognition.addEventListener('end', () => recognition.start());