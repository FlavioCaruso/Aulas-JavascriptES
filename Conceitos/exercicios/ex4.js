//Desestruturação

//4.1 - Desestruturação Simples
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};
   
const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2 - Desestruturação em Parâmetros
function mostraInfo(usuario) {
    const{nome, idade} = usuario;
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Flavio', idade: 30 }));
