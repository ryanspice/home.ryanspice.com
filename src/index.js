//@flow

import log from "loglevel";

import AsyncTemplate from "./entry";

import {Main} from "./components/index";

import Header from "./components/header";
import Login from "./components/login";

import Introduction from "./components/introduction";
import Console from "./components/console";
import Pre from "./components/pre";
import Pre2 from "./components/pre2";

import Content from "./components/content";
import Footer from "./components/footer";

import LoginInput from "./components/login_input";

AsyncTemplate.pre = () => {

	log.setLevel(log.levels.WARN);

	log.debug(`debug enabled`);

};

AsyncTemplate.post = () => {

	document.getElementById('loader').style.display = "none";

	setTimeout(function(){

		document.getElementById('userinput_0').focus();

		log.debug(`focused`);

	}, 300);

};

window.onload = function onload(){

	window.auth = new AsyncTemplate();

};
