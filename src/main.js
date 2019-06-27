//Aulas e exercicios

import axios from 'axios';
/*
Exercicios do Webpack Server

import ClasseUsuario, { idade as IdadeUsuario } from './functions'

//Importando Default
ClasseUsuario.info();

//Importando uma Variavel
console.log(IdadeUsuario);
*/

//Aula de async/await
/*
const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(() => { resolve('OK')}, 2000)
});

async function executaPromise(){
    //Executa a proxima função apenas depois da primeira já ter sido executada
    //Await só pode ser executado dentro de uma função async
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
*/

//Usando Arrow Function
/*
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();
*/

//Aula de Axios
/*
class Api {
    static async getUserInfo(username){
        try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response)
    } catch ( err ){
        console.warn('Erro na API')
        }   
    }
}

Api.getUserInfo('FlavioCaruso');
*/

//Exercicios Async/await

// Ex1 - Transformar o seguinte texto de código utilizando Async/await
// Função delay aciona o .then após 1s
/*
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
        });
    })
 });
}

umPorSegundo();
*/

