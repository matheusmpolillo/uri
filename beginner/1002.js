const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = 3.14159;

console.log(`A=${(n*Math.pow(+lines[0], 2)).toFixed(4)}`);
