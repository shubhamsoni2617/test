import React from 'react';
import './style.scss';
import helpContent from '../../../../src/assets/images/still-img .png';

const StuckHelp = ({ content }) => {
  return (
    <section>
      <div className="container">
        <div className="help-wrapper">
          <div className="help-content">
            <h2>{content && content[4].title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: content && content[4].description
              }}
            ></p>
          </div>
          <div className="help-img">
            <img src={helpContent} alt="Call-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StuckHelp;
