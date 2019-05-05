//@flow

import {
	AsyncView
} from "../entry";

class Contact extends AsyncView {
	sequence:any = 5;
	type:any = `span`;
	style:any = `font-family: monospace; display:block !important;padding:2rem;display:block;min-width:320;max-width:780px;margin:0px auto;color:rgba(255,255,255,0.55);`;
	renderTo:any = `main`;
	className:any = ``;
	id:any = ``;
	mounted:any = ()=>{
	  feather.replace();
	};
	innerHTML:any = `Visit <a href="https://github.com/ryanspice">https://github.com/ryanspice</a> or;<br/>
Contact me at <a href="mailto:contact@ryanspice.com" target="_self">contact@ryanspice.com</a> to learn more about what I can do.
`;
}

export default new Contact();
