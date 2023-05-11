const guessElement = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    guess = e.results[0][0].transcript;
    guessDisplay(guess);
    validValueCheck(guess);
}

function guessDisplay (guess) {
    guessElement.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());