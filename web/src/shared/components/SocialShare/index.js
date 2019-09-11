import React from 'react';

import {
  FacebookShareButton, FacebookIcon,
  TelegramShareButton, TelegramIcon,
  EmailShareButton, EmailIcon
} from 'react-share';



const SocialShare = (props) => {

  const { shareUrl, showSocialShare } = props;
  return (
    <div className={`social-share ${showSocialShare ? 'share-visible' : ''}`}>
      <div className="social-share-wrapper">
        <FacebookShareButton
          url={shareUrl}>
          <FacebookIcon title="Facebook" size={32}
            round />
        </FacebookShareButton>
        <TelegramShareButton
          url={shareUrl}>
          <TelegramIcon size={32}
            round />
        </TelegramShareButton>
        <EmailShareButton
          url={shareUrl}>
          <EmailIcon size={32}
            round />
        </EmailShareButton>
      </div>
    </div>
  )
}

export default SocialShare;
