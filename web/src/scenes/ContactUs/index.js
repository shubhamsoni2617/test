import React, { Component } from 'react';
import './style.scss';
import ContactUsService from '../../shared/services/ContactUsService';
import { ReactComponent as Location } from '../../assets/images/location-blue.svg';
import attach from '../../assets/images/attach.png';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiry: "",
      name: "",
      email: "",
      phone: "",
      file: "",
      message: "",
      setErrorClass: false,
      enquiryCategory:[]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchEnquiry();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { enquiry, name, email, phone, file, message } = this.state;
    if (enquiry && name && email && phone && file && message) {
      console.log(this.state);
      const data = {
        category: enquiry,
        name: name,
        email: email,
        contact_number: phone,
        message: message
      };
      this.submitForm(data);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleFile = (e) => {
    const file = e.target.files[0];
    const sizeInMB = (file.size / (1024 * 1024));
    const fileSize = Math.round(sizeInMB * 1000) / 1000;
    if (fileSize > 5) {
      this.setState({ setErrorClass: true })
    } else {
      this.setState({ file: e.target.files[0] });
    }
  }

  fetchEnquiry = () => {
    ContactUsService.getEnquiry()
      .then((res) => {
        if(res && res.data)
        console.log(res.data.data);
        this.setState({enquiryCategory:res.data.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  submitForm = (data) => {
    ContactUsService.formSubmission(data)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { enquiry, name, email, phone, file, message, setErrorClass,enquiryCategory } = this.state;
    return (
      <div className="contact-us">
        <h1 className="text-center contact-us-header">Contact Us</h1>
        <div className="container main-context">
          <div className="row">
            <div className="col-lg-6 row-data">
              <h3 className="heading-text">Customer Enquiries</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <select name="enquiry" className="form-control" onChange={this.handleChange} value={enquiry}>
                    <option>Select an Enquiry</option>
                    {enquiryCategory && enquiryCategory.map((enq,index)=>{
                      return(
                        <option key={enq.id} value={enq.id}>{enq.name}</option>
                      )
                    })}
                    {/* <option value="no">No</option> */}
                  </select>
                </div>
                <div className="form-group">
                  <label>Name<span className="text-danger">*</span></label>
                  <input name="name" className="form-control" type="text" value={name} onChange={this.handleChange} required/>
                </div>
                <div className="form-group">
                  <label>Email Address<span className="text-danger">*</span></label>
                  <input name="email" className="form-control" type="text" value={email} onChange={this.handleChange} required/>
                </div>
                <div className="form-group">
                  <label>Phone Number<span className="text-danger">*</span></label>
                  <input name="phone" className="form-control" type="number" value={phone} onChange={this.handleChange} required/>
                </div>
                <div className="form-group">
                  <label>Message<span className="text-danger">*</span></label>
                  <textarea name="message" className="form-control" rows="5" cols="30" value={message} onChange={this.handleChange} required/>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      Attach Documents
                    </div>
                    <div className="col-lg-8">
                      <label htmlFor="file-upload" className="custom-file-upload  form-control text-right">
                        <img src={attach} height="20" width="20" />
                      </label>
                      <input id="file-upload" className="form-control" type="file" onChange={this.handleFile} accept=".jpeg,.png,.pdf" size="60" required/>
                      <p className={setErrorClass ? "text-danger" : ""}>*File Size should be maximum 5mb and it can be pdf,jpeg,png</p>
                    </div>
                  </div>
                </div>
                <input className="form-control btn-info" type="submit" value="Submit" />
              </form>
            </div>
            <div className="col-lg-4 row-data">
              <h3 className="heading-text">Find Us</h3>
              <div className="find-us-content row">
                <div className="img col-lg-2"><Location /></div>
                <div className="col-lg-6">
                  <h6 className="text">SISTIC.com Pte Ltd</h6>
                  <div>10 Eunos Road 8,#03-04,Singapore</div>
                  <div>Post Center Singapore 408600</div>
                  <a>Open in Maps</a>
                </div>
              </div>
              <div className="find-us-content row">
                <div className="img col-lg-2"></div>
                <div className="col-lg-6">
                  <h6 className="text ">+65 6348 5555</h6>
                  <div>Mon to Sat : 10pm-8pm</div>
                  <div>Sun and PH : 12pm-8pm</div>
                </div>
              </div>
              <div className="find-us-content">
                <div className="img"></div>
                <div className="text"></div>
              </div>
              <div className="find-us-content">
                <div className="img"></div>
                <div className="text"></div>
              </div>
              <div className="find-us-content">
                <div className="img"></div>
                <div className="text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
