import API from "../../api";

class EventsService {

	getData(params) {
		return API.get(`/events`, { params: params})
	}
	getFilterConfig(){
		return API.get(`/configurations/search`)
	}

}

export default new EventsService();
