import React, { Fragment, useState, useEffect } from 'react';
import './style.scss';
import attach from '../../../assets/images/attach.png';
import ContactUsService from '../../../shared/services/ContactUsService';
import { Link } from 'react-router-dom';
import Constants from '../../constants';
import Utilities from '../../utilities';

const Contact = ({ attachement, handleEnquiry }) => {
  const [enquiryCategory, setEnquiryCategory] = useState([]);
  const [enquiry, setEnquiry] = useState('Select an Enquiry *');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitResponse, setSubmitResponse] = useState([]);
  const [files, setFiles] = useState({});
  const [maxFileLimitMsg, setMaxFileLimitMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoaging] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchEnquiry();
  }, []);

  const fetchEnquiry = () => {
    ContactUsService.getEnquiry()
      .then(res => {
        if (res && res.data) {
          setEnquiryCategory(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      enquiry !== 'Select an Enquiry *' &&
      name &&
      email &&
      phone &&
      message
    ) {
      setLoaging(true);
      const check = Utilities.mobilecheck();
      const data = {
        category: Number(enquiry),
        name: name,
        email: email,
        contact_number: phone,
        message: message,
        source_from:
          check > Constants.MOBILE_BREAK_POINT
            ? Constants.SOURCE_FROM_WEBSITE
            : Constants.SOURCE_FROM_MOBILE_RESPONSIVE
      };
      submitForm(data);
    } else {
      setErrMsg('Please complete all fields');
    }
  };

  const submitForm = data => {
    ContactUsService.formSubmission(data)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setLoaging(false);
            setSubmitResponse(res.data);
            setEnquiry('Select an Enquiry *');
            setName('');
            setEmail('');
            setPhone('');
            setFiles({});
            setMessage('');
            setError(false);
          }, 1000);
        }
      })
      .catch(err => {
        if (err) {
          setError(true);
          setTimeout(() => {
            setSubmitResponse(err.response.data);
            setLoaging(false);
          }, 1000);
        }
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const allowOnlyNum = /^[0-9\b]+$/;
      if (value === '' || allowOnlyNum.test(value)) {
        setPhone(value);
      }
    } else {
      switch (name) {
        case 'enquiry':
          setEnquiry(value);
          handleEnquiry && handleEnquiry(value);
          break;
        case 'name':
          let val = value.trim();
          if (val.length > 0) {
            setName(value);
          } else {
            setName('');
          }
          break;
        case 'email':
          setEmail(value);
          break;
        case 'message':
          let msg = value.trim();
          if (msg.length > 0) {
            setMessage(value);
          } else {
            setMessage('');
          }
          break;
        default:
          return;
      }
    }
    setErrMsg('');
    setSubmitResponse([]);
    setLoaging(false);
    setError(false);
  };

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
    <Fragment>
      {submitResponse.map((elem, index) => {
        return (
          <h5 key={index} className={error ? 'text-danger' : 'text-success'}>
            {elem}
          </h5>
        );
      })}
      <form onSubmit={handleSubmit}>
        {/* <div className="form-group">
                  <select name="enquiry" className="form-control">
                    <option>Request Type*</option>
                  </select>
                </div> */}
        <div
          className={
            errMsg && enquiry === 'Select an Enquiry *'
              ? 'form-group err'
              : 'form-group'
          }
        >
          <select
            name="enquiry"
            className="form-control"
            onChange={handleChange}
            value={enquiry}
          >
            <option>Select an Enquiry *</option>
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
        <div className={errMsg && !name ? 'form-group err' : 'form-group'}>
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder={handleEnquiry ? 'Name*' : 'Full Name*'}
            value={name}
            onChange={handleChange}
            // required
          />
        </div>
        <div className={errMsg && !email ? 'form-group err' : 'form-group'}>
          <input
            name="email"
            className="form-control"
            type="email"
            placeholder={handleEnquiry ? 'Email Address *' : 'Email*'}
            value={email}
            onChange={handleChange}
            // required
          />
        </div>
        <div className={errMsg && !phone ? 'form-group err' : 'form-group'}>
          <input
            name="phone"
            className="form-control"
            type="text"
            placeholder={handleEnquiry ? 'Phone Number *' : 'Mobile No.*'}
            value={phone}
            maxLength={10}
            onChange={handleChange}
            // required
          />
        </div>
        <div className={errMsg && !message ? 'form-group err' : 'form-group'}>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Message *"
            cols="30"
            value={message}
            onChange={handleChange}
            // required
          />
        </div>
        {attachement && (
          <div className="form-group attach-doc">
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
          </div>
        )}
        {errMsg ? <span className="error-msg">{errMsg}</span> : null}
        <input
          className="form-control btn-info"
          type="submit"
          value={loading ? 'Submitting...' : 'Submit'}
          disabled={loading ? true : false}
        />
        {!handleEnquiry && (
          <span className="help-text">
            Looking to sell tickets with us? Contact us{' '}
            <Link to="/contact-us">here</Link>.
          </span>
        )}
      </form>
    </Fragment>
  );
};

export default Contact;
