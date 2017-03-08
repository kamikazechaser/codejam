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
        var sideA = lines[i].split(' ')[0]
        var sideB = lines[i].split(' ')[1]
        var biggerSide = Math.max(sideA, sideB)
        var smallerSide = Math.min(sideA, sideB)
        var ex1 = ((parseInt(smallerSide) * parseInt(biggerSide)) * (parseInt(smallerSide) * (parseInt(smallerSide) + 1) / 2))
        var ex2 = ((parseInt(smallerSide) + parseInt(biggerSide)) * (parseInt(smallerSide) * (parseInt(smallerSide) + 1) * (parseInt(smallerSide)*2 + 1) / 6))
        var ex3 = ((parseInt(smallerSide) * (parseInt(smallerSide) + 1) / 2) * (parseInt(smallerSide) * (parseInt(smallerSide) + 1) / 2))

        /*
        var ex1 = (parseInt(smallerSide) * parseInt(smallerSide) * (parseInt(smallerSide) + 1) * (parseInt(smallerSide) + 1) / 4)
        var ex2 = ((parseInt(smallerSide) + parseInt(biggerSide)) * (parseInt(smallerSide) * (parseInt(smallerSide) + 1) * ((parseInt(smallerSide) * 2) + 1) / 6))
        var ex3 = ((parseInt(smallerSide) * (parseInt(smallerSide) + 1) / 2) * parseInt(biggerSide) * parseInt(smallerSide))
        */
        // var modulo = 1e9 + parseInt(7) 
        var solution = ex1 - ex2 + ex3
        console.log(`Case #${i + 1}: ${solution}`)
    }
}
