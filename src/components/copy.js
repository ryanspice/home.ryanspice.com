//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Copy extends AsyncView {

	constructor(){

		return super({
			type:`span`,
			style:`    font-family: monospace; text-align:center;

		display:block !important;padding:2rem;display:block;min-width:320;max-width:780px;margin:0px auto;color:rgba(255,255,255,0.25);`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();

			},
			innerHTML:`

			Thanks - Merci - Grazi - Danken - Spasybi - 谢谢 - 감사
			<br/>
			<br/>
			<img style="width:40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png"/>
			<br/>
			<br/>
			copyright &copy; ${new Date().getFullYear()} ryanspice.com
`

		});
	}

}

export default new Copy()
