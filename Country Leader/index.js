"use strict"

const _ = require('lodash');
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    let solution = run(data)
    _.each(solution, (element, index) => {
        let output = `Case #${(index + 1)}: ${element}`
        console.log(output)
    })
});

function run(input) {
  let lines = input.split('\n');
  return _.times(lines.shift(), () => {
    return _(lines)
      .splice(0, lines.shift())
      .map(item => [_(item.replace(/ /g, '')).split('').uniq().size(), item])
      .orderBy([0, 1], ['asc', 'desc'])
      .map(1)
      .last();
  });
}
