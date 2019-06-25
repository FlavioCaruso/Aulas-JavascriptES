//REST E SPREAD


//REST

//5.1
const arr = [ 1, 2, 3, 4, 5, 6];
//x recebe a primeira posição do vetor e y recebe o restante
const [x, ...y] = arr;

console.log(x)
console.log(y)

//cria uma função com inumeros parametros e soma todos eles
const soma = (...params) => params.reduce((total, next) => total + next)

console.log(soma(1, 2, 3, 4, 5, 6)); 
console.log(soma(1, 2));

//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome:'Gabriel'};

console.log(usuario2)

const usuario3 = {...usuario, ...usuario.endereco,cidade:'Lontras'}
console.log(usuario3)

