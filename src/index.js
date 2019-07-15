//@flow

/**
 * include utility functions and asynx
 * @type {[type]}
 */

//import utils from "utils";
import ax from "./entry";
const storage = window.ax = new ax.storage();
/**
 * requires the components folder
 *  - components are loaded automatically and are instanciated by 'sequence'
 * @param  {[type]} components [description]
 * @return {[type]}            [description]
 */

require("./components");

/**
 *  code executed to the templating engine before it runs
 */

ax.pre = async function(){

	window['async-2018-mvc'].entry.sort((a,b)=>{return (a.sequence?a.sequence:0)-(b.sequence?b.sequence:0)});
	if(document.getElementsByTagName('loader')[0])
		document.getElementsByTagName('loader')[0].remove();
};

/**
 *  code executed to the templating engine after it runs
 */

ax.post = async function(){

}

/**
 *  code to execute the templating engine onload
 * @param  {[type]} evt [description]
 * @return {[type]}     [description]
 */

window.onload =async function onload(evt){

	await storage.fetch('copy', '/en/copy/copy.json');
	window.home = await new ax();
	require("utils");

};
