import API from "../../api";

class ContactUsService {

	getEnquiry() {
		return API.get(`contact-us/enquiry-categories`)
	}

	getContactDetail() {
		return API.get(`contact-us/details`)
  }

  getFaqs(params) {
		return API.get(`contact-us/faq`,{params})
	}

	formSubmission(data){
		return API.post(`contact-us/store`,data)
  }

  uploadAttachement(files){
    return API.post('attachments/upload',files)
  }

}

export default new ContactUsService();
