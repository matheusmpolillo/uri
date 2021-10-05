const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

function calculate(x) {
    x = x[0].split(' ');
    
    return {
        triangle: ((+x[0] * +x[2]) / 2).toFixed(3),
        circle: (3.14159 * Math.pow(+x[2], 2)).toFixed(3),
        trapeze: (((+x[0] + +x[1]) * +x[2])/2).toFixed(3),
        square: (+x[1] * +x[1]).toFixed(3),
        rectangle: (+x[0] * +x[1]).toFixed(3)
    };
}

const r = calculate(lines);

console.log(`TRIANGULO: ${r.triangle}`);
console.log(`CIRCULO: ${r.circle}`);
console.log(`TRAPEZIO: ${r.trapeze}`);
console.log(`QUADRADO: ${r.square}`);
console.log(`RETANGULO: ${r.rectangle}`);
