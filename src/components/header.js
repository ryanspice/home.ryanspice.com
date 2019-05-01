//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Header extends AsyncView {

	constructor(){

		return super({
			type:`header`,
			style:`padding:2rem;padding-top:4.5rem;padding-bottom:2.5rem;max-width:1080px;margin:0px auto;color:rgba(225,225,225,255);`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();
			},
			innerHTML:`

				<style>
					header * {

						text-shadow: 1px 1px 60px rgba(0, 0, 0, 1);
						position:relative;
						z-index:5;

  					-webkit-touch-callout: none; /* iOS Safari */    -webkit-user-select: none; /* Safari */     -khtml-user-select: none; /* Konqueror HTML */       -moz-user-select: none; /* Firefox */        -ms-user-select: none; /* Internet Explorer/Edge */            user-select: none;

					}
					header span {
						display:inline-block;
						float:right;
					}

					header svg {
						float:right;
						margin:2rem;
						margin-top:2.6rem;
						cursor:pointer;
					}

					header h2 {
						display:inline-block;
						margin-right:1rem;

					}

					header h2 {
						color:rgba(225,225,225,255);

						display:inline-block;
						position:relative;top:0.3rem;

					}

					header ul {
						display:inline-block;
						margin:0px auto;
						font-size:2.25rem;
								min-width:220px;
								padding:0px;
					}

					header ul li a { color:rgba(225,225,225,255); }
					header ul li {
						display:inline-block;
						padding:1rem;
						top:3px;
						cursor:pointer;
					}

										header ul li:hover {
											//padding-bottom:200px;
										}


					header ul li div h5,
					header ul li div {
						display:block;
					}

					header ul li:hover {
						color:rgba(255,255,255,0.75);
					}

					.dropdown-content {

						margin: 0px;
						padding: 0px;
						display: none;
						position: absolute;
					  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
					  //padding: 12px 16px;
					  z-index: 1;
							border-radius: 1rem;
							box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);
					}

					.dropdown-content h5 a {color:black !important;}
					.dropdown-content h5 {
						min-width: 160px;
						padding-left:3rem;
						padding-right:3rem;
						padding-top:1rem;
						padding-bottom:1rem;
						margin:0px;
						font-size:2rem;
							border-radius: 1rem;
							box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);
					}
					.dropdown-content h5:hover{
						border-radius: 1rem;
						box-shadow: 1px 1px 60px rgba(0, 0, 0, 0.1);
						background:rgba(25,25,25,0.25);
						color:black;
						opacity:0.15 !important;
					}
					header ul li:hover .dropdown-content {

					  display: block;
					}

				</style>

				<h2>ryanspice.com</h2>

				<ul>

					<li>

						  apps

						  <div class="dropdown-content acrylic">

						    <h5 id="console-listItem" style="display:none;"><a style="color:rgba(225,225,225,255);"
									onclick="document.getElementById('console-listItem').style.display='none'; document.getElementById('console').classList.remove('slide-out-blurred-top'),document.getElementById('console').classList.remove('slide-out-blurred-minimize')">console</a></h5>

								<h5><a href="https://ryanspice.com/demo/asyncx/virtual-scroll.html" target="_blank" />virtual list</a></h5>

								<h5><a href="https://ryanspice.com/dev/newman/KevinNewmanHomeBannerVanillaJS-POC.html" target="_blank" />banner</a></h5>

						  </div>

					</li>

					<li>

						<a href="https://ryanspice.com/#games"> games </a>
						<!--
					  <div class="dropdown-content acrylic" disabled>
					    <h5><a href="#" />Bovxel</a></h5>
					    <h5><a href="#" />Dodgeball</a></h5>
					    <h5><a href="#" />FlappyFish</a></h5>
					    <h5><a href="#" />Fabagohey</a></h5>
					    <h5><a href="#" />KongQuest</a></h5>
					    <h5><a href="#" />ReverenceLost</a></h5>
					    <h5><a href="#" />SnowBoarding</a></h5>
					  </div>
						-->
					</li>

					<li>

						resume

					  <div class="dropdown-content acrylic">
					    <h5><a href="https://1drv.ms/b/s!AobiFvI3GaiduPQmp_PkmM0EdWh3cA">pdf</a></h5>
					    <h5><a href="https://1drv.ms/w/s!AobiFvI3Gaidtol5iCyf_RPjkbXWcg">docx</a></h5>
					  </div>

					</li>

					<li class="hidden">

						blog

					</li>

					<li>

						contact

					  <div class="dropdown-content acrylic">
					    <h5><a style="color:rgba(225,225,225,255);" href="mailto:contact@ryanspice.com" target="_self">email</a></h5>
							<h5><a style="color:rgba(225,225,225,255);" href="https://www.linkedin.com/in/ryan-spice-finnie-510a295b/" target="_blank">linkedin</a></h5>
							<h5><a style="color:rgba(225,225,225,255);" href="https://twitter.com/ryanspice?lang=en" target="_blank">twitter</a></h5>
					    <h5><a style="color:rgba(225,225,225,255);" href="https://github.com/ryanspice" target="_blank">github</a></h5>
					  </div>

					</li>
				</ul>

				<span>
				<a href="https://github.com/ryanspice" target="_blank"><i data-feather="github" style="margin-right:0rem;"></i></a>
					<a href="https://twitter.com/ryanspice?lang=en" target="_blank"><i data-feather="twitter" ></i></a>
					<a href="https://www.linkedin.com/in/ryan-spice-finnie-510a295b/" target="_blank"><i data-feather="linkedin" ></i></a>
				</span>

				`

		});
	}

}

export default new Header()
