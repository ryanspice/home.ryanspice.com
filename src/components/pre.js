//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Pre extends AsyncView {

	constructor(){

		return super({
			type:`pre`,
			style:`padding:2rem;display:block;min-width:512px;max-width:1080px;margin:0px auto;color:rgba(255,255,255,0.55);`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();
			},
			innerHTML:`
Usage: yarn start [application/games] [flags]

Displays help information.

Options:

  -h, --help                          output usage information

Commands :

  Applications

  -auth                               login to ryanspice.com admin panel
  [ERROR]

  Boilerplates / Frameworks

  -Async2018
  -SpiceJS
  -SpiceDocs
  -WebpackBabelFlowBoilerplate
  -BabelBoilerplate


  Games

  -SnowBoarding
  -KongQuest
  -Reverence Lost
  -Bovxel
  -Dodgeball

Visit https://github.com/ryanspice or;
Contact me at contact@ryanspice.com to learn more about what I can do.
				`

		});
	}

}

export default new Pre()
