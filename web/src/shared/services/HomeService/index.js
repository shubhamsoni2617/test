import API from "../../../shared/api";

class HomeService {

	getData() {
		return API.get(`search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`)	
	}	

	getNewsTicker(){
		return API.get(`rest/view/news-ticker`)
	}

	getGenre(){
		return API.get(`genres`)
	}
}

export default new HomeService();
