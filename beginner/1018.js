const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    let x = +xA[0];
    let c = 0;
    let nA = [100, 50, 20, 10, 5, 2, 1];

    console.log(x);

    nA.forEach(n => {
        if (x >= n) {
            c = parseInt(x / n);
            x -= c * n;
        } else c = 0;

        console.log(`${c} nota(s) de R$ ${n},00`);
    });
}

calculate(lines);
