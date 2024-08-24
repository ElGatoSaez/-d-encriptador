let diccionario = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
    "E": "ENTER",
    "I": "IMES",
    "A": "AI",
    "O": "OBER",
    "U": "UFAT"
};

let reversedDiccionario = Object.fromEntries(
    Object.entries(diccionario).map(([key, value]) => [value, key])
);

function encriptar(texto) {
    let textoEncriptado = "";
    for (let letra of texto) {
        if (diccionario[letra]) {
            textoEncriptado += diccionario[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto;
    for (let [encrypted, original] of Object.entries(reversedDiccionario)) {
        textoDesencriptado = textoDesencriptado.split(encrypted).join(original);
    }
    return textoDesencriptado;
}

document.getElementById('encriptar').addEventListener('click', function() {
    const textoAEncriptar = document.getElementById('textoaencriptar').value;
    const textoEncriptado = encriptar(textoAEncriptar);
    document.getElementById('textoencriptado').value = textoEncriptado;
});

document.getElementById('desencriptar').addEventListener('click', function() {
    const textoADesencriptar = document.getElementById('textoencriptado').value;
    const textoDesencriptado = desencriptar(textoADesencriptar);
    document.getElementById('textoaencriptar').value = textoDesencriptado;
});