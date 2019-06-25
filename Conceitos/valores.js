// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/valores.js -o ./bundle.js -w",
*/
//Valores padrão

//Definindo valores padrão para funções
function soma(a = 10, b = 7){
    return a + b;
}

//Utilizando arrow function
const somaArrow = (a = 10, b = 7) => a + b;

//Passando apenas um valor
console.log(soma(1));

// Não definindo nenhum valor
console.log(soma());
console.log(somaArrow());