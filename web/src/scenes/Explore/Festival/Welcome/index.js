import React, { Fragment, useState } from 'react';
import './style.scss';
import BreadcrumbSlug from '../../../../shared/components/BreadcrumbSlug';
import SocialShare from '../../../../shared/components/SocialShare';
import shareIcon from '../../../../assets/images/share-icon.svg';

const Welcome = ({ breadcrumbSlug, subtitle, title, description }) => {
  const [socialShare, setSocialShare] = useState(false);
  const handleSocialShare = () => {
    setSocialShare(!socialShare);
  };
  let shareUrl = window.location.href;
  return (
    <Fragment>
      <section>
        <div className="container-fluid">
          <div className="Home-tab ">
            <div className="explore-nav">
              <BreadcrumbSlug breadcrumbSlug={breadcrumbSlug} />
            </div>
            <div className="share-rightalign">
              <span className="share" onClick={handleSocialShare}>
                <img src={shareIcon} alt="share-icon" />
                <SocialShare
                  shareUrl={shareUrl && shareUrl}
                  showSocialShare={socialShare}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="welcome-sifa">
            <h2>{title}</h2>
            <span>{subtitle}</span>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Welcome;
