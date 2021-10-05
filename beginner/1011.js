const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const pi = 3.14159;

function calculate(x) {
    return ((4.0/3) * pi * Math.pow(x[0], 3)).toFixed(3);
}

console.log(`VOLUME = ${calculate(lines)}`);
