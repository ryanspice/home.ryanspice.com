
//const Vibrant = require('./Vibrant-WebWorker.js');
const image2base64 = (require('./image-to-base64-WebWorker'));
const response = image2base64("https://source.unsplash.com/random");


onmessage = async function(e) {

	const bodyStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"data:image/png;base64,"+(await response)});`;
	const footerStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"data:image/png;base64,"+(await response)});`

	const src = "data:image/png;base64,"+(await response);

	postMessage({
		primary:[
			bodyStyle,
			footerStyle,
			src]
	});

	return;
};
