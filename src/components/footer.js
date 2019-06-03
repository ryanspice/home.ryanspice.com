//@flow

import {
	AsyncView
} from "../entry";

class Footer extends AsyncView {

	sequence: any = 6;
	type: any = `footer`;
	renderTo: any = `main`;
	mounted: any = () => {

		feather.replace();

	};

}

export default new Footer();
