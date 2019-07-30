import messages from "./messages";

const command = (...args) => {
	return () => [...args]
};
const commands = {

	//COMMANDS

	'login': command('please wait', () => {
			return openInNewTab(messages.links.auth.link);
		}, 'done')

		,
	'yarn': command('you cannot actually run yarn;', 'or anything in this terminal for that matter', 'try "help"'),
	'yarn start': () => {

		return [
			'error Command "start" not found.',
			'try running "help"'
		];
	},
	'dir': () => {

		return [
			'pictures', , 'videos', 'music', '404'
		];
	},
	'101011': () => {

		return [
			'42'
		];
	},
	'help': () => {

		return [

			`Usage: [command]`,
			``,
			`Launch any of the commands below`,
			``,
			`Visit https://github.com/ryanspice or;`,
			``,
			`Contact me at contact@ryanspice.com to learn more about what I can do.`,

		];
	},
	'theme': evt => {

		window.theme();

		return [writeToConsole_Swatches];
	},
	'image': (evt) => {

			document.getElementsByTagName('footer')[0].style.backgroundImage = document.body.style.backgroundImage = '';
			document.getElementsByTagName('footer')[0].style.backgroundImage = document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://source.unsplash.com/random")';

			theme();

			return ['done'];
		}

		//Console Commands

		,
	'close': (evt) => {
		window.Terminal.hide(evt);
	},
	'minimize': (evt) => {
		window.Terminal.minimize(evt);
	},
	'maximize': (evt) => {
		window.Terminal.maximize(evt);
	},
	'restore': (evt) => {
			window.Terminal.restore(evt);
		}

		//JAVASCRIPT SJS

		,
	'auth': (evt) => {
		openInNewTab(messages.links.auth.link);
		return [messages.opening + " " + messages.links.auth.link];
	},
	'animated-banner': (evt) => {
		openInNewTab(messages.links.banner.link);
		return [messages.opening + " '" + `${messages.links.banner.link}\'`];
	},
	'virtual-scroll': (evt) => {
			openInNewTab('https://ryanspice.com/demo/asyncx/virtual-scroll.html');
			return [messages.opening + " '" + 'https://ryanspice.com/demo/asyncx/virtual-scroll.html\''];
		}

		//BOILERPLATES / FRAMEWORKS

		,
	'async2018': (evt) => {
		openInNewTab('https://github.com/ryanspice/async-2018');
		return [messages.opening + " '" + 'https://github.com/ryanspice/async-2018\''];
	},
	'asyncx': (evt) => {
		openInNewTab('https://github.com/ryanspice/asyncx');
		return [messages.opening + " '" + 'https://github.com/ryanspice/asyncx\''];
	},
	'spicejs-2016': (evt) => {
		openInNewTab('https://www.npmjs.com/package/ryanspice2016-spicejs');
		return [messages.opening + " '" + 'https://www.npmjs.com/package/ryanspice2016-spicejs\''];
	},
	'spicejs': (evt) => {
			openInNewTab('https://github.com/ryanspice/spice.js');
			return [messages.opening + " '" + 'https://github.com/ryanspice/spice.js\''];
		}

		,
	'tetris': (evt) => {
		openInNewTab('https://ryanspice.com/Tetris/');
		return [messages.opening + " '" + 'https://ryanspice.com/Tetris/\''];
	},
	'snow': (evt) => {
		openInNewTab('https://ryanspice.com/examples/particles/');
		return [messages.opening + " '" + 'let it snow\''];
	},
	'rain': (evt) => {
		openInNewTab('https://ryanspice.com/rain/');
		return [messages.opening + " '" + 'let it rain\''];
	},
	'isometric': (evt) => {
		openInNewTab('https://ryanspice.com/isometric/');
		return [messages.opening + " '" + 'https://ryanspice.com/isometric/\''];
	},
	'mountains': (evt) => {
		openInNewTab('https://ryanspice.com/background/');
		return [''];
	},
	'minesweeper': (evt) => {
		openInNewTab('https://ryanspice.com/minesweeper/');
		return [''];
	},
	'webpackbabelflowboilerplate': (evt) => {
		openInNewTab('https://github.com/ryanspice/babel-flow-webpack4-boilerplate/');
		return [''];
	},
	'winjs mock ui': (evt) => {
			openInNewTab('https://ryanspice.com/mapper/');
			return [messages.opening + `'https://ryanspice.com/mapper/'`];
		}
		//	,'Async2018-MapEditor':(evt)=>{openInNewTab('https://github.com/ryanspice/js.ryanspice.2018'); return [messages.opening + " '" + 'https://github.com/ryanspice/js.ryanspice.2018\''];}

		,
	'jay': (evt) => {
		openInNewTab('https://ryanspice.com/legacy/jay/');
		return [messages.opening + " '" + 'https://ryanspice.com/legacy/jay/\''];
	}		,
		'jayyoung.ca': (evt) => {
			openInNewTab('https://ryanspice.com/legacy/jay/');
			return [messages.opening + " '" + 'https://ryanspice.com/legacy/jay/\''];
		}

		//CONTRIBUTIONS

		,
	'esdoc-babel-plugin': (evt) => {
		openInNewTab('https://github.com/ryanspice/esdoc-babel-plugin');
		return [messages.opening + " '" + 'https://github.com/ryanspice/esdoc-babel-plugin\''];
	},
	'vuejs-webpack4': (evt) => {
		openInNewTab('https://github.com/ryanspice/vuejs-webpack4');
		return [messages.opening + " '" + 'https://github.com/ryanspice/vuejs-webpack4\''];
	},
	'ng4+lightning': (evt) => {
		openInNewTab('https://github.com/ryanspice/ng4-lightning-currency-compare');
		return [messages.opening + " '" + 'https://github.com/ryanspice/ng4-lightning-currency-compare\''];
	},
	'babel-boilerplate': (evt) => {
			openInNewTab('https://github.com/ryanspice/babel-flow-webpack4-boilerplate');
			return [messages.opening + " '" + 'https://github.com/ryanspice/babel-flow-webpack4-boilerplate\''];
		}


		//GAMES

		,
	'fabagohey': (evt) => {
		openInNewTab('https://github.com/ryanspice/fabagohey');
		return [messages.opening + " '" + 'https://github.com/ryanspice/fabagohey\''];
	},
	'reverencelost': (evt) => {
		openInNewTab('https://ryanspice.com/game?game=ReverenceLost');
		return [messages.opening + " '" + 'https://ryanspice.com/game?game=ReverenceLost\''];
	},
	'kongquest': (evt) => {
		openInNewTab('https://ryanspice.com/game?game=KongQuest');
		return [messages.opening + " '" + 'https://ryanspice.com/game?game=KongQuest\''];
	},
	'snowboarding': (evt) => {
		openInNewTab('https://ryanspice.com/game?game=SnowBoarding');
		return [messages.opening + " '" + 'https://ryanspice.com/game?game=SnowBoarding\''];
	},
	'flappyfish': (evt) => {
		openInNewTab('https://ryanspice.com/game?game=FlappyFish');
		return [messages.opening + " '" + 'https://ryanspice.com/game?game=FlappyFish\''];
	},
	'bovxel': (evt) => {
		openInNewTab('https://ryanspice.com/game?game=Bovxel');
		return [messages.opening + " '" + 'https://ryanspice.com/game?game=Bovxel\''];
	},
	'dodgeball': (evt) => {
			openInNewTab('https://ryanspice.com/Dodgeball/Dodgeball.zip');
			return [messages.opening + " '" + 'https://ryanspice.com/Dodgeball/Dodgeball.zip\''];
		}


		,
	'moon': (evt) => {
		openInNewTab('https://ryanspice.com/abandoned/moon');
		return [messages.opening + " '" + 'https://ryanspice.com/abandoned/moon\''];
	},
	'hackio': (evt) => {
		openInNewTab('https://ryanspice.com/abandoned/hackio');
		return [messages.opening + " '" + 'https://ryanspice.com/abandoned/hackio\''];
	},
	'the years': (evt) => {
		openInNewTab('https://www.64digits.com/user/StanMcgarvy/game/3262');
		return [messages.opening + " '" + 'https://www.64digits.com/user/StanMcgarvy/game/3262\''];
	},
	'phwayne': (evt) => {
			openInNewTab('https://www.64digits.com/user/StanMcgarvy/game/2473');
			return [messages.opening + " '" + 'https://www.64digits.com/user/StanMcgarvy/game/2473\''];
		}

		,
	'colduniverse': (evt) => {
		openInNewTab('https://viblicent.wordpress.com/');
		return [messages.opening + " '" + 'https://viblicent.wordpress.com/\''];
	},
	'backontrack': (evt) => {
		openInNewTab('http://backontrack.io/');
		return [messages.opening + " '" + 'http://backontrack.io/\''];
	},
	'r2': (evt) => {
		openInNewTab('https://ryanspice.com/legacy/R2');
		return [messages.opening + " '" + 'https://ryanspice.com/legacy/R2\''];
	},
	'r3': (evt) => {
		openInNewTab('https://ryanspice.com/legacy/R3');
		return [messages.opening + " '" + 'https://ryanspice.com/legacy/R3\''];
	},
	'r4': (evt) => {
		openInNewTab('https://ryanspice.com/legacy/R4');
		return [messages.opening + " '" + 'https://ryanspice.com/legacy/R4\''];
	},
	'r5': (evt) => {
		openInNewTab('https://ryanspice.com/legacy/R5');
		return [messages.opening + " '" + 'https://ryanspice.com/legacy/R5\''];
	},
	'r6': (evt) => {
		openInNewTab('https://ryanspice.com/R6');
		return [messages.opening + " '" + 'https://ryanspice.com/R6\''];
	},
	'r6.1': (evt) => {
		openInNewTab('https://ryanspice.com/R6.1');
		return [messages.opening + " '" + 'https://ryanspice.com/R6.1\''];
	},
	'r6.1': (evt) => {
		openInNewTab('https://ryanspice.com/R6.1');
		return [messages.opening + " '" + 'https://ryanspice.com/R6.1\''];
	},
	'r7': (evt) => {
		openInNewTab('https://ryanspice.com/R7');
		return [messages.opening + " '" + 'https://ryanspice.com/R7\''];
	},
	'r8.1': (evt) => {
		openInNewTab('https://ryanspice.com/R8.1');
		return [messages.opening + " '" + 'https://ryanspice.com/R8.1\''];
	},
	'r2016': (evt) => {
		openInNewTab('httpshttps://ryanspice.com/RyanSpice2016.Com/bld');
		return [messages.opening + " '" + 'https://ryanspice.com/RyanSpice2016.Com/bld\''];
	},
	'r2019': (evt) => {
		openInNewTab('httpshttps://ryanspice.com/');
		return [messages.opening + " '" + 'https://ryanspice.com/\''];
	}



}

export default commands;
