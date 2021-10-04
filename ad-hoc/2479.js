const ReadLine = require('readline');

let n = null, prefix = null, names = [], behaved = [], unbehaved = [];

const r1 = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', input => {
    if (n === null) n = input;
    else if (n !== null) {
        prefix = input[0];
        names.push(input.slice(prefix.length).trim());
        if (prefix == '+') behaved.push(input.slice(prefix.length).trim());
        else unbehaved.push(input.slice(prefix.length).trim());
    }

    if (names.length == n) r1.close();
});

r1.on('close', () => {
    names.sort().forEach(nome => {
        console.log(nome);
    });
    console.log(`Se comportaram: ${behaved.length} | Nao se comportaram: ${unbehaved.length}`);
});
