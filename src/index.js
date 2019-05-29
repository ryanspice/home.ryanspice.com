//@flow

// Libraries

import utils from "utils";

import AsyncTemplate from "./entry";


const log = require('loglevel');

// Components

require("./components");

// AsyncX Runtime Hooks

AsyncTemplate.pre = async function(){

	window['async-2018-mvc'].entry.sort((a,b)=>{return (a.sequence?a.sequence:0)-(b.sequence?b.sequence:0)});

	log.setLevel(log.levels.WARN);

	log.debug(`debug enabled`);

};

AsyncTemplate.post = () => {

};

window.onload = function onload(evt){

	window.home = new AsyncTemplate();

};
