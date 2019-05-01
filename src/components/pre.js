//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Pre extends AsyncView {

	constructor(){

		return super({
			type:`pre`,
			style:`padding:2rem;display:block;min-width:320;max-width:780px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();

			},
			innerHTML:`
Usage: [command] [flags]

Displays help information.
Flags are not implemented yet.

 Commands:

	auth                                login to ryanspice.com admin panel
	close                               close window
	help                                display commands
	image                               generate new image
	maximize                            maximize window
	minimze                             minimize window
	theme                               set the primary colours of this page based off the image

 Boilerplates / Frameworks:

	Async2018                           my take on a modern JS framework
	Async2018-VirtualScroll             a list component with only X number of elements
	Home                                this page based off of Async2018 which used BabelBoilerplate
	SpiceJS-2015                        a canvas based 2D game engine based on prototype inheritence
	SpiceJS                             a canvas based 2D game engine based on ES6
	SpiceDocs                           a document boilerplate
	WebpackBabelFlowBoilerplate         webpack 4 + babel 7 + flowtype


 Games:

	Bovxel
	Dodgeball
	FlappyFish
	Fabagohey
	KongQuest
	ReverenceLost
	SnowBoarding


 Contributions:

	esdoc-babel-plugion                 update dependencies for Babel7
	babel-boilerplate                   babel 7 + webpack 4
	ng4+lightning
	vuejs-webpack4                      vuejs + babel 7 + webpack 4

	animated-banner                  POC in vanilla JS for drawing moving shapes`

		});
	}

}
/*

Options:

	-h, --help                          output usage information
	-info                               details on the project

 */
export default new Pre()
