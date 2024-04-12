function eleccionPC(min, max) {
    let numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero;
}

let piedra = 0;
let papel = 1;
let tijera = 2;

let opciones = ["Piedra", "Papel", "Tijera"];

let jugadorHumano;
let jugadorPC = eleccionPC(0, 2);
let contador;

contador = prompt("Cuantas rondas deseas jugar? (Máx 4)")
jugadorHumano = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

for (num = 0; num < contador; num++) {
    if (jugadorHumano== piedra) {
        if (jugadorPC == piedra) {
            alert("Empate! Vamos de nuevo");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
        else if (jugadorPC == papel) {
            alert("Perdiste :( ");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
        else if (jugadorPC == tijera) {
            alert("Ganaste!");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
    }
    else if (jugadorHumano == papel) {
        if (jugadorPC == piedra) {
            alert("Ganaste!");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
        else if (jugadorPC == papel) {
            alert("Empate!");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
        else if (jugadorPC == tijera) {
            alert("Perdiste!");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
    }
    else if (jugadorHumano == tijera) {
        if (jugadorPC == piedra) {
            alert("Perdiste!");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
        else if (jugadorPC == papel) {
            alert("Ganaste!");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
        else if (jugadorPC == tijera) {
            alert("Empate!");
            prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
        }
    }
    else {
        alert("¿Juego finalizado");
    }
}