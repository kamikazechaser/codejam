var _ = require('lodash')
var fs = require('fs')

fs.readFile('./input/' + process.argv[2] + '.in', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    run(data);
});

function run(input) {
    var lines = input.split('\n')
    var testCases = lines.shift();
    var obj = {};
    for (var i = 0; i < testCases; i++) {
        var testCase = obj[i + 1] = [];
        var numberOfNames = lines.shift();
        for (var j = 0; j < numberOfNames; j += 1) {
            let candidateNames = lines.shift()
            let strippedNames = _.uniq(candidateNames).join('')
            testCase.push(strippedNames)
        }
    }
    for (var k = 0; k < testCases; k++) {
        console.log(`Case #${[k + 1]}: ${findLongestName(obj[k + 1])}`)
        
    }
}

function findLongestName(str) {
  var longestWord = str.reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');
  return longestWord;
}
