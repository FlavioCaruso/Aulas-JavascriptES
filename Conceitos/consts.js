// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/consts.js -o ./bundle.js -w",
*/

// Consts e LET


//const não pode reatribuir um valor a uma variavel, apenas "mutar"
const usuario = {nome: "Flavio"};

usuario.nome = "Joao";

console.log(usuario)

//let cria a variavel apenas para o escopo da função, não podendo utilizar fora da função
function teste(x){
    let y = 2;

    if(x > 5){

        let y = 34;
        console.log(x, y);
    }
}

teste(10)

//Não vai aparecer nada pois a variavel y esta apenas no escopo da função
console.log(y)

