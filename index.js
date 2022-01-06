const commonPathPrefix = require('common-path-prefix');

const reverse = str => str.split('').reverse().join('');

module.exports = (paths, sep) => reverse(commonPathPrefix(paths.map(reverse), sep));
