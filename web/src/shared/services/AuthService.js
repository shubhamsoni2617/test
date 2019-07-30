import API from "../api";
class AuthService {
    token;
	constructor() {
	}
	
	login(data) {
		return API.post(`rest/V1/integration/customer/token`, data);		
    }	
    
    setToken(token){
        this.token = token;
        API.defaults.headers.common["authorization"] = "Bearer " + token;
    }

}

export default new AuthService();