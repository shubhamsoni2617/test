import React from "react";
import "./style.scss";
import GiftAmount from "../../../assets/images/giftAmount.png";
import GiftMessage from "../../../assets/images/giftMessage.png";
import GiftCard from "../../../assets/images/giftCard.png";

const SendGiftCard = () => {
  return (
    <div className="sendgiftcard">
      <div className="giftcard-content">
        <span className="giftcard-img">
          <img src={GiftAmount} alt="HappyGirl" className="img-fluid" />
        </span>
        <span>Choose a design and enter your gift amount</span>
      </div>
      <div className="giftcard-content">
        <span className="giftcard-img">
          <img src={GiftMessage} alt="HappyGirl" className="img-fluid" />
        </span>
        <span>Write a message</span>
      </div>
      <div className="giftcard-content">
        <span className="giftcard-img">
          <img src={GiftCard} alt="HappyGirl" className="img-fluid" />
        </span>
        <span>Receive a confirmation email for your gift card purchase</span>
      </div>
    </div>
  );
};

export default SendGiftCard;
