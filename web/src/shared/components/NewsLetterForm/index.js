import React, { Fragment, useState } from 'react';
import './style.scss';
import NewsLetterService from '../../services/NewsLetterService';
import sendImage from '../../../assets/images/send.svg';

const NewsLetterForm = ({ type }) => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoding] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [errColor, setErrColor] = useState(false);

  const handleEmail = event => {
    setEmail(event.target.value);
    setMsg('');
    setSuccessMsg('');
    setErrMsg('');
    setErrColor(false);
  };

  const handleSubmit = () => {
    if (!loading && email) {
      if (ValidateEmail(email)) {
        setLoding(true);
        submitForm(email);
      } else {
        setMsg('Enter valid email');
      }
    } else {
      setMsg('Please enter email');
    }
  };

  const submitForm = email => {
    const data = {
      email,
      type: type
    };
    NewsLetterService.newsLetterFormSubmission(data)
      .then(res => {
        if (res && res.data) {
          if (res.data.message) {
            setEmail('');
            setSuccessMsg(res.data.message);
            setLoding(false);
          } else {
            setErrColor(true);
            setLoding(false);
            setErrMsg(res.data);
          }
        }
      })
      .catch(err => {
        if (err && err.response) {
          setErrMsg(err.response.data[0]);
          setLoding(false);
        }
      });
  };

  const ValidateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <p className={errColor ? 'text-danger' : 'text-success'}>
        {successMsg || errMsg}
      </p>

      <div className="input-group">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          className="form-control"
          placeholder="Enter your email"
          aria-label="Username"
          aria-describedby="basic-addon1"
          required
        />
        <div className="input-group-prepend" onClick={handleSubmit}>
          <a className="input-group-text" id="basic-addon1">
            <img src={sendImage} className="img-fluid" alt="send" />
          </a>
        </div>
      </div>
      <p className="text-danger">{msg}</p>
    </Fragment>
  );
};

export default NewsLetterForm;
