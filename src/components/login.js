//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Login extends AsyncView {

	constructor(){

		return super({
			type:`section`,
			style:`display:none;padding:1rem;padding-top:2.5rem;padding-bottom:2.5rem;`,
			renderTo:`main`,
			className:`acrylic`,
			id:`login_form`,
			innerHTML:`
				<a>
					<h2>C H Â T E A U</h2>
				</a>

				<br/>

				<!--
				<input id="userinput_0" class="form-control" onInput="" type="username" placeholder="" />
				<input class="hidden form-control" type="password" placeholder="P A S S W O R D" />

				<input  class="hidden form-control" type="submit" value="L O G I N" />

				<br/>
				-->
				`
		});
	}

}

export default new Login()
