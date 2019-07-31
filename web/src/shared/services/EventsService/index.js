import API from "../../api";

class EventsService {

	getData(params) {
		return API.get(`/events`, { params: params})
	}

	getEventDetails(params){
		return API.get(`/event-detail`,{ params : params})
	}
}

export default new EventsService();
