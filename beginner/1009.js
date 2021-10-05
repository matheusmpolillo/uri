const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    return (+xA[1] + (+xA[2]*0.15)).toFixed(2);
}

console.log(`TOTAL = R$ ${calculate(lines)}`);
