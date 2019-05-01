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

	<a href="javascript:openInNewWindow('${messages.links['auth'].link}');">auth</a>                                login to ryanspice.com admin panel
	<a href="javascript:openInNewWindow('${messages.links['close'].link}');">close</a>                               close window
	<a href="javascript:openInNewWindow('${messages.links['help'].link}');">help</a>                                display commands
	<a href="javascript:openInNewWindow('${messages.links['image'].link}');">image</a>                               generate new image
	<a href="javascript:openInNewWindow('${messages.links['maximize'].link}');">maximize</a>                            maximize window
	<a href="javascript:openInNewWindow('${messages.links['minimze'].link}');">minimze</a>                             minimize window
	<a href="javascript:openInNewWindow('${messages.links['theme'].link}');">theme</a>                               set the primary colours of this page based off the image

 Boilerplates / Frameworks:

	<a href="javascript:openInNewWindow('${messages.links['Async2018'].link}');">Async2018</a>                           my take on a modern JS framework
	<a href="javascript:openInNewWindow('${messages.links['Async2018-VirtualScroll'].link}');">Async2018-VirtualScroll</a>             a list component with only X number of elements
	<a href="javascript:openInNewWindow('${messages.links['Home'].link}');">Home</a>                                this page based off of Async2018 which used BabelBoilerplate
	<a href="javascript:openInNewWindow('${messages.links['SpiceJS-2015'].link}');">SpiceJS-2015</a>                        a canvas based 2D game engine based on prototype inheritence
	<a href="javascript:openInNewWindow('${messages.links['SpiceJS'].link}');">SpiceJS</a>                             a canvas based 2D game engine based on ES6
	<a href="javascript:openInNewWindow('${messages.links['SpiceDocs'].link}');">SpiceDocs</a>                           a document boilerplate
	<a href="javascript:openInNewWindow('${messages.links['WebpackBabelFlowBoilerplate'].link}');">WebpackBabelFlowBoilerplate</a>         webpack 4 + babel 7 + flowtype


 Games:

	<a href="javascript:openInNewWindow('${messages.links['Bovxel'].link}');">Bovxel</a>
	<a href="javascript:openInNewWindow('${messages.links['Dodgeball'].link}');">Dodgeball</a>
	<a href="javascript:openInNewWindow('${messages.links['FlappyFish'].link}');">FlappyFish</a>
	<a href="javascript:openInNewWindow('${messages.links['Fabagohey'].link}');">Fabagohey</a>
	<a href="javascript:openInNewWindow('${messages.links['KongQuest'].link}');">KongQuest</a>
	<a href="javascript:openInNewWindow('${messages.links['ReverenceLost'].link}');">ReverenceLost</a>
	<a href="javascript:openInNewWindow('${messages.links['SnowBoarding'].link}');">SnowBoarding</a>


 Contributions:

	<a href="javascript:openInNewWindow('${messages.links['esdoc-babel-plugin'].link}');">esdoc-babel-plugin</a>                  update dependencies for Babel7
	<a href="javascript:openInNewWindow('${messages.links['babel-boilerplate'].link}');">babel-boilerplate</a>                   babel 7 + webpack 4
	<a href="javascript:openInNewWindow('${messages.links['ng4+lightnin'].link}');">ng4+lightning</a>
	<a href="javascript:openInNewWindow('${messages.links['vuejs-webpack4'].link}');">vuejs-webpack4</a>                      vuejs + babel 7 + webpack 4

	<a href="javascript:openInNewWindow('${messages.links['animated-banner'].link}');">animated-banner</a>                     POC in vanilla JS for drawing moving shapes`

		});
	}

}
/*

Options:

	-h, --help                          output usage information
	-info                               details on the project

 */
export default new Pre()
