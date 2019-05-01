//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Pre2 extends AsyncView {

	constructor(){

		return super({
			type:`pre`,
			style:`display:block !important;padding:2rem;display:block;min-width:320;max-width:780px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();

			},
			innerHTML:`Visit https://github.com/ryanspice or;
Contact me at contact@ryanspice.com to learn more about what I can do.`

		});
	}

}

export default new Pre2()
