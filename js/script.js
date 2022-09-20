const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll(".figure-part");

var words = ["JAVASCRIPT", "ALGORITMO", "VARIABLE", "CONSTANTE", "COMPILADOR", "DECLARACION", "FUNCION",
    "APLICACION", "ARGUMENTO", "ARRAY", "LISTA", "OBJETO", "BIBLIOTECA", "CLASE", "CONTENEDOR", "DEFINICION",
    "DEPURADOR", "DIAGRAMA", "EXCEPCION", "EXPRESION", "DISEÑO", "HERENCIA", "IDENTIFICADOR", "INTERFAZ",
    "INTERPRETE", "JERARQUIA", "VALOR", "METODO", "INSTANCIA", "DATO", "PROGRAMACION", "DESARROLLO", "OPERADORES",
    "PARAMETRO", "PATRON", "PROGRAMA", "SISTEMA", "LENGUAJE", "SEMANTICA", "SENTENCIA", "ETIQUETA", "HTML", "CSS",
    "JAVASCRIPT", "ALURA", "PYTHON", "JAVA", "VARIABLE", "CONSTANTE"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
const correctLetters = [];
const wrongLetters = [];

function displayWord() {
    wordE1.innerHTML = `${selectedWord.split('').map(letter => `<span class="letter">
    ${correctLetters.includes(letter) ? letter : ''}</span>`).join('')}`;
    const innerWord = wordE1.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Felicidaes! Ganaste! 😃';
        popup.style.display = 'flex';
    }
}

function updateWrongLetterE1() {
    wrongLettersE1.innerHTML = `${wrongLetters.map(letter => `<span>${letter}</span>`)}`;
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        }
        else {
            part.style.display = 'none';
        }
    });

    //Check if lost
    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Perdiste la palabra era: ' + selectedWord + ' 😕';
        popup.style.display = 'flex';
        part.style.display = 'block';
    }
}

function showNotification() {
    document.getElementById("notification-container").style.display = '';
    notification.classList.add('show');
    setTimeout(() => { notification.classList.remove('show'); }, 2000);
}

window.addEventListener('keypress', e => {

    if (e.keyCode >= 65 && e.keyCode <= 90) {

        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetterE1();
            } else {
                showNotification();
            }
        }
    } else if (e.keyCode >= 97 && e.keyCode <= 122) {
        alert("No se permiten minúsculas, intentalo otra vez");

    } else if (e.keyCode >= 49 && e.keyCode <= 57) {
        alert("No se permiten números, intentalo otra vez");
    } else {
        alert("No se permiten caracteres especiales, intentalo otra vez");
    }

});

playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayWord();
    updateWrongLetterE1();
    popup.style.display = 'none';
});

displayWord();