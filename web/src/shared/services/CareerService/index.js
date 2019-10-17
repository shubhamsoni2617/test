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

  getParticularJobDetail(params) {
    return API.get('career/get-job', { params });
  }

  applyJobFormSubmission(data) {
    return API.post(`career/apply-job`, data);
  }
}

export default new CareerService();
