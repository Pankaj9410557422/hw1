function numberLine(data) {
    let count=0;
	let arr = data.split(/\r?\n/);
	for (let i = 0; i < arr.length; i++) {
		console.log(++count + '.' + arr[i]);
	}

	return data;
}

module.exports = {
	numberLineFn: numberLine,
};