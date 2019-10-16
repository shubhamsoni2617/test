import React, { useState, useEffect } from 'react';
import './style.scss';
import attach from '../../../assets/images/attach.svg';
import ContactUsService from '../../services/ContactUsService';

const Attachement = ({ attachedFiles, submit, mandatory }) => {
  const [files, setFiles] = useState({});
  const [maxFileLimitMsg, setMaxFileLimitMsg] = useState('');
  const [serverErr, setServerErr] = useState([]);

  useEffect(() => {
    if (submit) {
      setFiles({});
    }
  }, [submit]);

  const handleFiles = files => {
    console.log(files);
    setFiles({});
    setMaxFileLimitMsg('');
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
      setFiles(files);
      submitUploadAttachment(files);
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
              mandatory
                ? '.pdf,.doc,.docx,.txt:'
                : '.jpeg,.png,.pdf,.doc,.docx,.jpg'
            }
          />
        </div>
      </div>
      {maxFileLimitMsg && <p className="text-danger">{maxFileLimitMsg}</p>}
      {files && files[0] && <p>{files[0].name}</p>}
      {files && files[1] && <p>{files[1].name}</p>}
      {files && files[2] && <p>{files[2].name}</p>}
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
