'use strict'; //esse comando permite que avise quando há algum erro ou mal prática

//JSON que contém todos os aúdios
const sons = {
    'A': 'boom.wav.wav',
    'S': 'clap.wav.wav',
    'D': 'hihat.wav.wav',
    'F': 'kick.wav.wav',
    'G': 'openhat.wav.wav',
    'H': 'ride.wav.wav',
    'J': 'snare.wav.wav',
    'K': 'tink.wav.wav',
    'L': 'tom.wav.wav'
}


//vamos carregar os itens de forma dinâmica
//função que cria DIV´S
const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.id = texto;
    div.textContent = texto;
    document.getElementById('container').appendChild(div);
}

// aqui carregamos as keys'LETRAS DO JSON' de forma dinâmica na página HTML
const exibir = (sons) => {
    Object.keys(sons).forEach(criarDiv);
}

//atribuimos a cada toque na letra um som.
const tocarSom = (letra) => {
    const audio = new Audio (`./sounds/${sons[letra]}`);
    audio.play();
}

const ativaEfeito = (letra) => {
    document.getElementById(letra).classList.add('active')
}

const removeEfeito = (letra) => {
    document.getElementById(letra).classList.remove('active');
}


//função que captura o click
const somOn = (evento) =>{
    const letra = evento.target.id //com o target.id capturamos o id que clicamos
    const letraPermitida = sons.hasOwnProperty(letra); // validação para que haja um evento só quando uma letra seja criada e quando houver o click no container não exibir erro
    
    if (letraPermitida) {
        ativaEfeito(letra);
        tocarSom(letra); //se letra permitida for igual a verdadeiro executará o som
        removeEfeito(letra);
    }
}

exibir(sons);
document.getElementById('container').addEventListener('click', somOn)