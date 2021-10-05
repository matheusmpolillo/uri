const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    return (+xA[1] * +xA[2]).toFixed(2);
}

console.log(`NUMBER = ${lines[0]}`);
console.log(`SALARY = U$ ${calculate(lines)}`);
