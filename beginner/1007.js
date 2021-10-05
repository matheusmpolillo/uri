const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    return (+xA[0] * +xA[1]) - (+xA[2] * +xA[3]);
}

console.log(`DIFERENCA = ${calculate(lines)}`);
