import {
	AsyncView
}
from "../entry";
class Main extends AsyncView {

	constructor() {
		return super({
			type: `main`,
			style: `display:;`,
			renderTo: `body`,
			id: `login`,
			innerHTML: ``
		});
	}
}

export default new Main();
