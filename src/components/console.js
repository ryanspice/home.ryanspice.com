//@flow

import Messages from "../messages";

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
function getCaretPosition(editableDiv) {
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
}
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
const directory = "~ryanspice.com\\users\\guest>";

const msg = {
	opening:'opening',
	links:[
		'https://github.com/ryanspice/async-2018',
		'https://ryanspice.com/demo/asyncx/virtual-scroll.html',
		'https://github.com/ryanspice/js.ryanspice.2018',
		'https://github.com/ryanspice/esdoc-babel-plugin',
		'https://github.com/ryanspice/vuejs-webpack4',
		'https://github.com/ryanspice/ng4-lightning-currency-compare',
		'https://github.com/ryanspice/babel-flow-webpack4-boilerplate',
		'https://github.com/ryanspice/fabagohey',
		'https://ryanspice.com/game.php?game=ReverenceLost',
		'https://ryanspice.com/game.php?game=KongQuest',
		'https://ryanspice.com/game.php?game=SnowBoarding',
		'https://ryanspice.com/game.php?game=FlappyFish',
		'https://ryanspice.com/game.php?game=Bovxel',
		'https://ryanspice.com/Dodgeball/Dodgeball.zip'
	]
}

const command = (...args) => { return ()=> [...args]};
const commands = {

	//COMMANDS

	'auth':command('please wait',()=>{

		openInNewTab('http://auth.ryanspice.com/')
		return 'opening auth.ryanspice.com';},'done'),

	'yarn':command('you cannot actually run yarn;','or anything in this terminal for that matter', 'try "help"'),
	'yarn start':()=>{

		return [
			'error Command "start" not found.',
			'try running "help"'
		];
	},
	'help':()=>{

		return [

		`Usage: yarn start [application/game] [flags]`,
		``,
		`Displays help information.`,
		``,
		`Options`,
		``,
		`-h, --help                          output usage information`,
		`-info                               details on the project`,
		``,
		`Commands`,
		``,
		`Applications:`,
		``,
		`auth                                login to ryanspice.com admin panel`,
		``,
		`Boilerplates / Frameworks:`,
		``,
		`Async2018                           my take on a modern JS framework`,
		`SpiceJS                             a canvas based 2D game engine`,
		`SpiceDocs                           a document boilerplate`,
		`WebpackBabelFlowBoilerplate         webpack 4 + babel 7 + flowtype`,
		`BabelBoilerplate                    webpack 4 + babel 7`,
		``,
		``,
		`Games:`,
		``,
		`SnowBoarding`,
		`KongQuest`,
		`Reverence Lost`,
		`Bovxel`,
		`Dodgeball`,
		``,
		``,
		``,
		`Visit https://github.com/ryanspice or;`,
		`Contact me at contact@ryanspice.com to learn more about what I can do.`,

		];
	},
	'theme':evt=>{

		SetColourTheme();

		return [writeToConsole_Swatches];
	},
	'image':(evt)=>{

		document.getElementsByTagName('footer')[0].style.backgroundImage = document.body.style.backgroundImage = '';
		document.getElementsByTagName('footer')[0].style.backgroundImage = document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://source.unsplash.com/random")';

		theme();

		return ['done'];
	}
	,'close':(evt)=>{document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.add('slide-out-blurred-top'); return ['done'];}
	,'minimize':(evt)=>{document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.add('slide-out-blurred-minimize'); return ['done'];}
	,'maximize':(evt)=>{document.getElementById('console').classList.add('slide-out-maximize'); return ['done'];}

	//BOILERPLATES / FRAMEWORKS

	,'Async2018':(evt)=>{openInNewTab('https://github.com/ryanspice/async-2018'); return [msg.opening + " '" + 'https://github.com/ryanspice/async-2018\''];}
	,'Async2018-VirtualScroll':(evt)=>{openInNewTab('https://ryanspice.com/demo/asyncx/virtual-scroll.html'); return [msg.opening + " '" + 'https://ryanspice.com/demo/asyncx/virtual-scroll.html\''];}
	,'Async2018-MapEditor':(evt)=>{openInNewTab('https://github.com/ryanspice/js.ryanspice.2018'); return [msg.opening + " '" + 'https://github.com/ryanspice/js.ryanspice.2018\''];}

	//CONTRIBUTIONS

	,'esdoc-babel-plugin':(evt)=>{openInNewTab('https://github.com/ryanspice/esdoc-babel-plugin'); return [msg.opening + " '" + 'https://github.com/ryanspice/esdoc-babel-plugin\''];}
	,'vuejs-webpack4':(evt)=>{openInNewTab('https://github.com/ryanspice/vuejs-webpack4'); return [msg.opening + " '" + 'https://github.com/ryanspice/vuejs-webpack4\''];}
	,'ng4+lightning':(evt)=>{openInNewTab('https://github.com/ryanspice/ng4-lightning-currency-compare'); return [msg.opening + " '" + 'https://github.com/ryanspice/ng4-lightning-currency-compare\''];}
	,'babel-boilerplate':(evt)=>{openInNewTab('https://github.com/ryanspice/babel-flow-webpack4-boilerplate'); return [msg.opening + " '" + 'https://github.com/ryanspice/babel-flow-webpack4-boilerplate\''];}

	,'animated-banner':(evt)=>{openInNewTab('https://ryanspice.com/dev/newman/KevinNewmanHomeBannerVanillaJS-POC.html'); return [msg.opening + " '" + 'https://github.com/ryanspice/babel-flow-webpack4-boilerplate\''];}

	//GAMES

	,'Fabagohey':(evt)=>{openInNewTab('https://github.com/ryanspice/fabagohey'); return [msg.opening + " '" + 'https://github.com/ryanspice/fabagohey\''];}
	,'ReverenceLost':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=ReverenceLost'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=ReverenceLost\''];}
	,'KongQuest':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=KongQuest'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=KongQuest\''];}
	,'SnowBoarding':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=SnowBoarding'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=SnowBoarding\''];}
	,'FlappyFish':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=FlappyFish'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=FlappyFish\''];}
	,'Bovxel':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=Bovxel'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=Bovxel\''];}
	,'Dodgeball (GameMaker)':(evt)=>{openInNewTab('https://ryanspice.com/Dodgeball/Dodgeball.zip'); return [msg.opening + " '" + 'https://ryanspice.com/Dodgeball/Dodgeball.zip\''];}


}

