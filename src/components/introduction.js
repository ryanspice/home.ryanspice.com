//@flow

import {
	AsyncView
} from "../entry";

class Introduction extends AsyncView {
	sequence:any = 1;
	type:any = `section`;
	style:any = `padding:2rem;display:block;max-width:780px;margin:0px auto;color:rgba(255,255,255,0.55);`;
	renderTo:any = `main`;
	className:any = ``;
	id:any = ``;
	innerHTML:any = `
<span style="color:rgba(255,255,255,0.5);display:block;padding-top:8rem;padding-bottom:8rem;">

	Hello!<br/>
	My name is Ryan Spice-Finnie.<br/><br/>
	I am a programmer from Canada <a target="_blank" href="https://www.youtube.com/watch?v=5FEW5mh7iAI">eh</a>,<br/>
	I specialize in building modern, structured, and applied applications for your favourite web browsers.<br/>
	I have a few <a target="_blank" href="https://github.com/ryanspice">frameworks</a> built as ground up approaches to common solutions.<br/>
	<br/>
	Please checkout my console below!<br/>

</span>
`;
}

export default new Introduction()
