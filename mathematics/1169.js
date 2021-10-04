const ReadLine = require('readline');

let n = null, casas = [];

const r1 = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', input => {
    if (n === null) n = input;
    else casas.push(input);

    if (casas.length == n) r1.close();
});

r1.on('close', () => {
    casas.forEach(casa => {
        let resultado = 1;
        while (casa--) {
            resultado *= 2;
        }
        console.log(`${Math.floor(resultado/12000)} kg`);
    });
});
