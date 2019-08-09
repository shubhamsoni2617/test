import React, {Component} from 'react';

import {
    FacebookShareButton,FacebookIcon,
    TelegramShareButton, TelegramIcon,
    EmailShareButton, EmailIcon
  } from 'react-share';



  const SocialShare = (props) => {

        const { shareUrl ,showSocialShare } = props;
        return (
            <div className={`${showSocialShare ? 'share-visible' :''}`}>
                <FacebookShareButton
                    url={shareUrl}
                    title='Facebook'>
                    <FacebookIcon size={32}
                    round />
               </FacebookShareButton>
               <TelegramShareButton
                    url={shareUrl}
                    title='Telegram'>
                    <TelegramIcon size={32}
                    round />
               </TelegramShareButton>
               <EmailShareButton
                    url={shareUrl}
                    title='Telegram'>
                    <EmailIcon size={32}
                    round />
               </EmailShareButton>
            </div>
        )
  }

  export default SocialShare;
