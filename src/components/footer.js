//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Footer extends AsyncView {

	constructor(){

		return super({
			type:`div`,
			style:` border-radius: 1rem;
			    box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);
			    margin-bottom: 1rem;

			    height: 10vh;
			    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random);
			    background-position: center bottom;
			    background-repeat: no-repeat;
			    background-size: cover;
			    position: relative;`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();

			},
			innerHTML:``

		});
	}

}

export default new Footer()
