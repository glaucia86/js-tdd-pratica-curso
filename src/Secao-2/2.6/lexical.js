/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/**
 * File: lexical.js
 * Date: 28/02/2020
 * Description:
 * Author: Glaucia Lemos
 */

const sandwich = {
  tipoPao: 'italiano',
  tipoQueijo: 'cheddar',

  solicitarSandwich: function () {
    return `Eu quero um sandwich com pão ${this.tipoPao} e queijo ${this.tipoQueijo}`;
  },

  // eslint-disable-next-line object-shorthand
  prepararSandwich: function () {
    window.setTimeout(() => {
      console.log(this.solicitarSandwich());
    }, 500);
  },
};

// eslint-disable-next-line no-undef
const btn = document.getElementById('btn');

// eslint-disable-next-line func-names
// eslint-disable-next-line prefer-arrow-callback
btn.addEventListener('click', function () {
  sandwich.prepararSandwich();
});
