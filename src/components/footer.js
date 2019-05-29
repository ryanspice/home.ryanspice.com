//@flow

import {
	AsyncView
} from "../entry";

class Footer extends AsyncView {
	sequence: any = 6;
	type: any = `footer`;
	style: any = ``;
	renderTo: any = `main`;
	className: any = ``;
	id: any = ``;
	mounted: any = () => {

		feather.replace();


	};
	innerHTML: any = ``;
}

export default new Footer()
