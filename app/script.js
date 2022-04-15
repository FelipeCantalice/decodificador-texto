const CRIPT_WORDS = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

function criptografar(texto = new String()) {
    let texto_criptografado = new String();

    for (let palavra of texto) {
        if (CRIPT_WORDS[palavra] != null) {
            texto_criptografado += CRIPT_WORDS[palavra];
        } else {
            texto_criptografado += palavra;
        }
    }
    return texto_criptografado;
}

const teste = 'gato'
console.log(criptografar(teste))



const button_cript = document.querySelector('#btn-codificar');

button_cript.addEventListener('click', function () {
    const texto = document.querySelector('#texto').value;
    const texto_criptografado = criptografar(texto);
    document.querySelector('.info-section').classList.remove('empty');
    document.querySelector('.empty-message').classList.add('hide');
    document.querySelector('#info-text').innerHTML = texto_criptografado;
});

const button_clean = document.querySelector('#btn-limpar');

button_clean.addEventListener('click', function () {
    document.querySelector('#texto').value = '';
    document.querySelector('.info-section').classList.add('empty');
    document.querySelector('.empty-message').classList.remove('hide');
    document.querySelector('#info-text').innerHTML = 'Digite um texto que você deseja criptografar ou descriptografar.';
});