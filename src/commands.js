
const command = (...args) => { return ()=> [...args]};
const commands = {

	//COMMANDS

	'login':command('please wait',()=>{return openInNewTab(messages.links.auth.link);},'done')

	,'yarn':command('you cannot actually run yarn;','or anything in this terminal for that matter', 'try "help"'),
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

	//Console Commands

	,'close':(evt)=>{window.Terminal.hide(evt);}
	,'minimize':(evt)=>{window.Terminal.minimize(evt);}
	,'maximize':(evt)=>{window.Terminal.maximize(evt);}

	//JAVASCRIPT SJS

	,'auth':command((evt)=>{openInNewTab(messages.links.auth.link); return ['opening']; },'done')
	,'animated-banner':command((evt)=>{ openInNewTab(messages.links.banner.link); return ['opening']; },'done')
	,'virtual-scroll':(evt)=>{openInNewTab('https://ryanspice.com/demo/asyncx/virtual-scroll.html'); return [msg.opening + " '" + 'https://ryanspice.com/demo/asyncx/virtual-scroll.html\''];}


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


	//GAMES

	,'Fabagohey':(evt)=>{openInNewTab('https://github.com/ryanspice/fabagohey'); return [msg.opening + " '" + 'https://github.com/ryanspice/fabagohey\''];}
	,'ReverenceLost':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=ReverenceLost'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=ReverenceLost\''];}
	,'KongQuest':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=KongQuest'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=KongQuest\''];}
	,'SnowBoarding':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=SnowBoarding'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=SnowBoarding\''];}
	,'FlappyFish':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=FlappyFish'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=FlappyFish\''];}
	,'Bovxel':(evt)=>{openInNewTab('https://ryanspice.com/game.php?game=Bovxel'); return [msg.opening + " '" + 'https://ryanspice.com/game.php?game=Bovxel\''];}
	,'Dodgeball (GameMaker)':(evt)=>{openInNewTab('https://ryanspice.com/Dodgeball/Dodgeball.zip'); return [msg.opening + " '" + 'https://ryanspice.com/Dodgeball/Dodgeball.zip\''];}


}

export default commands;
