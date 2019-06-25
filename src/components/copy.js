//@flow

import {
	AsyncView
} from "../entry";

class Copy extends AsyncView {

	id = ``;
	type: string = 'copy';
	renderTo: string = `main`;
	sequence: number = 6;
	mounted: Function = function() {

		feather.replace();

	};
	innerHTML: string = `
		<p>
		Visit <a href="https://github.com/ryanspice">https://github.com/ryanspice</a> or;<br/>
		Contact me at <a href="mailto:spice.ryan@hotmail.com" target="_self">contact@ryanspice.com</a> to learn more about what I can do.<br/>
		<p>
		Thanks - Merci - Grazi - Obrigado - Danken - Spasybi - 谢谢 - 감사
		<br/>
		<br/>
		<img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png"/>
		<br/>
		<br/>
		copyright &copy; ${new Date().getFullYear()} ryanspice.com
	`;
}

export default new Copy();
