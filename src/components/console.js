//@flow

import utils from "../utils";

import commands from "../commands";
import messages from "../messages";

require("../Vibrant");

const directory = messages.directory;

import {
	AsyncView
} from "../entry";

class Console extends AsyncView {

	sequence:number = 3;
	type:string = `console`;
	style:string = `padding:2rem;display:block;min-height:20vh;max-width:1080px;margin:0px auto;color:rgba(255,255,255,0.55);`;
	renderTo:string = `main`;
	className:string = ``;
	id:string = `console`;
	mounted:any = async ()=>{

		theme();

	};
	innerHTML:string = `
		<div id ="" class="" style="border-radius: 1rem; border:1px solid rgba(25,25,25,0.25); background:rgba(25,25,25,0.25);    height:100%; box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);">

			<div class="traffic-lights " style="padding-right:2.5rem;width:100%;position:absolute;top:0px;left:0px;height:6.5rem;font-size:4rem;background:rgba(25,25,25,0.25);text-align:right;-webkit-touch-callout: none; /* iOS Safari */    -webkit-user-select: none; /* Safari */     -khtml-user-select: none; /* Konqueror HTML */       -moz-user-select: none; /* Firefox */        -ms-user-select: none; /* Internet Explorer/Edge */            user-select: none; ">

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
				style="resize:vertical;overflow-y:auto;font-family:monospace, consolas;color:rgba(255,255,255,0.25);background:rgba(0,0,0,0.75);min-height:20vh;height:100%; margin-top:6.5rem;padding:1rem;" contenteditable spellcheck="false">

			<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,0.25);" >${messages.version}<br/><i style="color:rgba(255,255,255,0.5)" contenteditable="false">${directory}&nbsp;</i></span><span id="blinking-cursor" contenteditable="false">_</span>

			<h1 hidden style="color:rgba(25,25,25,0.25);pointer-events:none;" contenteditable="false">
				Web Applications Developer
			</h1>

			</div>

		</div>
	`;

}

export default new Console()
