const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

console.log(`PROD = ${+lines[0] * +lines[1]}`);
