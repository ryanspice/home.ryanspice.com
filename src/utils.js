

import messages from "./data/messages";
import commands from "./data/commands";

const directory = messages.directory;

const image2base64 = require('./assets/js/image-to-base65');

let lastIndex = 0;
const last = [

];

window.openInNewWindow = (msg)=>{

	window.open(`${msg}`,msg,'width=720,height=380');
};

window.openInNewTab = function openInNewTab(url) {

  const win = window.open(url, '_blank');
  win.focus();
	return ['opening "'+url+'"'];
};
window.openInNewTab = openInNewWindow;

window.getCaretPosition = function getCaretPosition(editableDiv) {
  var caretPos = 0,
    sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      range = sel.getRangeAt(0);
      if (range.commonAncestorContainer.parentNode == editableDiv) {
        caretPos = range.endOffset;
      }
    }
  } else if (document.selection && document.selection.createRange) {
    range = document.selection.createRange();
    if (range.parentElement() == editableDiv) {
      var tempEl = document.createElement("span");
      editableDiv.insertBefore(tempEl, editableDiv.firstChild);
      var tempRange = range.duplicate();
      tempRange.moveToElementText(tempEl);
      tempRange.setEndPoint("EndToEnd", range);
      caretPos = tempRange.text.length;
    }
  }
  return caretPos;
};

window.setEndOfContenteditable = function setEndOfContenteditable(contentEditableElement){
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
};

/**
 * [Terminal description]
 * @type {Object}
 */

window.Terminal = {
	running:false,
	hide:()=>{

		document.getElementById('console').classList.remove('slide-out-maximize');
		document.getElementById('console').classList.add('slide-out-blurred-top');
		document.getElementById('console-listItem').style.display='block';
		return ['done'];

	},
	minimize:(evt)=>{

		document.getElementById('console').classList.remove('slide-out-maximize');
		document.getElementById('console').classList.add('slide-out-blurred-minimize');
		document.getElementById('console-listItem').style.display='block';
		return ['done'];

	},
	maximize:(evt)=>{

		document.getElementById('console').classList.add('slide-out-maximize');
		return ['done'];

	},
	restore:(evt)=>{

		document.getElementById('console-listItem').style.display='none';
		document.getElementById('console').classList.remove('slide-out-blurred-top'),
		document.getElementById('console').classList.remove('slide-out-blurred-minimize')

		return ['done'];
	},
	keyup:(evt)=>{


		let textarea= evt.target.children[0];
		//console.log(textarea.innerText.split('\n')[textarea.innerText.split('\n').length-1])
		//console.log(textarea.innerText.split('\n')[textarea.innerText.split('\n').length-1].length)


		if (evt.ctrlKey)
		if (evt.key=="a"){
			evt.preventDefault();
		}

			if (evt.key=="ArrowUp"){
				evt.preventDefault();
				if (lastIndex<0)
					lastIndex=0;

				textarea.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,255);" ><i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;${last[last.length-1-(lastIndex++)||0]||last[0]}</i></span>`;

			}
			if (evt.key=="ArrowDown"){
				evt.preventDefault();
				if (lastIndex>last.length-1)
				lastIndex=last.length-1;
				textarea.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,255);" ><i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;${last[last.length-(lastIndex--)||last.length-1]||last[last.length-1]}</i></span>`;

			}

		if (getCaretPosition(textarea)<1){
			if (evt.key=="ArrowLeft"){
				evt.preventDefault();
			}
			if (evt.key=="Backspace"){
			//	evt.preventDefault();
			}

		}

		if(textarea.innerText.split('\n')[textarea.innerText.split('\n').length-1].length<29){

			if (evt.key=="Backspace"){
				evt.preventDefault();
				//evt.target.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,0.25);" ><i style="color:rgba(255,255,255,0.5)" contenteditable="false">${directory}&nbsp;yarn start</i></span><span id="blinking-cursor" contenteditable="false">_</span>`;
		}
	}

		//if (Terminal.running)
		//							evt.preventDefault();

		if (evt.key=="Enter"){
			Terminal.running=true;
			evt.preventDefault();
			window.writeToConsole(evt);

		}

	}
};

