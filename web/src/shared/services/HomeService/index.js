import API from "../../../shared/api";

class HomeService {
	constructor() {
	}
	
	
	getData() {
		
		return API.get(`rest/V1/customers/me/`)
			.then(response => {	
                debugger			
				console.log(response);
			})
			.catch(error => {
                debugger				
				console.log(error);
			});		
	}	
}

export default new HomeService();
