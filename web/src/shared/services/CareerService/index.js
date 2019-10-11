import API from '../../api';

class CareerService {
  getStaticContent(params) {
    return API.get(`career/content`, { params });
  }

  getTestimonial() {
    return API.get(`career/testimonials`);
  }

  getJobListing() {
    return API.get(`career/get-jobs`);
  }

  getAreaOfInterest() {
    return API.get(`career/get-interest`);
  }

  getJobDetail(params) {
    return API.get(`career/get-job`, { params });
  }

  formSubmission(data) {
    return API.post(`career/submit-interest`, data);
  }

  uploadAttachement(files) {
    return API.post('service/upload', files);
  }
}

export default new CareerService();
