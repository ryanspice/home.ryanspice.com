//@flow

// Libraries

import utils from "utils";
import ax from "./entry";

// Components

require("./components");

// Hooks

ax.pre = async function(){

	window['async-2018-mvc'].entry.sort((a,b)=>{return (a.sequence?a.sequence:0)-(b.sequence?b.sequence:0)});
	if(document.getElementsByTagName('loader')[0])
		document.getElementsByTagName('loader')[0].remove();
};

ax.post = () => {

};

window.onload = function onload(evt){

	window.home = new ax();

};
