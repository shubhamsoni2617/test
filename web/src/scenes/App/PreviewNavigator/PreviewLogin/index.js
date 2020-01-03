import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PreviewLoginService from '../../../../shared/services/PreviewLoginService';
import loaderImage from '../../../../assets/images/sistic-loader.gif';
import './style.scss';
import { GlobalContext } from '../../store';

const Login = props => {
  const { reRender } = useContext(GlobalContext);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(reRender, 'reRenderreRenderreRender');

  const onChange = e => {
    setError('');
    setPassword(e.target.value);
  };
  useEffect(() => {
    let headers = {
      url: props.location.state.from.pathname.slice(1) || '/',
      password
    };
    if (submit) {
      setLoading(true);
      PreviewLoginService.getUser(headers)
        .then(res => {
          setLoading(false);
          if (res.data.data === 'Password is correct.') {
            props.handleAuth(
              props.location.state.from.pathname.slice(1) || '/'
            );
          } else {
            setLoading(false);
            setError('Enter Correct Password');
            setSubmit(false);
          }
        })
        .catch(res => {
          setLoading(false);
          setError('Enter Correct Password');
          setSubmit(false);
        });
    }
  }, [submit]);

  const { from } = props.location.state || { from: { pathname: '/' } };
  if (props.isAuthenticated === true) {
    return <Redirect to={from} />;
  }

  return (
    <div className="preview-form-wrapper">
      {loading && <img src={loaderImage} />}
      <div className="preview-login">
        <h5>You must enter password to view this page</h5>
        <input
          value={password}
          onChange={onChange}
          type="password"
          placeholder="Enter Password"
          className="form-control"
        />
        {error && <span className="error-msg">{error}</span>}
        <button
          onClick={() => {
            setSubmit(true);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
