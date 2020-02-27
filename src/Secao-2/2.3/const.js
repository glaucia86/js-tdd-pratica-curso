/**
 * File: const.js
 * Date: 28/02/2020
 * Description:
 * Author: Glaucia Lemos
 */

const secretNumber = 28;

const pessoa = {
  nome: 'Glaucia',
  idade: 31, // saída: 31
};

// Caso queira tornar o 'const' como imutável devemos fazer da
// seguinte maneira:
Object.freeze(pessoa);

// Isso demonstra que o 'const' não é imutável
pessoa.idade = 53;
console.log(pessoa); // saída: 53
