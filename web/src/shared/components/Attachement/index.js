import React, { useState, useEffect } from 'react';
import './style.scss';
import attach from '../../../assets/images/attach.svg';
import ContactUsService from '../../services/ContactUsService';

const Attachement = ({ attachedFiles, submit, mandatory, cv }) => {
  const [maxFileLimitMsg, setMaxFileLimitMsg] = useState('');
  const [serverErr, setServerErr] = useState([]);
  let [fileArr, setFileArr] = useState([]);

  useEffect(() => {
    if (submit) {
      setFileArr([]);
    }
  }, [submit]);

  const handleFiles = files => {
    setMaxFileLimitMsg('');
    fileArr = [...fileArr, ...files];
    let fileArrLength = fileArr.length;
    for (let key in fileArr) {
      if (fileArr.hasOwnProperty(key)) {
        let fileSize = fileArr[key].size;
        let sizeInMB = fileSize / (1024 * 1024);
        if (sizeInMB > 5) {
          setMaxFileLimitMsg('files can be uploaded, with up to 5MB size.');
          setFileArr([]);
          return;
        }
      }
    }
    if (fileArrLength > 3) {
      setMaxFileLimitMsg('Max 3 files can be uploaded, with up to 5MB size.');
      setFileArr([]);
    } else {
      submitUploadAttachment(fileArr);
      setMaxFileLimitMsg('');
      setFileArr(fileArr);
    }
    setServerErr([]);
  };

  const submitUploadAttachment = files => {
    if (files.length) {
      let formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append('files[' + i + ']', file);
      }
      ContactUsService.uploadAttachement(formData)
        .then(res => {
          if (res && res.data) {
            attachedFiles(res.data.path);
          }
        })
        .catch(err => {
          if (err && err.response) {
            setServerErr(err.response.data.message);
          }
        });
    }
  };

  return (
    <div className="form-group attach-doc">
      <div className="row no-gutters">
        <div className="col-lg-4 col-5 pl-2">
          Attach Documents {mandatory && <span>*</span>}
        </div>
        <div className="col-lg-8 col-7 resume">
          <span className="placeholder">Resume/CV</span>
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
            onChange={e => handleFiles(e.target.files)}
            accept={
              mandatory || cv
                ? '.pdf,.doc,.docx,.txt:'
                : '.jpeg,.png,.pdf,.doc,.docx,.jpg'
            }
          />
        </div>
      </div>
      {maxFileLimitMsg && <p className="text-danger">{maxFileLimitMsg}</p>}

      {fileArr &&
        fileArr.map((file, i) => {
          return <p key={i}>{file.name}</p>;
        })}
      {serverErr &&
        serverErr.map(err => {
          return (
            <p key={err} className="text-danger">
              {err}
            </p>
          );
        })}
    </div>
  );
};

export default Attachement;
