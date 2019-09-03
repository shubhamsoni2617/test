import API from "../../api";

class ContactUsService {

	getEnquiry() {
		return API.get(`contact-us/enquiry-categories`)
	}

	getContactDetail() {
		return API.get(`contact-us/details`)
	}

	formSubmission(data){
		return API.post(`contact-us/store`,data)
  }

  uploadAttachement(file){
    return API.post('attachments/upload',file)
  }

}

export default new ContactUsService();
