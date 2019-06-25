// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/objectShortSyntax.js -o ./bundle.js -w",
*/
// Object Short Syntax

const nome = 'Flávio';

const idade = 30;

const usuario = {
    nome,
    idade,
    empresa: 'Minha casa',
};

console.log(usuario)