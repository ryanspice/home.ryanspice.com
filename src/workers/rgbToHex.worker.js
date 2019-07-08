
const componentFromStr = async function componentFromStr(numStr, percent) {
    const num = Math.max(0, parseInt(numStr, 10));
    return percent ?
        Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

const rgbToHex = async function rgbToHex(rgb) {
    const rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    let result, r, g, b, hex = "";
    if ( (result = rgbRegex.exec(rgb)) ) {
        r = await componentFromStr(result[1], result[2]);
        g = await componentFromStr(result[3], result[4]);
        b = await componentFromStr(result[5], result[6]);

        hex = "0x" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;
}

onmessage = async function(e) {

	const output = e.data;

	output.color = (await rgbToHex(output.color)).replace('0x','#');

	postMessage({
		output
	});

	return;
};
