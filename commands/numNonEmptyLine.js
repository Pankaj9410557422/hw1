function lineNumberNonEmpty(data) {
	let strArr = data.split(/\r?\n/);

	let lineNo = 0;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] !== '') {
			lineNo++;
			console.log(lineNo + '.' + strArr[i]);
		} else {
			console.log(strArr[i]);
		}
	}

	return data;
}

module.exports = {
	numNonEmptyLineFn: lineNumberNonEmpty,
};