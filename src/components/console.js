//@flow


import commands from "../data/commands";
import messages from "../data/messages";

const directory = messages.directory;

import {
	AsyncView
} from "../entry";

class Console extends AsyncView {

	sequence:number = 3;
	type:string = `console`;
	renderTo:string = `main`;
	id:string = `console`;
	mounted:any = async ()=>{

	};
	innerHTML:string = `
		<div>

			<div class="traffic-lights">

				<button
					onclick="document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.toggle('slide-out-blurred-top');document.getElementById('console-listItem').style.display='block';"
					class="traffic-light traffic-light-close" id="close"></button>

				<button
					onclick="document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.toggle('slide-out-blurred-minimize');document.getElementById('console-listItem').style.display='block';"
					class="traffic-light traffic-light-minimize" id="minimize"></button>

				<button
					onclick="document.getElementById('console').classList.toggle('slide-out-maximize')"
					class="traffic-light traffic-light-maximize" id="maximize"></button>

			</div>

			<div
				id="console-scroll"
				value="0"
				onblur="document.getElementById('blinking-cursor').style.display='inline-block'"
				onfocus="document.getElementById('blinking-cursor').style.display='none'; this.selectionStart = this.selectionEnd = this.children[0].innerText.length-1;"
				onkeydown="Terminal.keyup(event)"
				 contenteditable spellcheck="false">

			<span id="written"  >${messages.version}<br/><i style="color:rgba(255,255,255,0.5)" contenteditable="false">${directory}&nbsp;</i></span><span id="blinking-cursor" contenteditable="false">_</span>

			<h1 hidden style="" contenteditable="false">
				Web Applications Developer
			</h1>

			</div>

		</div>
	`;

}

export default new Console();
