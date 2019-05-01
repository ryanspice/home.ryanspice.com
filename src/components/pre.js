//@flow

import messages from "../messages";

import {
	AsyncView
} from "../entry";

class Pre extends AsyncView {

	constructor(){

		return super({

				type:`pre`,
				style:`    font-family: monospace;
	    white-space: pre;padding:2rem;display:block;min-width:320;max-width:780px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();

			},
			innerHTML:`
Usage: [command]

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
	<a href="javascript:openInNewWindow('${messages.links['snow'].link}');">snow</a>                                a canvas particle example
	<a href="javascript:openInNewWindow('${messages.links['rain'].link}');">rain</a>                                a canvas particle example
	<a href="https://ryanspice.com/background/" target="_blank">mountains</a>                           a canvas animated background
	<a href="javascript:openInNewWindow('${messages.links['Async2018-VirtualScroll'].link}');">virtual-scroll</a>                      a list component with only X number of elements, async2018

 Boilerplates / Frameworks:

	<a href="${messages.links['Async2018'].link}" target="_blank">Async2018</a>                           my take on a modern JS framework
	<a href="${messages.links['Home'].link}" target="_blank">Home</a>                                this page based off of Async2018 which used BabelBoilerplate
	<a href="${messages.links['SpiceJS-2016'].link}" target="_blank">SpiceJS-2016</a>                        a canvas based 2D game engine based on prototype inheritence
	<a href="${messages.links['SpiceJS'].link}" target="_blank">SpiceJS</a>                             a canvas based 2D game engine based on ES6
	<a href="${messages.links['WebpackBabelFlowBoilerplate'].link}" target="_blank">WebpackBabelFlowBoilerplate</a>         webpack 4 + babel 7 + flowtype
	<a href="https://ryanspice.com/mapper/" target="_blank">WinJS Mock UI</a>


 Games:

	<a href="javascript:openInNewWindow('${messages.links['Tetris'].link}');">Tetris</a>
	<a href="javascript:openInNewWindow('${messages.links['Bovxel'].link}');">Bovxel</a>
	<a href="javascript:openInNewWindow('${messages.links['Dodgeball'].link}');">Dodgeball</a>
	<a href="https://ryanspice.com/minesweeper/" target="_blank">Minesweeper</a>
	<a href="javascript:openInNewWindow('${messages.links['FlappyFish'].link}');">FlappyFish</a>
	<a href="javascript:openInNewWindow('${messages.links['Fabagohey'].link}');">Fabagohey</a>
	<a href="javascript:openInNewWindow('${messages.links['KongQuest'].link}');">KongQuest</a>
	<a href="javascript:openInNewWindow('${messages.links['ReverenceLost'].link}');">ReverenceLost</a>
	<a href="javascript:openInNewWindow('${messages.links['SnowBoarding'].link}');">SnowBoarding</a>


 Contributions:

	<a href="${messages.links['esdoc-babel-plugin'].link}" target="_blank" >esdoc-babel-plugin</a>                  update dependencies for Babel7
	<a href="${messages.links['babel-boilerplate'].link}" target="_blank" >babel-boilerplate</a>                   babel 7 + webpack 4
	<a href="${messages.links['ng4+lightnin'].link}" target="_blank" >ng4+lightning</a>
	<a href="${messages.links['vuejs-webpack4'].link}" target="_blank" >vuejs-webpack4</a>                      vuejs + babel 7 + webpack 4
            `

		});
	}

}
/*

Options:

	-h, --help                          output usage information
	-info                               details on the project

 */
export default new Pre()
