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