//@flow

import log from "loglevel";

import AsyncTemplate from "./entry";

AsyncTemplate.pre =async function(){

	require("./components");

	window['async-2018-mvc'].entry.sort((a,b)=>{return (a.sequence?a.sequence:0)-(b.sequence?b.sequence:0)});

	log.setLevel(log.levels.WARN);

	log.debug(`debug enabled`);

};

AsyncTemplate.post = () => {

};

window.onload = function onload(evt){

	window.home = new AsyncTemplate();

};
