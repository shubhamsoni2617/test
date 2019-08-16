import API from "../../../shared/api";

class AgentService {

	getAgents() {
		return API.get()
	}

	getAgentsCountryNRegion(params) {
		return API.get()
	}

	getVenues(params) {
		return API.get()
  }

  getVenuesCountryNRegion(params) {
		return API.get()
	}

}

export default new AgentService();
