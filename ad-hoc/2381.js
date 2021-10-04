const ReadLine = require('readline');

let n = null, k = null, students = [];

const r1 = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', input => {
    if (n === null) {
        n = input.split(' ')[0];
        k = input.split(' ')[1];
    }
    else {
        students.push(input.toLowerCase());
    }

    if (students.length == n) r1.close();
});

r1.on('close', () => {
    students.sort().forEach((nome, index) => {
        if ((index+1) == k) console.log(nome);
    });
});
