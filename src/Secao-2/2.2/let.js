// @ts-nocheck
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable no-var */
/**
 * File: let.js
 * Date: 28/02/2020
 * Description:
 * Author: Glaucia Lemos
 */

var animal = 'cat';

console.log(animal);

{
  let animal = 'dog';
  console.log(animal);
}

console.log(animal);
