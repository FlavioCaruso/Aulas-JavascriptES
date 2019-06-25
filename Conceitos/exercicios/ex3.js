//Convertendo as Funções para arrow function

//3.1
const arr = [1, 2, 3, 4, 5];

// arr.map(function(item) {
//     return item + 10;
// });

//Arrow Function
const newArr = arr.map(item => item + 10);
console.log(newArr)

//3.2
const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }

//Arrow Function
const mostraIdade = () => {
    return usuario.idade
}
console.log(mostraIdade());

//3.3
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// console.log(mostraUsuario(nome, idade));
// mostraUsuario(nome);

const nome = 'Joao';
const idade = 10;
const mostraTudo = (nome = "Flavio", idade = 30) => ({
    nome, idade
})
console.log(mostraTudo(nome,idade))
console.log(mostraTudo(nome))
console.log(mostraTudo())

//3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//     return resolve();
//     })
// };

const promise = () => new Promise((resolve, reject) => resolve());
console.log(promise());