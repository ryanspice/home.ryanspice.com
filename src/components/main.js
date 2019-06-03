/*@flow*/

import {
	AsyncView
} from "../entry";

class Main extends AsyncView {
	type = `main`;
	renderTo = `body`;
}

export default new Main();
