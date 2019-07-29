import API from "../../api";

class EventsService {

	getData(headers) {
		console.log('headers', headers)
		return API.get(`/events?client=1`, {headers})	
	}
}

export default new EventsService();
