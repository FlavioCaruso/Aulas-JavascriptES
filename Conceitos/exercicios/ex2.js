const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 27, empresa: 'Facebook' },
    { nome: 'Flávio', idade: 30, empresa: 'Google' },
];

// Retorna apenas a idade dos usuários
// Cria a variavel com todas as idades dos usuarios
const verificaIdade = usuarios.map(function({idade}){
    return idade;
});

console.log(verificaIdade)

//Apenas usuários que trabalham na Rockeseat maiores de 18 anos
const trabalham = usuarios.filter(function({idade, empresa}){
    if(idade >= 18 && empresa === 'Rocketseat'){
        return usuarios;
    }
});

console.log(trabalham)

//Procura por usuários que trabalham na empresa Google
const google = usuarios.find(function({empresa}){
    if(empresa === 'Google'){
        return usuarios;
    }
});

console.log(google)

//Multiplica a idade por 2 e realiza um filtro em quem possuí mais de 50 anos
const newIdade = usuarios.map( usuario => ({
    ...usuario,
    idade: usuario.idade * 2
}))
.filter(usuario => usuario.idade >= 50);
console.log(newIdade)