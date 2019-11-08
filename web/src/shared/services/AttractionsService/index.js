import API from "../../api";

class AttractionsService {

	getData(params) {
		return API.get(`/attractions`, { params: params })
	}

	getAttractionsCategory() {
		return API.get(`/attraction-categories`)
	}

	getFilterConfig() {
		return API.get(`/configurations/search`)
	}



	getSimilarEvents(params) {
		return API.get(`/similar-events`, { params: params });
	}



}

export default new AttractionsService();
