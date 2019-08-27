import API from "../../../shared/api";

class AgentService {

	getAgentsCountryNRegion() {
		return API.get(`agent-countries-regions`)
  }

  getAgents(params) {
		return API.get(`agents`,{params})
	}

	getVenues(params) {
		return API.get(`venues-list`,{params})
  }

  getVenuesCountryNRegion() {
		return API.get(`venue-countries-regions`)
	}

}

export default new AgentService();
