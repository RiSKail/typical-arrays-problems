exports.min = function min(array) {
	if (!(array && array.length) || arguments == undefined)
		return 0;
	else
		return Math.min.apply(null, array);
}

exports.max = function max(array) {
	if (!(array && array.length) || arguments == undefined)
		return 0;
	else
		return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
	if (!(array && array.length) || arguments == undefined)
		return 0;
	else {
		let sum = array.reduce((previous, current) => current += previous);
		let avg = sum / array.length;
		return avg;
	}
}
