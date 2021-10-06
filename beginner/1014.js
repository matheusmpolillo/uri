const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    return (+xA[0] / +xA[1]).toFixed(3);
}

console.log(`${calculate(lines)} km/l`);
