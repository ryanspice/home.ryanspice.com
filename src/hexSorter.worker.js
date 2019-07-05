
let hexSorter = require('hexSorter');

onmessage = async function(e) {

	/*
	console.log('sorting colours');
	console.log(e.data[0])
	console.log(e.data[1])
	*/

	const sorted = await hexSorter.sortColors(e.data[0],e.data[1]);

	postMessage({
		primary:sorted[sorted.length-1],
		secondary:sorted[1]
	})

	return;
};
