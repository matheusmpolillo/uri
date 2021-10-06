const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    const r = +xA[0] * 2;
    console.log(`${r} minutos`);
}

calculate(lines);
