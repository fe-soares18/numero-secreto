function validValueCheck (guess) {
    const numGuess = +guess;

    if (invalidGuess(numGuess)) {
        guessElement.innerHTML += '<div>Valor inválido</div>';
    }

    if (outMaxLimit(numGuess)) {
        guessElement.innerHTML += `
        <div>Valor inválido: Diga um número entre ${minValue} e ${maxValue}</div>
        `
    }

    if (numGuess === secretNum) {
        document.body.innerHTML = `
            <h2>Você acertou, dale jogador!</h2>
            <h3>O número secreto é ${secretNum}</h3>

            <button id="retryGame" class="btn-retry">Jogar novamente</button>
        `
    } else if (numGuess > secretNum) {
        guessElement.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>
        `
    } else {
        guessElement.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>
        `
    }
};

function invalidGuess (numGuess) {
    return Number.isNaN(numGuess);
};

function outMaxLimit(numGuess) {
    return numGuess > maxValue || numGuess < minValue
};

document.body.addEventListener('click', e => {
    if (e.target.id == 'retryGame'){
        window.location.reload();
    }
});