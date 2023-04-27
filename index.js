'use strict'; //esse comando permite que avise quando há algum erro ou mal prática

//JSON que contém todos os aúdios
const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
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



//função que captura o click
const somOn = (click) =>{
    const letra = click.target.id //com o target.id capturamos o id que clicamos
}

exibir(sons);
document.getElementById('container').addEventListener('click', somOn)