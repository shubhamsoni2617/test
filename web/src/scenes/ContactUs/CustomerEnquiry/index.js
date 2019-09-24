import React, { useState, useEffect } from 'react';
import './style.scss';
import attach from '../../../assets/images/attach.png';
import ContactUsService from '../../../shared/services/ContactUsService';
import Constants from '../../../shared/constants';
import { useCustomWidth } from '../../../shared/components/CustomHooks';

const CustomerEnquiry = props => {
  const { enquiryCategory, sendCategoryToFaqs } = props;
  const [width] = useCustomWidth();

  const [enquiry, setEnquiry] = useState('Select an Enquiry');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitResponse, setSubmitResponse] = useState('');
  const [files, setFiles] = useState({});
  const [maxFileLimitMsg, setMaxFileLimitMsg] = useState('');

  useEffect(() => {
    sendCategoryToFaqs(enquiry);
  }, [enquiry]);

  const handleSubmit = e => {
    e.preventDefault();
    if (enquiry && name && email && phone && message) {
      const data = {
        category: Number(enquiry),
        name: name,
        email: email,
        contact_number: phone,
        message: message,
        source_from:
          width > Constants.MOBILE_BREAK_POINT
            ? Constants.SOURCE_FROM_WEBSITE
            : Constants.SOURCE_FROM_MOBILE_RESPONSIVE
      };
      submitForm(data);
    }
  };

  const submitForm = data => {
    ContactUsService.formSubmission(data)
      .then(res => {
        if (res && res.data) {
          setSubmitResponse(res.data[0]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'enquiry':
        setEnquiry(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
    setSubmitResponse('');
  };

  const handlePhone=(e)=>{
    const allowNumbersOnly = /^[0-9\b]+$/;
    if (e.target.value === '' || allowNumbersOnly.test(e.target.value)) {
      setPhone(e.target.value)
    }
  }

  const handleFile = e => {
    const { files } = e.target;
    const filesLength = files.length;
    let fileSize = 0;
    for (let key in files) {
      if (files.hasOwnProperty(key)) {
        fileSize = fileSize + files[key].size;
      }
    }
    const sizeInMB = fileSize / (1024 * 1024);
    if (filesLength > 3 || sizeInMB > 5) {
      setMaxFileLimitMsg('Max 3 files can be uploaded, with up to 5MB size.');
    } else {
      submitUploadAttachment(files);
      setMaxFileLimitMsg('');
      setFiles(files);
    }
  };

  const submitUploadAttachment = files => {
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
      .then(res => {
        if (res && res.data) {
          console.log(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="customer-enquiry-wrapper">
      <div className="customer-enquiry">
        <h3 className="heading-text">Customer Enquiries</h3>
        <h5 className="text-success">{submitResponse}</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              name="enquiry"
              className="form-control"
              onChange={handleChange}
              value={enquiry}
              required
            >
              <option value="Select an Enquiry">Select an Enquiry</option>
              {enquiryCategory &&
                enquiryCategory.map(enq => {
                  return (
                    <option key={enq.id} value={enq.id}>
                      {enq.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form-group">
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="Name*"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Email Address*"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              name="phone"
              className="form-control"
              type="text"
              placeholder="Phone Number*"
              value={phone}
              onChange={handlePhone}
              maxLength={10}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Message*"
              cols="30"
              value={message}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group attach-doc">
            <div className="row">
              <div className="col-lg-4 label pr-0">Attach Documents</div>
              <div className="col-lg-8">
                <label
                  htmlFor="file-upload"
                  className="custom-file-upload  form-control text-right"
                >
                  <img src={attach} height="20" width="20" />
                </label>
                <input
                  encType="multipart/form-data"
                  id="file-upload"
                  className="form-control"
                  type="file"
                  multiple
                  onChange={handleFile}
                  accept=".jpeg,.png,.pdf"
                />
                <span>
                  *File Size should be maximum 5mb and it can be pdf,jpeg,png
                </span>
                <span className="text-danger">{maxFileLimitMsg}</span>
              </div>
            </div>
          </div> */}
          <input
            className="form-control btn-info"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default CustomerEnquiry;
