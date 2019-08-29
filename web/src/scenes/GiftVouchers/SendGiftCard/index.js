import React from "react";
import "./style.scss";
import GiftAmount from "../../../assets/images/Gift Amount.png";
import GiftMessage from "../../../assets/images/Gift messge.png";
import GiftCard from "../../../assets/images/Gift card.png";

const SendGiftCard = () => {
  return (
    <div className="sendGiftCard">
      <div className="wrapper">
        <div>
          <img src={GiftAmount} alt="HappyGirl" className="img-fluid" />
          <h6>Choose a design and enter your gift amount</h6>
        </div>
        <div>
          <img src={GiftMessage} alt="HappyGirl" className="img-fluid" />
          <h6>Write a message</h6>
        </div>
        <div>
          <img src={GiftCard} alt="HappyGirl" className="img-fluid" />
          <h6>Receive a confirmation email for your gift card purchase</h6>
        </div>
      </div>
    </div>
  );
};

export default SendGiftCard;
