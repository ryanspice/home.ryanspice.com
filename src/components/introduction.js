//@flow

import {
	AsyncView
} from "../entry";

class Introduction extends AsyncView {

	type:any = `section`;
	renderTo:any = `main`;
	sequence:any = 1;
	innerHTML:any = `
		Hello!<br/>
		My name is Ryan Spice-Finnie.<br/><br/>
		I am a programmer from Canada <a target="_blank" href="https://www.youtube.com/watch?v=5FEW5mh7iAI">eh</a>,<br/>
		I specialize in building modern, fast, and efficient JavaScript Applications.<br/>

		I have a few <a target="_blank" href="https://github.com/ryanspice">frameworks</a> built as ground up approaches to common solutions.<br/>
		<br/>
		Please checkout my console below!<br/>
	`;

}

export default new Introduction();
