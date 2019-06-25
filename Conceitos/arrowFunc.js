// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/arrowFunc.js -o ./bundle.js -w",
*/

// Arrow Functions

const arr = [1, 3, 4, 9, 12];

// Função normal
// const newArr = arr.map(function(item){
//     return  item * 2;
// });

//Arrow Function
const newArr = arr.map(item => item * 2);

console.log(newArr)

const teste = () => "teste";

//Não funciona direto com o objeto, nesse caso precisa utilizar o return ou utilizar parenteses em volta

//Errado
//const teste2 = () => { nome: 'Flavio' };

//Com parenteses
const teste2 = () => ({ nome: 'Flavio' });

//Com return
// const teste2 = () => {
//     return { nome: 'Flávio' }
// };


console.log(teste());
console.log(teste2());