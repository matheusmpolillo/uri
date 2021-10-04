const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

lines.forEach(val => {
    if (val !== '') {
        const trueVals = val.split(' ');
        let uIntVals = new Uint32Array(3);
        uIntVals[0]=+trueVals[0];
        uIntVals[1]=+trueVals[1];
        uIntVals[2]=uIntVals[0] ^ uIntVals[1];
        console.log(uIntVals[2]);
    }
});
