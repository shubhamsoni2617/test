import React, { Fragment, useState, useEffect } from 'react';
import './style.scss';
import attach from '../../../assets/images/attach.svg';
import ContactUsService from '../../../shared/services/ContactUsService';
import { Link } from 'react-router-dom';
import Constants from '../../constants';
import Utilities from '../../utilities';
import Select from '../SelectBox';

const Contact = ({ attachement, handleEnquiry }) => {
  const [enquiryCategory, setEnquiryCategory] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitResponse, setSubmitResponse] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [files, setFiles] = useState({});
  const [maxFileLimitMsg, setMaxFileLimitMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [headerErr, setHeaderErr] = useState('');
  const [CSRFToken, setCSRFToken] = useState('');
  const [filePath, setFilePath] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchEnquiry();
    fetchCSRFToken();
  }, []);

  const fetchCSRFToken = () => {
    ContactUsService.getCSRFToken()
      .then(res => {
        if (res && res.data) {
          setCSRFToken(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

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
    if (selectedId && name && email && phone && message) {
      setLoading(true);
      const isMobile = Utilities.mobilecheck();
      const data = {
        category: selectedId,
        name,
        email,
        contact_number: phone,
        message,
        attachment: filePath,
        source_from: isMobile
          ? Constants.SOURCE_FROM_MOBILE_RESPONSIVE
          : Constants.SOURCE_FROM_WEBSITE
      };
      submitForm(data, CSRFToken);
    } else {
      setErrMsg('Please complete all fields');
    }
  };

  const submitForm = (data, CSRFToken) => {
    ContactUsService.formSubmission(data, CSRFToken)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setLoading(false);
            setSuccessMsg(res.data.message);
            setSubmit(true);
            setSelectedId(null);
            handleEnquiry && handleEnquiry('Select an Enquiry');
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
        if (err && err.response.data === null) {
          setHeaderErr('Something went wrong ');
          setLoading(false);
        } else if (err && !err.response.data.message) {
          setError(true);
          setTimeout(() => {
            setSubmitResponse(err.response.data);
            setLoading(false);
          }, 1000);
        } else {
          setTimeout(() => {
            setHeaderErr(err.response.data.message);
            setLoading(false);
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
    setLoading(false);
    setError(false);
    setHeaderErr('');
    setFiles({});
    setSuccessMsg('');
  };

  const handleFile = e => {
    setFiles({});
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
    let fileArr = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      // fileArr.push(file);
      formData.append('file[' + i + ']', file);
    }
    ContactUsService.uploadAttachement(formData)
      .then(res => {
        if (res && res.data) {
          setFilePath(res.data.path);
        }
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const onSelect = values => {
    if (values && typeof values !== 'object') {
      let selectedId;
      enquiryCategory.filter(elem => {
        if (elem.name === values) {
          selectedId = Number(elem.id);
        }
      });
      setSelectedId(selectedId);
      handleEnquiry && handleEnquiry(selectedId);
    }
  };

  const onClickSubmit = () => {
    setSubmit(false);
    setSelectedId(null);
    handleEnquiry && handleEnquiry('Select an Enquiry');
  };

  return (
    <Fragment>
      {successMsg && <h5 className="text-success">{successMsg}</h5>}
      {submitResponse &&
        submitResponse.map((elem, index) => {
          return (
            <h5 key={index} className={error ? 'text-danger' : 'text-success'}>
              {elem}
            </h5>
          );
        })}
      {headerErr && <h5 className="text-danger">{headerErr}</h5>}
      <form onSubmit={handleSubmit}>
        <div
          className={
            errMsg && selectedId === null ? 'form-group err' : 'form-group'
          }
        >
          <Select
            submit={submit}
            options={submit ? [] : enquiryCategory}
            placeholder={
              handleEnquiry ? 'Select an Enquiry *' : 'Request type *'
            }
            onSelect={onSelect}
            onClickSubmit={onClickSubmit}
          // multiple
          />
        </div>
        {errMsg && selectedId === null ? (
          <span className="error-msg">Please select enquiry</span>
        ) : null}
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
        {errMsg && !name ? (
          <span className="error-msg">
            Please enter {handleEnquiry ? 'name' : 'full name'}
          </span>
        ) : null}
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
        {errMsg && !email ? (
          <span className="error-msg">
            Please enter {handleEnquiry ? 'email address' : 'email'}
          </span>
        ) : null}
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
        {errMsg && !phone ? (
          <span className="error-msg">
            Please enter {handleEnquiry ? 'phone' : 'mobile'} no.
          </span>
        ) : null}
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
        {errMsg && !message ? (
          <span className="error-msg">Please enter some messages</span>
        ) : null}
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
                  multiple={true}
                  onChange={handleFile}
                  accept=".jpeg,.png,.pdf,.doc,.docx,.jpg"
                />
                <span>
                  *File Size should be maximum 5mb and it can be pdf,jpeg,png
                </span>
                <p className="text-danger">{maxFileLimitMsg}</p>
                {files && files[0] && <p>{files[0].name}</p>}
                {files && files[1] && <p>{files[1].name}</p>}
                {files && files[2] && <p>{files[2].name}</p>}
              </div>
            </div>
          </div>
        )}
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
