/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/**
 * File: arrow.js
 * Date: 28/02/2020
 * Description:
 * Author: Glaucia Lemos
 */

const estados = ['Rio de Janeiro', 'São Paulo', 'Minas Gerais'];

const melhoresCidades = estados.map(function (nome) {
  return `Amamos ${nome}`;
});

console.log(melhoresCidades);

// Com Arrow Function
const cidades = ['Rio de Janeiro', 'São Paulo', 'Belo Horizonte'];

const melhoresCidades2 = cidades.map(nome => `Amamos ${nome}`);

console.log(melhoresCidades2);

// Uso do Arrow Function Encadeado com 'filter' e 'map':
const encadeado = cidades
  .filter(nome => nome === 'São Paulo')
  .map(nome => `Amamos ${nome}`);

console.log(encadeado);
