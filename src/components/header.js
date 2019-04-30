//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Header extends AsyncView {

	constructor(){

		return super({
			type:`header`,
			style:`padding:2rem;padding-top:4.5rem;padding-bottom:2.5rem;max-width:1080px;margin:0px auto;color:white;`,
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

					header a {

						display:inline-block;

					}

					header a h2 {

						color:white;

						display:inline-block;
						position:relative;top:2px;

					}

					header ul {
						display:inline-block;
						margin:0px auto;
						font-size:2.25rem;
								min-width:220px;
								padding:0px;
					}

					header ul li {
						display:inline-block;
						padding:1rem;
						top:3px;
						cursor:pointer;
					}

										header ul li:hover {
											padding-bottom:200px;
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
				<a>
					<h2>ryanspice.com</h2>
				</a>

				<ul>

					<li>

						  home

						  <div class="dropdown-content acrylic">
						    <h5><a style="color:white;"
									onclick="document.getElementById('console').classList.remove('slide-out-blurred-top'),document.getElementById('console').classList.remove('slide-out-blurred-minimize')">console</a></h5>
						  </div>

					</li>

					<li>

						applications

					</li>

					<li>

						resume

					  <div class="dropdown-content acrylic">
					    <h5>pdf</h5>
					    <h5>docx</h5>
					  </div>

					</li>

					<li>

						blog

					</li>

					<li>

						contact

					  <div class="dropdown-content acrylic">
					    <h5>info</h5>
							<h5><a style="color:white;" href="https://twitter.com/ryanspice?lang=en" target="_blank">twitter</a></h5>
					    <h5><a style="color:white;" href="https://www.linkedin.com/in/ryan-spice-finnie-510a295b/" target="_blank">linkedin</a></h5>
					    <h5><a style="color:white;" href="https://github.com/ryanspice" target="_blank">github</a></h5>
					  </div>

					</li>
				</ul>

				<span>
					<a href="https://twitter.com/ryanspice?lang=en" target="_blank"><i data-feather="twitter" ></i></a>
					<a href="https://www.linkedin.com/in/ryan-spice-finnie-510a295b/" target="_blank"><i data-feather="linkedin" ></i></a>
					<a href="https://github.com/ryanspice" target="_blank"><i data-feather="github" style="margin-right:0rem;"></i></a>
				</span>

				`

		});
	}

}

export default new Header()