// ES6


let writeToConsole = function(evt){

			let textarea= evt.target.children[0];

			let taLength = textarea.innerText.length;
			if (taLength<27)
			evt.target.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,255);" ><i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;</i>yarn start</span><span id="blinking-cursor" contenteditable="false">_</span>`;


			setTimeout(()=>{

				let taValue = textarea.innerText.split(directory)[textarea.innerText.split(directory).length-1];
				taValue = taValue.trim();
				last.push(taValue);
				//console.log(taValue);

			//	if (taLength>12)
				//	textarea.innerText = directory;

				let results = null;
				let i = 0;
				try{
					results = "";
					(commands[taValue]()).forEach(val=>{

							if (typeof val == 'function')
								val = val();


						results=val;
						i++;

						//loop each function output

							setTimeout(()=>{
								textarea.innerHTML = textarea.innerHTML+"<br/>"+val;
								document.getElementById('console-scroll').scrollTop = document.getElementById('console-scroll').scrollHeight;
							},100*i)

						});

						//run director output

						setTimeout(()=>{
								textarea.innerHTML = textarea.innerHTML+"<br/>"+"\n"+"<br/>"+`<i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;</i>`;
								document.getElementById('console-scroll').scrollTop = document.getElementById('console-scroll').scrollHeight;
						},500+100*i)

				}catch(e){
					results = `	`+e.toString();
				}

				if (!commands[taValue])
					textarea.innerHTML = textarea.innerHTML+`<br/>`+results+`<br/>`+`<i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;</i>`;

				setEndOfContenteditable(evt.target);

				//document.getElementById('written').focus();

				if (evt.target.children[2])
					evt.target.children[2].remove();

				setTimeout(()=>{

					if (evt.target.children[2])
						evt.target.children[2].remove();

					document.getElementById('console-scroll').scrollTop = document.getElementById('console-scroll').scrollHeight;

				},100);

			},100);

}

window.SetColourTheme = ()=>{};
let writeToConsole_Swatches = '';

let theme = async function(){
				await require("../Vibrant");
				let img = await new Image();
				img.style.display = "none";
				img.crossOrigin = "Anonymous";
				img.onload = async ()=>{
				    var width = img.width,
				    height = img.height;
						let vib = await new window.Vibrant(img,32,3);

						SetColourTheme = ()=>{

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

							}


						let color = Swatch(0);
						let linkcolor = Swatch(2) || Swatch(3) || Swatch(5);

						writeToConsole_Swatches = [color,linkcolor];
						console.log(color);
						document.body.insertAdjacentHTML( 'beforeend', (`<style>html {background:${color} !important;}*{
							transition: all 0.3s ease;

						}</style>`));

						Array.from(document.getElementsByTagName('a')).forEach(elm=>elm.style.color = linkcolor)

						writeToConsole_Swatches = ['done'];
					};
				}

				img.src = 'https://source.unsplash.com/random';

				await document.body.append(img);
				console.log(img);
			return img;
};

import {
	AsyncView
} from "../entry";


let lastIndex = 0;
const last = [

]

class Console extends AsyncView {

	constructor(){

		return super({
			type:`console`,
			style:`padding:2rem;display:block;max-width:1080px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:`console`,
			mounted:async ()=>{
				theme();


				window.Terminal = {
					running:false,
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
							writeToConsole(evt);

						}

					}
				}

			},
			innerHTML:`
			<div id ="" class="" style="border-radius: 1rem; border:1px solid rgba(25,25,25,0.25); background:rgba(25,25,25,0.25);    box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);">
			<div class="traffic-lights " style="padding-right:2.5rem;width:100%;position:absolute;top:0px;left:0px;height:6.5rem;font-size:4rem;background:rgba(25,25,25,0.25);text-align:right;">

				<button
					onclick="document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.toggle('slide-out-blurred-top')"
					class="traffic-light traffic-light-close" id="close"></button>

				<button
					onclick="document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.toggle('slide-out-blurred-minimize')"
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
				style="resize:vertical;overflow-y:auto;font-family:monospace, consolas;color:rgba(255,255,255,0.25);background:rgba(0,0,0,0.75);height:100%; margin-top:6.5rem;padding:1rem;" contenteditable spellcheck="false">

			<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,0.25);" ><i style="color:rgba(255,255,255,0.5)" contenteditable="false">${directory}&nbsp;</i></span><span id="blinking-cursor" contenteditable="false">_</span>

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
