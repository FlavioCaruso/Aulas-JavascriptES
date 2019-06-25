// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/destruturacao.js -o ./bundle.js -w",
*/
//Destruturação

const usuario = {
    nome: 'Flávio',
    idade: 30,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    },
};

//Utilizando conceito de desestruturação
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//Pegando os parâmetros direto do objeto dentro das chaves
function mostraNome({ nome, idade }){
    console.log(nome, idade)
};

mostraNome(usuario)