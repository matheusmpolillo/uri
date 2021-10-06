const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    xA = xA[0].split(' ');
    let y = +xA[0];
    xA.shift();
    xA.forEach(x => {
        if (+x > +y) y = +x;
    });

    return y;
}

console.log(`${calculate(lines)} eh o maior`);
