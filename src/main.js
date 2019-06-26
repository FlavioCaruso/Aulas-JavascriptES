/*
Exercicios do Webpack Server

import ClasseUsuario, { idade as IdadeUsuario } from './functions'

//Importando Default
ClasseUsuario.info();

//Importando uma Variavel
console.log(IdadeUsuario);
*/
const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(() => { resolve('OK')}, 2000)
});

// async function executaPromise(){
//     Executa a proxima função apenas depois da primeira já ter sido executada
//     Await só pode ser executado dentro de uma função async
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

//Usando Arrow Function
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();