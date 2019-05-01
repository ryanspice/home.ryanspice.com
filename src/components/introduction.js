//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Introduction extends AsyncView {

	constructor(){

		return super({
			type:`section`,
			style:`padding:2rem;display:block;min-width:512px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:``,
			innerHTML:`

				<span style="color:rgba(255,255,255,0.5);display:block;padding-top:8rem;padding-bottom:8rem;">

					Hello!<br/>
					My name is Ryan Spice-Finnie.<br/><br/>
					I am programmer from Canada <a target="_blank" href="https://www.youtube.com/watch?v=5FEW5mh7iAI">eh</a>,<br/>
					I specialize in building modern, structured, and applied applications for your favourite web browsers.<br/>
					I have a few <a target="_blank" href="https://github.com/ryanspice">frameworks</a> built as ground up approaches to common solutions.<br/>
					<br/>
					Please checkout my console below!<br/>

				</span>

				`

		});
	}

}

export default new Introduction()
