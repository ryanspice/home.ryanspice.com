//@flow

import {
	Utf8,
	Sha256
} from '../sha';

import Messages from "../messages";

import {
	AsyncView,
	AsyncTemplate
} from "../entry";

 class LoginInput extends AsyncView {

	constructor(){

		let _input, _loader, _login;
		let findGetParameter = function(parameterName){
				var result = null,
						tmp = [];
				location.search
						.substr(1)
						.split("&")
						.forEach(function (item) {
							tmp = item.split("=");
							if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
						});
				return result;
		}


		return super({
			type:`input`,
			style:``,
			value:``,
			mounted:async (evt, pipe)=>{

				await new AsyncView({
					type: `h5`,
					style: `cursor:pointer;margin-top:2rem;font-size:1.5rem;text-align:center;color:rgb(75,75,105);`,
					renderTo: `#login_form`,
					id: `s0`,
					innerHTML: `Forgot Login?`
				});

				_input = document.getElementById('userinput_0');
				_loader = document.getElementById('loader');
				_login = document.getElementById('login');

				await window.auth.update();

			},
			oninput:async function(evt){

				if (evt.target.value.length>3){

					_input.style.display = "none";
					_loader.style.display = "block";


					const fetchParams = `?ctx=${findGetParameter('ctx')}&hash=${this.value,Sha256.hash(this.value)}`;

					const login = await fetch(`/api/login` + fetchParams);
					const loginHash = await JSON.parse(await login.json()).hash;

					if (loginHash == "ok"){

						const handshake = await fetch(`/api/handshake` + fetchParams);
						const handshakeHash = await JSON.parse(await handshake.json()).hash;

						if (handshakeHash){

							const context = await fetch(`/api/context?ctx=${findGetParameter('ctx')}&key=${handshakeHash}`);
							const contextHash = await JSON.parse(await context.json()).key;

							if (contextHash){

								_login.remove();

								if (contextHash=="no"){
									_input.style.display = "block";
									_loader.style.display = "none";
								}	else
									window.location = contextHash;

							} else {

								_input.style.display = "block";
								_loader.style.display = "none";

								return;
							}

						} else {


							_input.style.display = "block";
							_loader.style.display = "none";

							return;
						}

					} else {

						_input.style.display = "block";
						_loader.style.display = "none";
					}

					evt.target.value = '';
					evt.target.innerText = '';
					evt.target.focus();
				}

			},
			renderTo:`#login_form`,
			className:`form-control`,
			id:`userinput_0`,
			innerHTML:``
		});

	}

	input(){

	}

}
export default new LoginInput()
