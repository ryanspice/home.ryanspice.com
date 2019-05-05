/*@flow*/

import {
	AsyncView
} from "../entry";

class Main extends AsyncView {
	type = `main`;
	renderTo = `body`;
	id = 'login';
}

export default new Main();
