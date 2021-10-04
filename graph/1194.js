const ReadLine = require('readline');

let n = null, elementos = [], prefixos = [], infixos = [];

const r1 = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', input => {
    if (n === null) n = input;
    else {
        elementos.push(input.split(' ')[0]);
        prefixos.push(input.split(' ')[1]);
        infixos.push(input.split(' ')[2]);
    }

    if (infixos.length == n) r1.close();
});

r1.on('close', () => {
    for (let i = 0; i < n; i++) {
        degenerar(prefixos[i], infixos[i]);
        console.log('');
    }
});

function degenerar(prefixo, infixo) {
    let raiz = prefixo.charAt(0), index = infixo.search(raiz), novoPrefixo = null, novoInfixo = null;

    if (index !== 0) {
        novoPrefixo = prefixo.substr(1, index);
        novoInfixo = infixo.substr(0, index);
        degenerar(novoPrefixo, novoInfixo);
    }

    if (index + 1 < prefixo.length) {
        novoPrefixo = prefixo.substr(index + 1);
        novoInfixo = infixo.substr(index + 1);
        degenerar(novoPrefixo, novoInfixo);
    }

    process.stdout.write(prefixo[0]);
}
