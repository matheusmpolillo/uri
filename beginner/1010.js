const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    let y = 0;
    xA.forEach(x => {
        if (x) {
            let nXA = x.split(' ');
            y += +nXA[1] * +nXA[2];
        }
    });

    return y.toFixed(2);
}

console.log(`VALOR A PAGAR: R$ ${calculate(lines)}`);
