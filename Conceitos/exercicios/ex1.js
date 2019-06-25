//Cria a Classe Usuario utilizando o método Constructor
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    // adiciona a função isAdmin utilizando operador condicional(ternário), se admin for verdadeiro, terá o primeiro valor (true), caso contrário terá o segundo valor(false)
    isAdmin(){
        return this.admin ? true : false;
    }
}

//Classe Admin que extende a Classe Usuario
class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        //A classe possui admin
        this.admin = true;
    }
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true