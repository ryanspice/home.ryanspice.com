//@flow


	/*

<a href="javascript:openInNewWindow('${messages.links['Async2018-VirtualScroll'].link}');">virtual-scroll</a>                      an AsyncX, list component which renders only X number of elements



	 */

import messages from "../data/messages";

import {
	AsyncView
} from "../entry";

const preLink = (name,url) => `<a href="${url}">${name}</a>`;

class Pre extends AsyncView {

	sequence:any = 4;
	type:string = `pre`;
	style:string =`font-family: monospace;
			white-space: pre;
			padding: 2.5rem;
			display: block;
			min-width: 320px;
			max-width: 780px;
			margin: 0 auto;
			color: rgba(255,255,255,0.55);
			font-size:85%;`
	renderTo:string = `main`;

	innerHTML:any = `
Usage: [command]

 Commands:

 Handmade, this console provides a CLI like experience for you to explore.
 Simply click on a link below, or type them in the console.


 Commands:

	close                               close window
	help                                display commands
	image                               generate new image
	maximize                            maximize window
	minimize                            minimize window
	restore                             restore window
	theme                               set the primary colours of this page based off the image

  Apps / Examples:

	<a href="javascript:openInNewWindow('${messages.links['auth'].link}');">auth</a>                                login to ryanspice.com admin panel
	<a href="javascript:openInNewTab('${messages.links['banner'].link}');">animated-banner</a>                     POC in vanilla JS for drawing moving shapes

  JavaScript Frameworks:

	<a href="${messages.links['Async2018'].link}" target="_blank">AsyncX</a>                              my take on a modern JS framework
	<a href="${messages.links['SpiceJS-2016'].link}" target="_blank">SpiceJS-2016</a>                        a canvas based 2D game engine based on prototype inheritence
	<a href="${messages.links['SpiceJS'].link}" target="_blank">SpiceJS</a>                             a canvas based 2D game engine based on ES6

  JavaScript Games:

	<a href="javascript:openInNewWindow('${messages.links['Tetris'].link}');">Tetris</a>                              a SpiceJS interpretation of Tetris
	<a href="https://ryanspice.com/minesweeper/" target="_blank">Minesweeper</a>                         a vanilla Js interpretation of minesweeper

	<a href="javascript:openInNewWindow('${messages.links['Bovxel'].link}');">Bovxel</a>                              a 2013 gamejam game designed to be used with the mouse
	<a href="javascript:openInNewWindow('${messages.links['FlappyFish'].link}');">FlappyFish</a>                          a SpiceJS game
	<a href="javascript:openInNewWindow('${messages.links['KongQuest'].link}');">KongQuest</a>                           a SpiceJS prototype
	<a href="javascript:openInNewWindow('${messages.links['ReverenceLost'].link}');">ReverenceLost</a>			    a 2016 reinterpretation of ReverenceLost in SpiceJS
	<a href="javascript:openInNewWindow('${messages.links['SnowBoarding'].link}');">SnowBoarding</a>

	<a href="javascript:openInNewWindow('${messages.links['Fabagohey'].link}');">Fabagohey</a>                           a SpiceJS prototype
	<a  href="javascript:openInNewWindow('${messages.links['Moon'].link}');" >Moon</a>                                sidescrolling platformer + animations + camera
	<a  href="javascript:openInNewWindow('${messages.links['Hackio'].link}');" >Hackio</a>                              "Keep it up" concept
	${preLink('Isomemtric', 'https://ryanspice.com/isometric/')}                          isometric tileset

	<a href="javascript:openInNewWindow('${messages.links['snow'].link}');">Snow</a>                                a canvas particle example
	<a href="javascript:openInNewWindow('${messages.links['rain'].link}');">Rain</a>                                a canvas particle example
	<a href="https://ryanspice.com/background/" target="_blank">Mountains</a>                           a canvas animated background

  GameMaker Classics:

	${preLink('The Years','https://www.64digits.com/user/StanMcgarvy/game/3262')}                           an ancient civ RTS, pre 2011
	<a href="javascript:openInNewWindow('${messages.links['Dodgeball'].link}');">Dodgeball</a>                           a Ryan Spice original, made in gamemaker pre-2011, <a href="https://www.64digits.com/user/StanMcgarvy/game/3194">original link</a>
	${preLink('Phwayne','https://www.64digits.com/user/StanMcgarvy/game/2473')}                             "Profesional" Puzzle

	${preLink('ColdUniverse','https://viblicent.wordpress.com/')}                        a map editor for an unreleased title, "Cold Raven" - <a href="http://ryanspice.com/legacy/gamemaker/ColdUniverse.7z">7z</a> / <a href="http://ryanspice.com/legacy/gamemaker/ColdUniverse.zip">zip</a>

  Websites

	<a href="http://backontrack.io/" target="_blank">backontrack.io</a>                      enterprise level web consulting
	<a href="https://ryanspice.com/legacy/jay/" target="_blank">jayyoung.ca</a>                         portfolio site

	<a href="${messages.links['Home'].link}" target="_blank">Home</a>                                this page based off of Async2018 which used BabelBoilerplate
	<a href="https://ryanspice.com/mapper/" target="_blank">WinJS Mock UI</a>                       an unfinished UI

	RyanSpice.Com                       <a href="https://ryanspice.com/legacy/R2/" target="_blank">R2</a>, <a href="https://ryanspice.com/legacy/R3/" target="_blank">R3</a>, <a href="https://ryanspice.com/legacy/R4/" target="_blank">R4</a>, <a href="https://ryanspice.com/legacy/R5/" target="_blank">R5</a>, <a href="https://ryanspice.com/legacy/R6/" target="_blank">R6</a>, <a href="https://ryanspice.com/legacy/R6.1/" target="_blank">R6.1</a>, <a href="https://ryanspice.com/RyanSpice2016.Com/" target="_blank">2016</a>, <a href="https://ryanspice.com/" target="_blank">2019</a>

  Contributions:

	<a href="${messages.links['esdoc-babel-plugin'].link}" target="_blank" >esdoc-babel-plugin</a>                  update dependencies for Babel7
	<a href="${messages.links['WebpackBabelFlowBoilerplate'].link}" target="_blank">babel-flow-boilerplate</a>              webpack 4 + babel 7 + flowtype
	<a href="${messages.links['babel-boilerplate'].link}" target="_blank" >vue-boilerplate</a>                     vuebabel 7 + webpack 4
	<a href="${messages.links['ng4+lightnin'].link}" target="_blank" >ng4+lightning</a>
            `;
};

export default new Pre();
