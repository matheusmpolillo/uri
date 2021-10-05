const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const ws = [2, 3, 5];

function calculate(xA, pA) {
    let cX = (+xA[0] * pA[0]) + (+xA[1] * pA[1]) + (+xA[2] * pA[2]);
    let cP = pA[0] + pA[1] + pA[2];

    return (cX / cP).toFixed(1);
}

console.log(`MEDIA = ${calculate(lines, ws)}`);
