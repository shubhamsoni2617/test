import API from "../../../shared/api";

class HomeService {
	
	
	getData() {
		
		return API.get(`search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`)	
	}	
}

export default new HomeService();
