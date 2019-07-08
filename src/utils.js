
import "./terminal";

import HexSorterWorker from 'worker-loader!./workers/hexSorter.worker.js';
import VibrantWorker from 'worker-loader!./workers/Vibrant.worker.js';
import RgbToHexWorker from 'worker-loader!./workers/rgbToHex.worker.js';

/**
 * hoisted variables
 * @type {Image}
 */

let img;
img = new Image();
img.style.display = "none";
img.crossOrigin = "Anonymous";

/**
 * remove?
 * @return {Promise} [description]
 */

window.SetColourTheme = window.theme;
/**
 * vibrant - transformed vibrant values :: appened to the document
 * @param  {[type]}  e [description]
 */

const Vibrant = new VibrantWorker();

Vibrant.onmessage = e =>{

	const data = e.data.primary;

	document.body.style =  data[0];
	document.getElementsByTagName('footer')[0].style =  data[1];
	img.src =  data[2];
	document.body.append(img);
	img.onload = async ()=>{

		const HexSort = await new HexSorterWorker();

		HexSort.onmessage = async (e:Event)=>{

			await document.body.insertAdjacentHTML( 'beforeend', (`<style>html {background:${e.data.primary} !important;} a {color:${e.data.secondary} !important;}</style>`));

			HexSort.terminate();

		}

		const RgbToHex = await new RgbToHexWorker();
		await import("./assets/js/Vibrant");

		const sw = [
	 	 'DarkMutedSwatch',
	 	 'DarkVibrantSwatch',
	 	 'LightMutedSwatch',
	 	 'LightVibrantSwatch',
	 	 'MutedSwatch',
	 	 'VibrantSwatch'
	  ];

		const vib = await new window.Vibrant(img,32,3);

		const colorArray = [];

		RgbToHex.onmessage = async (e)=>{

			await colorArray.push(e.data.output.color);

			if (colorArray.length>=sw.length-1){

				await HexSort.postMessage([colorArray,'mostBrightColor']);
				RgbToHex.terminate();
			}

		}

		for(var i = 0; i<sw.length;i++){

			RgbToHex.postMessage({
				color:vib[sw[i]]?`rgb(${vib[sw[i]].rgb[0]},${vib[sw[i]].rgb[1]},${vib[sw[i]].rgb[2]})`:``
			})

		}

	};

};

/**
 * vibrant - postMessage to vibrant
 * @return {[type]} [description]
 */

window.theme = async function theme(){

	await Vibrant.postMessage([420]);

	return img;
};

window.theme();
