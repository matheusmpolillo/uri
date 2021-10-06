const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    const r = (xA[1]*xA[0])/12;
    console.log(r.toFixed(3));
}

calculate(lines);
