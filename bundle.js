"use strict";

// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"

/*
    "conceitos": "babel ./conceitos/objectShortSyntax.js -o ./bundle.js -w",
*/
// Object Short Syntax
var nome = 'Flávio';
var idade = 30;
var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Minha casa'
};
console.log(usuario);
