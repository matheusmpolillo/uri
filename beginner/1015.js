const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(xA) {
    let r = 0;
    let c = 0;
    let xAC = [];
    let yAC = [];

    for (let x of xA) {
        c++;
        x = x.split(' ');
        xAC.push(+x[0]);
        yAC.push(+x[1]);
    }

    r = Math.pow((xAC[1] - xAC[0]), 2) + Math.pow((yAC[1] - yAC[0]), 2);

    console.log(Math.sqrt(r).toFixed(4));
}

calculate(lines);
