"use strict";

//Convertendo as Funções para arrow function
//3.1
var arr = [1, 2, 3, 4, 5]; // arr.map(function(item) {
//     return item + 10;
// });
//Arrow Function

var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr); //3.2

var usuario = {
  nome: 'Diego',
  idade: 23
}; // function mostraIdade(usuario) {
//  return usuario.idade;
// }
//Arrow Function

var mostraIdade = function mostraIdade() {
  return usuario.idade;
};

console.log(mostraIdade()); //3.3
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// console.log(mostraUsuario(nome, idade));
// mostraUsuario(nome);

var nome = 'Joao';
var idade = 10;

var mostraTudo = function mostraTudo() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Flavio";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraTudo(nome, idade));
console.log(mostraTudo(nome));
console.log(mostraTudo()); //3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
// };

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise());
