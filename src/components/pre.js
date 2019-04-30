//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Pre extends AsyncView {

	constructor(){

		return super({
			type:`pre`,
			style:`padding:2rem;display:block;min-width:512px;max-width:780px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();

			},
			innerHTML:`
Usage: yarn start [application/game] [flags]

Displays help information.

Options:

	-h, --help                          output usage information
	-info                               details on the project

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
	BabelBoilerplate                    webpack 4 + babel 7
	SpiceJS                             a canvas based 2D game engine
	SpiceDocs                           a document boilerplate
	WebpackBabelFlowBoilerplate         webpack 4 + babel 7 + flowtype


  Games:

	Bovxel
	Dodgeball
	KongQuest
	Reverence Lost
	SnowBoarding



Visit https://github.com/ryanspice or;
Contact me at contact@ryanspice.com to learn more about what I can do.
				`

		});
	}

}

export default new Pre()
