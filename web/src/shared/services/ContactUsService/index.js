import API from '../../api';

class ContactUsService {
  getEnquiry() {
    return API.get(`contact-us/enquiry-categories`);
  }

  getContactDetail() {
    return API.get(`contact-us/details`);
  }

  getFaqs(params) {
    return API.get(`contact-us/faq`, { params });
  }

  formSubmission(data) {
    const options = {
      headers: { 'Content-Type': 'application/json' }
    };
    return API.post(`contact-us/store`, data, options);
  }

  uploadAttachement(files) {
    return API.post('attachments/upload', files);
  }
}

export default new ContactUsService();
