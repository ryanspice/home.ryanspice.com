
let hexSorter = require('hexSorter');

onmessage = async function(e) {

	const sorted = await hexSorter.sortColors(e.data[0].filter(e=>(e.length>0)),e.data[1]);

	postMessage({
		primary:sorted[sorted.length-1],
		secondary:sorted[1]
	})

	return;
};
