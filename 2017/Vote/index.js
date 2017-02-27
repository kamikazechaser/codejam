const fs = require('fs');

fs.readFile('./input/' + process.argv[2] + '.in', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    run(data)
});

function run(input) {
    var lines = input.split('\n')
    var testCases = lines[0]
    lines.shift()
    for (var i = 0; i < testCases; i += 1) {
        var A = lines[i].split(' ')[0]
        var B = lines[i].split(' ')[1]
        var totalVoters = parseInt(A) + parseInt(B)
        var diff = parseInt(A) - parseInt(B)
        var pS = parseFloat(diff/totalVoters).toFixed(8)
        console.log(`Case #${(i + 1)}: ${pS}`)
    }
}
