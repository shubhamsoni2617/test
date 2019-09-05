import React, { Component } from 'react';
import './style.scss';
import ContactUsService from '../../shared/services/ContactUsService';
import attach from '../../assets/images/attach.png';
import FindUs from './FindUs';
import Faqs from './FAQs';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiry: "Select an Enquiry",
      name: "",
      email: "",
      phone: "",
      files: {},
      message: "",
      maxFileLimit: "",
      enquiryCategory: [],
      contactDetail: {},
      submitResponse:""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchEnquiry();
    this.fetchContactDetail()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { enquiry, name, email, phone, file, message } = this.state;
    if (enquiry && name && email && phone && message) {
      const data = {
        category: Number(enquiry),
        name: name,
        email: email,
        contact_number: phone,
        message: message,
      };
      this.submitForm(data);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value,submitResponse:"" })
  }

  handleFile = (e) => {
    const { files } = e.target;
    const filesLength = files.length;
    let fileSize = 0;
    for (let key in files) {
      if (files.hasOwnProperty(key)) {
        fileSize = fileSize + files[key].size;
      }
    }
    const sizeInMB = (fileSize / (1024 * 1024));
    if (filesLength > 3 || sizeInMB > 5) {
      this.setState({ maxFileLimit: "Max 3 files can be uploaded, with up to 5MB size." })
    } else {
      this.submitUploadAttachment(files);
      this.setState({ maxFileLimit: "", files: files })
    }
    console.log(sizeInMB);
  }

  fetchEnquiry = () => {
    ContactUsService.getEnquiry()
      .then((res) => {
        if (res && res.data){
          this.setState({ enquiryCategory: res.data.data })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchContactDetail = () => {
    ContactUsService.getContactDetail()
      .then((res) => {
        if (res && res.data){
          this.setState({ contactDetail: res.data.data });
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  submitUploadAttachment = (files) => {
    let formData = new FormData();
    // const headers = {
    //   // "Content-Type": "multipart/form-data",
    //   "Content-Type": "application/json"
    // };
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append('files[' + i + ']', file);
    }
    ContactUsService.uploadAttachement(formData)
      .then((res) => {
        if (res && res.data){
          console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  submitForm = (data) => {
    ContactUsService.formSubmission(data)
      .then((res) => {
        if(res && res.data){
          console.log(res.data,"message");
          this.setState({submitResponse:res.data[0]});
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { enquiry, name, email, phone, files, message, maxFileLimit, enquiryCategory, contactDetail,submitResponse } = this.state;

    return (
      <div className="contact-us">
        <h1 className="text-center contact-us-header">Contact Us</h1>
        <div className="container main-context">
          <div className="row">
            <div className="col-lg-6 row-data">
              <h3 className="heading-text">Customer Enquiries</h3>
              <h5 className="text-success">{submitResponse}</h5>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <select name="enquiry" className="form-control" onChange={this.handleChange} value={enquiry}>
                    <option>Select an Enquiry</option>
                    {enquiryCategory && enquiryCategory.map((enq) => {
                      return (
                        <option key={enq.id} value={enq.id}>{enq.name}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label>Name<span className="text-danger">*</span></label>
                  <input name="name" className="form-control" type="text" value={name} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email Address<span className="text-danger">*</span></label>
                  <input name="email" className="form-control" type="email" value={email} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number<span className="text-danger">*</span></label>
                  <input name="phone" className="form-control" type="number" value={phone} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <label>Message<span className="text-danger">*</span></label>
                  <textarea name="message" className="form-control" rows="5" cols="30" value={message} onChange={this.handleChange} required />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      Attach Documents
                    </div>
                    <div className="col-lg-8">
                      {/* <label htmlFor="file-upload" className="custom-file-upload  form-control text-right">
                        <img src={attach} height="20" width="20" />
                      </label> */}
                      <input encType='multipart/form-data' id="file-upload" className="form-control" type="file" multiple onChange={this.handleFile} accept=".jpeg,.png,.pdf" />
                      <p>*File Size should be maximum 5mb and it can be pdf,jpeg,png</p>
                      <p className="text-danger">{maxFileLimit}</p>
                    </div>
                  </div>
                </div>
                <input className="form-control btn-info" type="submit" value="Submit" />
              </form>
            </div>
            <div className="col-lg-4 row-data">
              <FindUs contactDetail={contactDetail} />
            </div>
            <Faqs category={enquiry} />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
