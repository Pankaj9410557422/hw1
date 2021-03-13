let print = require('./print');

function printMultiple(input) {
	for (let i = 0; i < input.length; i++) {
		let filePath = input[i];

		let a=print.printFn(filePath);

		if (a == false) {
			console.log("no file withthis name exixts");
		}
	}
}

module.exports = {
	printMultipleFn: printMultiple,
};