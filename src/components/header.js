//@flow

import {
	AsyncView
} from "../entry";

class Header extends AsyncView {
	type: any = `header`;
	style: any = `padding:2rem;padding-top:4.5rem;padding-bottom:2.5rem;max-width:1080px;margin:0px auto;color:rgba(225,225,225,255);`;
	renderTo: any = `main`;
	className: any = ``;
	id: any = ``;
	mounted: any = () => {

		feather.replace();
	};
	innerHTML: any = `
		<h2>ryanspice.com</h2>

		<ul>

			<li>

				  apps

				  <div class="dropdown-content acrylic">

				    <h5 id="console-listItem" style="display:none;"><a style="color:rgba(225,225,225,255);"
							onclick="window.Terminal.restore(event)">console</a></h5>

						<h5><a href="https://ryanspice.com/demo/asyncx/virtual-scroll.html" target="_blank" />virtual list</a></h5>

						<h5><a href="https://ryanspice.com/dev/newman/KevinNewmanHomeBannerVanillaJS-POC.html" target="_blank" />banner</a></h5>

				  </div>

			</li>

			<li>

				<a href="https://ryanspice.com/?old#games"> games </a>
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
			    <h5><a href="https://home.ryanspice.com/assets/RyanSpice-Resume-2019-June.pdf">pdf</a></h5>
			    <h5><a href="https://home.ryanspice.com/assets/RyanSpice-Resume-2019-June.docx">docx</a></h5>
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

		`;

};

export default new Header()
