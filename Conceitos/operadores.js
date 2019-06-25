// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/operadores.js -o ./bundle.js -w",
*/
//Operadores rest/spread

//REST

const usuario = {
    nome: 'Flávio',
    idade: 30,
    empresa: 'Minha Casa'
};

// Funciona em Objeto
const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

//Funciona em Array
const arr = [ 1, 2, 3, 4, 5, 6];

const [a, b, ...c] = arr

console.log(a);
console.log(b);
console.log(c);

// Funciona em parâmetros de funções

function soma(x, y, ...params){
    return params;
}

console.log(soma(1 , 3, 6, 8));

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2 ];

console.log(arr3)

const usuario1 = {
    nome: 'Flávio',
    idade: 30,
    empresa: 'Minha Casa'
};

//utiliza as propriedades do primeiro usuario e altera o que foi passado
const usuario2 = { ...usuario1, nome: 'Gabriel'}

console.log(usuario2)