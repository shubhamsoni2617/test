import API from "../../../shared/api";

class AgentService {

	getAgentsCountryNRegion() {
		return API.get(`agent-countries-regions`)
  }

  getAgents(params) {
		return API.get(`agents`,{params})
	}

	getVenues(params) {
		return API.get()
  }

  getVenuesCountryNRegion(params) {
		return API.get()
	}

}

export default new AgentService();
