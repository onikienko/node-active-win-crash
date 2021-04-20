const activeWin = require('active-win');

console.log('Getting window info for the first time:');
console.log(activeWin.sync());

console.log('Getting window info for the same window second time:');
console.log(activeWin.sync());
