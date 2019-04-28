//@flow

import Messages from "../messages";

import {
	AsyncView
} from "../entry";

class Content extends AsyncView {

	constructor(){

		return super({
			type:`section`,
			style:`padding:1rem;padding-bottom:2.5rem;max-width:100rem;margin:0px auto;color:white;`,
			renderTo:`main`,
			className:``,
			id:``,
			mounted:()=>{

				  feather.replace();
			},
			innerHTML:`
				<style>
					section:first{

					}

					section h1:not(:first) {
						margin:25rem auto;
					}
					section h1 {
						font-size:8rem;
						text-align:center;
					}
					section p {
						background:rgba(25,25,25,0.25);
						max-width:1024px;
						margin:0px auto;
						font-size:4rem;
						text-align:center;
					}
				</style>



<!--


				<div class="row textWhite">
							<div class="large-12 small-12 columns add-margin " id="games">
								<h3 class="textWhite fontBlack">
									<a class="pNav" onclick="Main.Portfolio.Change(this)" id="gamesERs">Games</a>
									<span style="opacity:0.18;"> - </span>
									<a class="pNav hidden" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Applications</a>
									<span style="opacity:0.18;" class="hidden"> - </span>
									<a class="pNav" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Concepts</a>
									<span style="opacity:0.18;"> - </span>
									<a class="pNav" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Art</a>
									<span style="opacity:0.18;"> - </span>
									<a class="pNav" onclick="Main.Portfolio.Change(this)" style="opacity:0.18;">Audio</a>
								</h3>

								<div class="tile gametile">
									<img src="images/image_title_ReverenceLost.png">
									<h2>
										<sub>HTML5</sub>
										<a target="_blank" href="https://ryanspice.com/game.php?game=ReverenceLost"> Read More</a>
									</h2>
								</div>
								<div class="tile tileKong">
									<img src="images/image_title_KongQuest.png">
									<h2>
										<sub>HTML5</sub>
										<a target="_blank" href="https://ryanspice.com/game.php?game=KongQuest"> Read More</a>
									</h2>
								</div>
								<div class="tile gametileSnow">
									<img src="images/image_title_SnowBoarding.png">
									<h2>
										<sub> HTML5</sub>
										<a target="_blank" href="https://ryanspice.com/game.php?game=SnowBoarding"> Read More</a>
									</h2>
								</div>
								<div class="tile tileFish">
									<img src="images/image_title_FlappyFish.png">
									<h2>
										<sub>HTML5</sub>
										<a target="_blank" href="https://ryanspice.com/game.php?game=FlappyFish"> Read More</a>
									</h2>
								</div>
								<div class="tile tileBovxel">
									<img src="images/image_title_Bovxel.png">
									<h2>
										<sub>HTML5</sub>
										<a target="_blank" href="https://ryanspice.com/game.php?game=Bovxel"> Read More</a>
									</h2>
								</div>
								<div class="tile tileDodgeball">
									<img src="images/image_title_Dodgeball.png">
									<h2>
										<sub>GameMaker (Win32)</sub>
										<a target="_blank" href="https://ryanspice.com/Dodgeball/Dodgeball.zip"> Download</a>
									</h2>
								</div>
							</div>

							<span id="applications" style="display:none;">
								<div class="tiles" style="display:block !important;">
									<h2>
										<a href="#"> Read More</a>
									</h2>
								</div>
								<div class="tiles" style="display:block !important;">
									<h2>AudioIntel
										<a href="#"> Read More</a>
									</h2>
								</div>
								<div class="tiles" style="display:block !important;">
									<h2>FutureVault
										<a href="#"> Read More</a>
									</h2>
								</div>
								<div class="tiles" style="display:block !important;">
									<h2>JaTech Ecommerce
										<a href="#"> Read More</a>
									</h2>
								</div>
							</span>

							<span id="concepts"></span>

							<span id="art"></span>

				            <span id="soundcloud" style="display:none;"></span>

						</div>

















				<style>
													/*! CSS Used from: https://github.githubassets.com/assets/frameworks-f331a618befc2bf99be870c538f9ac95.css ; media=all */
									@media all{
									.pl-c{color:#6a737d;}
									.pl-c1{color:#005cc5;}
									.pl-e,.pl-en{color:#6f42c1;}
									.pl-smi{color:#24292e;}
									.pl-ent{color:#22863a;}
									.pl-k{color:#d73a49;}
									.pl-pds,.pl-s{color:#032f62;}
									.octicon{display:inline-block;fill:currentColor;vertical-align:text-top;}
									article{display:block;}
									a{background-color:transparent;}
									a:active,a:hover{outline-width:0;}
									strong{font-weight:inherit;font-weight:bolder;}
									h1{font-size:2em;margin:.67em 0;}
									svg:not(:root){overflow:hidden;}
									code,pre{font-family:monospace,monospace;font-size:1em;}
									::-webkit-input-placeholder{color:inherit;opacity:.54;}
									*{box-sizing:border-box;}
									a{color:#0366d6;text-decoration:none;}
									a:hover{text-decoration:underline;}
									strong{font-weight:600;}
									h1,h2,h3{margin-bottom:0;margin-top:0;}
									h1{font-size:32px;}
									h1,h2{font-weight:600;}
									h2{font-size:24px;}
									h3{font-size:20px;}
									h3{font-weight:600;}
									p{margin-bottom:10px;margin-top:0;}
									ul{margin-bottom:0;margin-top:0;padding-left:0;}
									code,pre{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;}
									pre{margin-bottom:0;margin-top:0;}
									.octicon{vertical-align:text-bottom;}
									.Box--condensed .Box-body{padding:8px 16px;}
									.Box-body{border-bottom:1px solid #e1e4e8;padding:16px;}
									.Box-body:last-of-type{border-bottom-left-radius:2px;border-bottom-right-radius:2px;margin-bottom:-1px;}
									:-ms-input-placeholder{color:#6a737d;}
									::-ms-input-placeholder{color:#6a737d;}
									::placeholder{color:#6a737d;}
									.p-5{padding:32px!important;}
									}
									/*! CSS Used from: https://github.githubassets.com/assets/github-aab0e3cd94d57631327dceb60c188704.css ; media=all */
									@media all{
									.markdown-body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:16px;line-height:1.5;word-wrap:break-word;}
									.markdown-body:before{content:"";display:table;}
									.markdown-body:after{clear:both;content:"";display:table;}
									.markdown-body>:first-child{margin-top:0!important;}
									.markdown-body>:last-child{margin-bottom:0!important;}
									.markdown-body .anchor{float:left;line-height:1;margin-left:-20px;padding-right:4px;}
									.markdown-body .anchor:focus{outline:none;}
									.markdown-body p,.markdown-body pre,.markdown-body ul{margin-bottom:16px;margin-top:0;}
									.markdown-body h1,.markdown-body h2,.markdown-body h3{font-weight:600;line-height:1.25;margin-bottom:16px;margin-top:24px;}
									.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link{color:#1b1f23;vertical-align:middle;visibility:hidden;}
									.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor{text-decoration:none;}
									.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link{visibility:visible;}
									.markdown-body h1{font-size:2em;}
									.markdown-body h1,.markdown-body h2{border-bottom:1px solid #eaecef;padding-bottom:.3em;}
									.markdown-body h2{font-size:1.5em;}
									.markdown-body h3{font-size:1.25em;}
									.markdown-body ul{padding-left:2em;}
									.markdown-body li{word-wrap:break-all;}
									.markdown-body li+li{margin-top:.25em;}
									.markdown-body code{background-color:rgba(27,31,35,.05);border-radius:3px;font-size:85%;margin:0;padding:.2em .4em;}
									.markdown-body pre{word-wrap:normal;}
									.markdown-body .highlight{margin-bottom:16px;}
									.markdown-body .highlight pre{margin-bottom:0;word-break:normal;}
									.markdown-body .highlight pre,.markdown-body pre{background-color:#f6f8fa;border-radius:3px;font-size:85%;line-height:1.45;overflow:auto;padding:16px;}
									@media print{
									p{page-break-inside:avoid;}
									.markdown-body h2{page-break-after:avoid;}
									}
									}
				</style>

				<div>
				<article class="markdown-body entry-content p-5" itemprop="text"><h1><a id="user-content-asynctemplatetorender" class="anchor" aria-hidden="true" href="#asynctemplatetorender"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/ryanspice/async-2018">AsyncTemplateToRender</a></h1>
				<p>AsyncTemplateToRender is a JavaScript library for building user interfaces which top down asynchronously.</p>
				<ul>
				<li><strong>Asynchronous:</strong> AsyncTemplateToRender creates a unique way to create interactive UI's by taking control of the DOM. Design component systems for your Web Frontend and have complete control over data. Each element is rendered individually and asynchronously.</li>
				<li><strong>Object-Based:</strong> Using the latest JavaScript (ES6/ES7) to scheme your UI, AsyncTemplateToRender's classes will map to elements providing minimal garbage when rendering/updating keeping data off the DOM.</li>
				<li><strong>You already know how to manipulate the DOM:</strong> If you're familar with JavasScript, ES6, Objects and the DOM, AsyncTemplateToRender is for you.</li>
				</ul>
				<p><a href="https://reactjs.org/docs/getting-started.html" rel="nofollow">Learn AsyncTemplateToRender today</a>.</p>
				<h2><a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>
				<p>AsyncTemplateToRender is designed to be used as a rendering engine for UI components.</p>
				<p><strong>Simply install the library and start creating UI</strong>!</p>
				<ul>
				<li><a href="https://github.com/ryanspice/async-2018">Add AsyncTemplateToRender to a Website</a> as a <code>&lt;script&gt;</code> tag in one minute.</li>
				<li><a href="https://www.npmjs.com/package/async.2018" rel="nofollow">Import AsyncTemplateToRender module</a> if you're looking to incorporate in a more powerful toolchain.</li>
				</ul>
				<p>You can use AsyncTemplateToRender as a <code>&lt;script&gt;</code> tag locally, or as a <code>AsyncTemplateToRender</code> package on <a href="https://www.npmjs.com/" rel="nofollow">npm</a>.</p>
				<h2><a id="user-content-usage--builtin-legacy-support" class="anchor" aria-hidden="true" href="#usage--builtin-legacy-support"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage &amp; BuiltIn Legacy Support</h2>
				<p>AsyncTemplateToRender optimizes bundles and will export both an ES6 and ES5 bundle: <strong>ATRender</strong>, and <strong>ATRender_legacy</strong> respectively.</p>
				<div class="highlight highlight-text-html-basic"><pre><span class="pl-c"><span class="pl-c">&lt;!--</span> Browsers know *not* to load this file <span class="pl-c">--&gt;</span></span>
				&lt;<span class="pl-ent">script</span> <span class="pl-e">async</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>module<span class="pl-pds">"</span></span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>ATRender.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;

				<span class="pl-c"><span class="pl-c">&lt;!--</span> Older browsers load this file <span class="pl-c">--&gt;</span></span>
				&lt;<span class="pl-ent">script</span> <span class="pl-e">nomodule</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>ATRender_legacy.js<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;

				<span class="pl-c"><span class="pl-c">&lt;!--</span> executed after HTML is parsed <span class="pl-c">--&gt;</span></span>
				&lt;<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>module<span class="pl-pds">"</span></span>&gt;<span class="pl-s1"></span>
				<span class="pl-s1">  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>js module<span class="pl-pds">'</span></span>);</span>
				<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;

				<span class="pl-c"><span class="pl-c">&lt;!--</span> executed immediately <span class="pl-c">--&gt;</span></span>
				&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
				<span class="pl-s1">  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>standard module<span class="pl-pds">'</span></span>);</span>
				<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;</pre></div>
				<p>ES6 bundle provides an optimized webpack output which will support modern browsers with features like <strong>classes</strong> and <strong>async/await</strong>.</p>
				<h2><a id="user-content-example" class="anchor" aria-hidden="true" href="#example"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>
				<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">ATRender</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>ATRender<span class="pl-pds">'</span></span>;

				<span class="pl-c"><span class="pl-c">//</span>predefine "view" style component</span>

				<span class="pl-k">class</span> <span class="pl-en">Login</span> <span class="pl-k">extends</span> <span class="pl-e">ATRenderer</span>.<span class="pl-smi">view</span> {

				 <span class="pl-en">constructor</span>(){

					<span class="pl-k">return</span> {
					 type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>section<span class="pl-pds">&#96;</span></span>,
					 renderTo<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>main<span class="pl-pds">&#96;</span></span>,
					 id<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>login_form<span class="pl-pds">&#96;</span></span>,
					 innerHTML<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span></span>
				<span class="pl-s">    &lt;a&gt;</span>
				<span class="pl-s">    &lt;h2&gt;Hello World/h2&gt;</span>
				<span class="pl-s">    &lt;/a&gt;</span>
				<span class="pl-s">   <span class="pl-pds">&#96;</span></span>
					};

				 }

				}

				<span class="pl-c"><span class="pl-c">//</span>predefine "input" component to render after Login</span>

				<span class="pl-k">class</span> <span class="pl-en">LoginInput</span> <span class="pl-k">extends</span> <span class="pl-e">ATRenderer</span>.<span class="pl-smi">view</span> {

				 <span class="pl-en">constructor</span>(){

					<span class="pl-k">return</span> {
					 type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>input<span class="pl-pds">&#96;</span></span>,
					 renderTo<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>login_form<span class="pl-pds">&#96;</span></span>,
					 className<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>form-control<span class="pl-pds">&#96;</span></span>,
					 id<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>userinput_0<span class="pl-pds">&#96;</span></span>
					};

				 }

				}

				<span class="pl-c"><span class="pl-c">//</span>render components as you create them</span>

				<span class="pl-k">new</span> <span class="pl-en">Login</span>();
				<span class="pl-k">new</span> <span class="pl-en">LoginInput</span>();

				<span class="pl-c"><span class="pl-c">//</span>render elements with objects</span>

				<span class="pl-k">new</span> <span class="pl-en">ATRender.pipe</span>([
					{
						type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>a<span class="pl-pds">&#96;</span></span>,
						id<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span><span class="pl-pds">&#96;</span></span>,
						innerHTML<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#96;</span>HelloWorld<span class="pl-pds">&#96;</span></span>
					}
				]);</pre></div>
				<p><em>AsyncTemplateToRender</em> will defer <strong>LoginInput</strong> to a second pass of rendering because it's target doesn't exist during the first pass. <em>AsyncTemplateToRender</em> supports recursive rendering, be aware that this can be slow and dangerous.</p>
				<h2><a id="user-content-documentation" class="anchor" aria-hidden="true" href="#documentation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>
				<p>N/A</p>
				<h3><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h3>
				<p>AsyncTemplateToRender is <a href="/ryanspice/async-2018/blob/master/LICENSE">MIT licensed</a>.</p>
				</article>
				</div>
-->
				`

		});
	}

}

export default new Content()
