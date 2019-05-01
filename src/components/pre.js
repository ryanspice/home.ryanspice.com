//@flow

import Messages from "../messages";

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

	<a href="#">auth</a>                                login to ryanspice.com admin panel
	<a href="#">close</a>                               close window
	<a href="#">help</a>                                display commands
	<a href="#">image</a>                               generate new image
	<a href="#">maximize</a>                            maximize window
	<a href="#">minimze</a>                             minimize window
	<a href="#">theme</a>                               set the primary colours of this page based off the image

 Boilerplates / Frameworks:

	<a href="#">Async2018</a>                           my take on a modern JS framework
	<a href="#">Async2018-VirtualScroll</a>             a list component with only X number of elements
	<a href="#">Home</a>                                this page based off of Async2018 which used BabelBoilerplate
	<a href="#">SpiceJS-2015</a>                        a canvas based 2D game engine based on prototype inheritence
	<a href="#">SpiceJS</a>                             a canvas based 2D game engine based on ES6
	<a href="#">SpiceDocs</a>                           a document boilerplate
	<a href="#">WebpackBabelFlowBoilerplate</a>         webpack 4 + babel 7 + flowtype


 Games:

	<a href="#">Bovxel</a>
	<a href="#">Dodgeball</a>
	<a href="#">FlappyFish</a>
	<a href="#">Fabagohey</a>
	<a href="#">KongQuest</a>
	<a href="#">ReverenceLost</a>
	<a href="#">SnowBoarding</a>


 Contributions:

	<a href="#">esdoc-babel-plugin</a>                  update dependencies for Babel7
	<a href="#">babel-boilerplate</a>                   babel 7 + webpack 4
	<a href="#">ng4+lightning</a>
	<a href="#">vuejs-webpack4</a>                      vuejs + babel 7 + webpack 4

	<a href="#">animated-banner</a>                    POC in vanilla JS for drawing moving shapes`

		});
	}

}
/*

Options:

	-h, --help                          output usage information
	-info                               details on the project

 */
export default new Pre()
