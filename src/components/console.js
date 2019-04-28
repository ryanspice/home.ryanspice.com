//@flow

import Messages from "../messages";
function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    {
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}
let temp = '';
const version = `ryanspice.com [Version 9.0.xxxxx.xxx]`;
const copy = `Copyright (C) ryanspice.com. All rights reserved.`;
//const dir = `C:\\Users\\Ryan\\Home>`;
//const directory = "~ryanspice.com::guest>";
const directory = "~ryanspice.com\\Users\\Guest>";

const commands = {
	'asd':()=>{

		return 'asd';
	}
}

window.Terminal = {
	keyup:(evt)=>{

		if (evt.key=="Enter"){

			evt.preventDefault();

			let textarea= evt.target.children[0];

			let taLength = textarea.innerText.split(directory).length-1;
			let taValue = textarea.innerText.split(directory)[textarea.innerText.split(directory).length-1];
			taValue = taValue.trim();
			//console.log(taValue);

			if (taLength>12)
				textarea.innerText = directory;

			let results = null;
			try{
				results = commands[taValue]();
			}catch(e){
				results = `	`+e.toString();
			}

			textarea.innerText = textarea.innerText+"\n"+results+"\n"+directory;

			setEndOfContenteditable(evt.target);

			//console.log(textarea);

			document.getElementById('written').focus();

			textarea.innerText = textarea.innerText.trim();//.replace("<br/>","\\n");

			if (evt.target.children[2])
				evt.target.children[2].remove();

			setTimeout(()=>{

				if (evt.target.children[2])
					evt.target.children[2].remove();

			},100);

		}
	}
}

import {
	AsyncView
} from "../entry";

class Console extends AsyncView {

	constructor(){

		return super({
			type:`console`,
			style:`padding:2rem;display:block;min-width:512px;max-width:1080px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:`console`,
			mounted:()=>{

			},
			innerHTML:`
			<div id ="" class="" style="overflow-y:hidden;min-width:512px;border-radius: 1rem; border:1px solid rgba(25,25,25,0.25); background:rgba(25,25,25,0.25);    box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);">
			<div class="traffic-lights " style="padding-right:2.5rem;width:100%;position:absolute;top:0px;left:0px;height:6.5rem;font-size:4rem;background:rgba(25,25,25,0.25);text-align:right;">

				<button
					onclick="document.getElementById('console').classList.toggle('slide-out-blurred-top')"
					class="traffic-light traffic-light-close" id="close"></button>

				<button
					onclick="document.getElementById('console').classList.toggle('slide-out-blurred-minimize')"
					class="traffic-light traffic-light-minimize" id="minimize"></button>

				<button
					onclick="document.getElementById('console').classList.toggle('slide-out-maximize')"
					class="traffic-light traffic-light-maximize" id="maximize"></button>

			</div>

			<div
				value="0"
				onblur="document.getElementById('blinking-cursor').style.display='inline-block'"
				onfocus="document.getElementById('blinking-cursor').style.display='none'; this.selectionStart = this.selectionEnd = this.children[0].innerText.length-1;"
				onkeydown="Terminal.keyup(event)"
				style="font-family:monospace, consolas;color:rgba(255,255,255,0.25);background:rgba(0,0,0,0.75);height:100%; margin-top:6.5rem;padding:1rem;font-size:2rem" contenteditable>

			<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,0.25);" >${directory} </span><span id="blinking-cursor" contenteditable="false">_</span>

			<h1 hidden style="color:rgba(25,25,25,0.25);pointer-events:none;" contenteditable="false">
				Web Applications Developer
			</h1>

			</div>
			</div>


				`

		});
	}

}

export default new Console()
