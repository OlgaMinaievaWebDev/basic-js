const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let modify = str.split('');
  let count = 1;
  let result = '';
  for (let i = 0; i < modify.length; i++) {
    if (modify[i] === modify[i + 1]) {
      count++;
    } else {
      result += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
