
const inputText = document.querySelector("#areatxt");    //areatxt
const confirmNewWord = document.querySelector("#confirm-new-word")  //confirmar        confirm-new-word
const saveButton = document.querySelector("#add-palabra");        //add-palabra
const cancelButton = document.querySelector("#jugar");       //cancelar

function add() {
    document.getElementById("play").style.display = 'none';
    document.getElementById("palabra").style.display = 'none';
    document.getElementById("areatxt").style.display = '';
    document.getElementById("add-palabra").style.display = '';
    document.getElementById("jugar").style.display = '';
    document.getElementById("warning").style.display = '';
}

function addNewWord() {

    newWordSection.style.display = "flex";
    confirmNewWord.innerHTML = ""                   //confirmacion y advertencia
    confirmNewWord.classList.remove("color-red")
    confirmNewWord.classList.remove("color-green")
    inputText.value = ""
    let tempInput = ""
    let expresion = /[A-Z]/i;

    inputText.addEventListener("input", (e) => {
        if (e.data == null) {
        }
        else if (expresion.test(e.data)) {
            tempInput = inputText.value
        } else {
            inputText.value = tempInput
        }
    })
}

saveButton.addEventListener("click", () => {
    confirmNewWord.textContent = ""
    confirmNewWord.classList.remove("color-red")
    confirmNewWord.classList.remove("color-green")
    setTimeout(() => {
        if (inputText.value != "") {
            if (inputText.value.length <= 14) {
                //words.push((inputText.value).toUpperCase());
                words.unshift((inputText.value).toUpperCase());
                confirmNewWord.textContent = `Agregaste correctamente la palabra: ${(inputText.value).toUpperCase()}`
                confirmNewWord.classList.remove("color-red")
                confirmNewWord.classList.add("color-green")
                inputText.value = "";
            } else {
                confirmNewWord.textContent = `La palabra supera los 14 caracteres permitidos`
                confirmNewWord.classList.add("color-red");
                confirmNewWord.classList.remove("color-green")
                inputText.value = "";
            }
        }
    }, 1);
})

