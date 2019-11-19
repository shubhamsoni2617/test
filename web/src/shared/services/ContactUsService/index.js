import API from '../../api';

class ContactUsService {
  getCSRFToken() {
    return API.get(`rest/session/token`);
  }

  getEnquiry(params) {
    return API.get(`contact-us/enquiry-categories`, { params });
  }

  getContactDetail() {
    return API.get(`contact-us/details`);
  }

  getFaqs(params) {
    return API.get(`contact-us/faq`, { params });
  }

  formSubmission(data, CSRFToken) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': CSRFToken
      }
    };
    return API.post(`contact-us/store`, data, options);
  }

  uploadAttachement(files) {
    return API.post('service/upload', files);
  }
}

export default new ContactUsService();
