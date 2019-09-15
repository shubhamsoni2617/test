import React from 'react';
import PropTypes from 'prop-types';

import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';

const SocialShare = ({ shareUrl, showSocialShare }) => {
  return (
    <div className={`social-share ${showSocialShare ? 'share-visible' : ''}`}>
      <div className="social-share-wrapper">
        <FacebookShareButton url={shareUrl} quote="Facebook">
          <FacebookIcon quote="Facebook" size={32} round />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl} quote="Telegram">
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <EmailShareButton url={shareUrl} quote="Telegram">
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default SocialShare;

SocialShare.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  showSocialShare: PropTypes.bool.isRequired
};
