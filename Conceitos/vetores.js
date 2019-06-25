// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/vetores.js -o ./bundle.js -w",
*/
//Vetores, percorrer, manipulação

const arr = [1, 3, 4, 5, 7, 9];

// soma o número do item com o número do index do número
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

//faz a soma dos números dentro do array
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

//Filtra apenas os números pares
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//Procura pelo item específico dentro do array
const find = arr.find(function(item){
    return item === 2;
})

console.log(find)