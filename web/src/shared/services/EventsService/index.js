import API from "../../api";

class EventsService {

	getData(params) {
		return API.get(`/events`, { params: params})
	}
}

export default new EventsService();
