import React, { useState } from 'react';
import './style.scss';
import attach from '../../../assets/images/attach.png';

const Attachement = ({ attachedFiles }) => {
  const [files, setFiles] = useState({});
  const [maxFileLimitMsg, setMaxFileLimitMsg] = useState('');

  const handleFiles = files => {
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
      attachedFiles(files);
    }
  };

  return (
    <div className="form-group attach-doc">
      <div className="row no-gutters">
        <div className="col-lg-4 pl-2">Attach Documents</div>
        <div className="col-lg-8">
          Resume/CV
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
            accept=".jpeg,.png,.pdf,.doc,.docx,.jpg"
          />
        </div>
      </div>
      {maxFileLimitMsg && <p className="text-danger">{maxFileLimitMsg}</p>}
      {files && files[0] && <p>{files[0].name}</p>}
      {files && files[1] && <p>{files[1].name}</p>}
      {files && files[2] && <p>{files[2].name}</p>}
    </div>
  );
};

export default Attachement;
