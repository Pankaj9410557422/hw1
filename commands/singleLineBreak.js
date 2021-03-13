function singleLineBreak(data) {

	data = data.replace(/\n\s*\n/g, '\n\n');
	console.log(data);

	return data;
}

module.exports = {
	singleLineBreakFn: singleLineBreak,
};