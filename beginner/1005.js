const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const ws = [3.5, 7.5];

function calculate(xA, pA) {
    let cX = (+xA[0] * pA[0]) + (+xA[1] * pA[1]);
    let cP = pA[0] + pA[1];

    return (cX / cP).toFixed(5);
}

console.log(`MEDIA = ${calculate(lines, ws)}`);
