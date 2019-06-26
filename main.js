//importando uma função dentro de outro arquivo
import soma, { sub } from './funcoes';
console.log(soma(4, 2));
console.log(sub(4, 2));

//importa todas as funções 
import * as funcoes from './funcoes';
console.log(funcoes.sub(30,20))

//importando uma função dentro de outro arquivo alterando o nome
//import { soma as somaFunction } from './funcoes';

//utilizando o export default, pode mudar o nome do import para usa-lo
import somaFunction from './soma';
console.log(somaFunction(1, 2));

