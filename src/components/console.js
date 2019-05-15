//@flow

import utils from "../utils";

import messages from "../messages";

require("../Vibrant");

let temp = '';

const directory = messages.directory;

const command = (...args) => { return ()=> [...args]};
const commands = {

	//COMMANDS

	'login':command('please wait',()=>{return openInNewTab(messages.links.auth.link);},'done'),
	'auth':command('please wait',()=>{return openInNewTab(messages.links.auth.link);},'done'),

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
	,'close':(evt)=>{document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.add('slide-out-blurred-top'); document.getElementById('console-listItem').style.display='block';return ['done'];}
	,'minimize':(evt)=>{document.getElementById('console').classList.remove('slide-out-maximize');document.getElementById('console').classList.add('slide-out-blurred-minimize'); document.getElementById('console-listItem').style.display='block';return ['done'];}
	,'maximize':(evt)=>{document.getElementById('console').classList.add('slide-out-maximize'); return ['done'];}

	//BOILERPLATES / FRAMEWORKS

	,'Async2018':(evt)=>{openInNewTab('https://github.com/ryanspice/async-2018'); return [msg.opening + " '" + 'https://github.com/ryanspice/async-2018\''];}
	,'async2018':(evt)=>{openInNewTab('https://github.com/ryanspice/async-2018'); return [msg.opening + " '" + 'https://github.com/ryanspice/async-2018\''];}
	,'SpiceJS-2016':(evt)=>{openInNewTab('https://www.npmjs.com/package/ryanspice2016-spicejs'); return [msg.opening + " '" + 'https://www.npmjs.com/package/ryanspice2016-spicejs\''];}
	,'SpiceJS':(evt)=>{openInNewTab('https://github.com/ryanspice/spice.js'); return [msg.opening + " '" + 'https://github.com/ryanspice/spice.js\''];}
	,'Tetris':(evt)=>{openInNewTab('https://ryanspice.com/Tetris/'); return [msg.opening + " '" + 'https://ryanspice.com/Tetris/\''];}
	,'tetris':(evt)=>{openInNewTab('https://ryanspice.com/Tetris/'); return [msg.opening + " '" + 'https://ryanspice.com/Tetris/\''];}
	,'snow':(evt)=>{openInNewTab('https://ryanspice.com/examples/particles/'); return [msg.opening + " '" + 'let it snow\''];}
	,'rain':(evt)=>{openInNewTab('https://ryanspice.com/rain/'); return [msg.opening + " '" + 'let it rain\''];}
	,'iso':(evt)=>{openInNewTab('https://ryanspice.com/isometric/'); return [msg.opening + " '" + 'https://ryanspice.com/isometric/\''];}
	,'virtual-scroll':(evt)=>{openInNewTab('https://ryanspice.com/demo/asyncx/virtual-scroll.html'); return [msg.opening + " '" + 'https://ryanspice.com/demo/asyncx/virtual-scroll.html\''];}
	,'mountains':(evt)=>{ return openInNewTab('https://ryanspice.com/background/'); }
	,'WebpackBabelFlowBoilerplate':(evt)=>{ return openInNewTab('https://github.com/ryanspice/babel-flow-webpack4-boilerplate/'); }
	,'WinJS Mock UI':(evt)=>{ return openInNewTab('https://github.com/ryanspice/babel-flow-webpack4-boilerplate'); }
//	,'Async2018-MapEditor':(evt)=>{openInNewTab('https://github.com/ryanspice/js.ryanspice.2018'); return [msg.opening + " '" + 'https://github.com/ryanspice/js.ryanspice.2018\''];}

	//CONTRIBUTIONS

	,'esdoc-babel-plugin':(evt)=>{openInNewTab('https://github.com/ryanspice/esdoc-babel-plugin'); return [msg.opening + " '" + 'https://github.com/ryanspice/esdoc-babel-plugin\''];}
	,'vuejs-webpack4':(evt)=>{openInNewTab('https://github.com/ryanspice/vuejs-webpack4'); return [msg.opening + " '" + 'https://github.com/ryanspice/vuejs-webpack4\''];}
	,'ng4+lightning':(evt)=>{openInNewTab('https://github.com/ryanspice/ng4-lightning-currency-compare'); return [msg.opening + " '" + 'https://github.com/ryanspice/ng4-lightning-currency-compare\''];}
	,'babel-boilerplate':(evt)=>{openInNewTab('https://github.com/ryanspice/babel-flow-webpack4-boilerplate'); return [msg.opening + " '" + 'https://github.com/ryanspice/babel-flow-webpack4-boilerplate\''];}

	,'animated-banner':command((evt)=>{ return openInNewTab(messages.links.banner.link);},'done')

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


window.writeToConsole = function(evt){

	let textarea= evt.target.children[0];
	let taLength = textarea.innerText.length;

	if (taLength<27)
			evt.target.innerHTML = `<span id="written" style="font-family:monospace, consolas;color:rgba(255,255,255,255);" ><i style="color:rgba(255,255,255,0.5)">${directory}&nbsp;</i>yarn start</span><span id="blinking-cursor" contenteditable="false">_</span>`;


			setTimeout(()=>{

				let taValue = textarea.innerText.split(directory)[textarea.innerText.split(directory).length-1];
				taValue = taValue.trim();
				last.push(taValue);

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

		let img = await new Image();

		img.style.display = "none";
		img.crossOrigin = "Anonymous";

		img.onload = async ()=>{

	    var width = img.width,
	    height = img.height;

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
			SetColourTheme();
		};

		img.src = 'https://source.unsplash.com/random';

		await document.body.append(img);

	return img;
};

import {
	AsyncView
} from "../entry";


let lastIndex = 0;
const last = [

]

class Console extends AsyncView {

	sequence:any = 3;
	type:any = `console`;
	style:any = `padding:2rem;display:block;min-height:20vh;max-width:1080px;margin:0px auto;color:rgba(255,255,255,0.55);`;
	renderTo:any = `main`;
	className:any = ``;
	id:any = `console`;
	mounted:any = async ()=>{

		theme();

	};
	innerHTML:any = `
	<div id ="" class="" style="border-radius: 1rem; border:1px solid rgba(25,25,25,0.25); background:rgba(25,25,25,0.25);    box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);">
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