window.writeToConsole = function(evt){

	let textarea= evt.target.children[0];
	let taLength = textarea.innerText.length;

	if (taLength<27)
			evt.target.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,255);" ><i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;</i>yarn start</span><span id="blinking-cursor" contenteditable="false">_</span>`;


			setTimeout(()=>{

				let taValue = textarea.innerText.split(directory)[textarea.innerText.split(directory).length-1];
				taValue = String(taValue).trim().toLowerCase();
				last.push(taValue);

				let results = null;
				let i = 0;

				try{



					results = "";
					console.log(taValue)

					commands[taValue]().forEach((val)=>{
						console.log(val)

						if (typeof val == 'function')
							val = val();

						results=val;
						i++;

						//loop each function output

							setTimeout(()=>{
								textarea.innerHTML = textarea.innerHTML+"<br/>"+val;
								document.getElementById('console-scroll').scrollTop = document.getElementById('console-scroll').scrollHeight;
							},124*i)
					})
/*
					(commands[taValue]()).forEach(val=>{

						console.log(val);

						if (typeof val == 'function')
							val = val();

						results=val;
						i++;

						//loop each function output

							setTimeout(()=>{
								textarea.innerHTML = textarea.innerHTML+"<br/>"+val;
								document.getElementById('console-scroll').scrollTop = document.getElementById('console-scroll').scrollHeight;
							},124*i)

						});
*/
						//run director output

						setTimeout(()=>{
								textarea.innerHTML = textarea.innerHTML+"<br/>"+"\n"+"<br/>"+`<i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;</i>`;
								document.getElementById('console-scroll').scrollTop = document.getElementById('console-scroll').scrollHeight;
						},500+124*i)


				}catch(e){
					results = `	`+e.toString();
				}

				if (!commands[taValue])
					textarea.innerHTML = textarea.innerHTML+`<br/>`+results+`<br/>`+`<i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;</i>`;

				console.log(commands[taValue]())

				setEndOfContenteditable(evt.target);

				//document.getElementById('written').focus();

				if (evt.target.children[2])
					evt.target.children[2].remove();

				setTimeout(()=>{

					if (evt.target.children[2])
						evt.target.children[2].remove();

					document.getElementById('console-scroll').scrollTop = document.getElementById('console-scroll').scrollHeight;

				},124);

			},124);

}

window.SetColourTheme = ()=>{};


let writeToConsole_Swatches = '';

let img;

img = new Image();

img.style.display = "none";
img.crossOrigin = "Anonymous";



SetColourTheme =async ()=>{

	let vib = await new window.Vibrant(img,32,3);

	const Swatch = (type)=>{

		try{
		var sw = [
			'DarkMutedSwatch',
			'DarkVibrantSwatch',
			'LightMutedSwatch',
			'LightVibrantSwatch',
			'MutedSwatch',
			'VibrantSwatch'
		]

		return `rgb(${vib[sw[type]].rgb[0]},${vib[sw[type]].rgb[1]},${vib[sw[type]].rgb[2]})` || false;

	}	catch(e){

			return false;

		}

};

	const color = Swatch(0);
	const linkcolor = Swatch(2) || Swatch(3) || Swatch(5);

	writeToConsole_Swatches = [color,linkcolor];

	await document.body.insertAdjacentHTML( 'beforeend', (`<style>html {background:${color} !important;}</style>`));

	await Array.from(document.getElementsByTagName('a')).forEach(elm=>elm.style.color = linkcolor)

	writeToConsole_Swatches = ['done'];

};


img.onload = SetColourTheme;



let v = null;

window.theme = async function(){

	if (!v)
		require("./assets/js/Vibrant");

	let response = await image2base64("https://source.unsplash.com/random");

	document.body.style = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"data:image/png;base64,"+response});`;
	document.getElementsByTagName('footer')[0].style = `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${"data:image/png;base64,"+response});`

	img.src = "data:image/png;base64,"+response;

	document.body.append(img);

	return img;
};

window.theme();
