
let fs = require("fs");
let input = process.argv.slice(2);

let print = require('./commands/print');
let printMultiple = require('./commands/printMultiple');
let singleLineBreak = require('./commands/singleLineBreak');
let numberLine = require('./commands/numberLine');
let numNonEmptyLine = require('./commands/numNonEmptyLine');

function isFile(filepath){
    return fs.existsSync(filepath);
}

function readLine(filePath) {
	let data = fs.readFileSync(filePath, 'utf8');
	return data;
}

if (input.length == 1) {
	if (isFile(input[0])) {
		print.printFn(input[0]);
	} else {
		console.log('File does not exists');
	}
} else if (input.length > 1 && isFile(input[0])) {
	printMultiple.printMultipleFn(input);
} else if (input.length > 0) {
	let filePath = input[input.length - 1];

	if (isFile(filePath)) {
		let data = readLine(filePath);
		for (let i = 0; i < input.length - 1; i++) {
			if (
				(input[i] == '-n' && input[i + 1] == '-b') ||
				(input[i] == '-b' && input[i + 1] == '-n')
			) {
				if (input[i] == '-n') {
					numberLine.numberLineFn(data);
				} else {
					numNonEmptyLine.numNonEmptyLineFn(data);
				}
				return;
			} else if (input[i] == '-s') {
				singleLineBreak.singleLineBreakFn(data);
			} else if (input[i] == '-n') {
				numberLine.numberLineFn(data);
			} else if (input[i] == '-b') {
				numNonEmptyLine.numNonEmptyLineFn(data);
			}
		}
	} else {
		console.log('File does not exists')
	}
} else {
	console.log('Wrong Command.');
}