import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Image from '../../../../shared/components/Image';
import Utilities from '../../../../shared/utilities';

//     return (
//       <div className={this.props.cardClass.cardBlock}>
//         {this.props.cardData && this.props.cardData.is_featured == '1' && (
//           <span className="featured-tag">Featured</span>
//         )}
//         <div className="event-img">
//           <Image src={cardData.thumb_image} />
//         </div>
//         <div className="event-details">
//           <div className="event-detail-prime">
//             <span className={`category ${category && category.toLowerCase()}`}>
//               {category}
//             </span>
//             <div className="item-title">
//               <EventHeading
//                 title={cardData.title}
//                 lines={2}
//                 height={Utilities.mobileAndTabletcheck() ? 16 : 20}
//               />
//             </div>
//             {cardData.synopsis && (
//               <React.Fragment>
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: Utilities.showLimitedChars(cardData.synopsis, 55)
//                   }}
//                 ></span>
//                 {cardData.synopsis.length > 55 && (
//                   <span
//                     className="attraction-show-more"
//                     onClick={() =>
//                       this.showPopUp(true, cardData.synopsis, cardData.name)
//                     }
//                   >
//                     Show More
//                   </span>
//                 )}

//                 {this.state.showPopUp && (
//                   <ModalPopup
//                     showModal={true}
//                     content={this.state.popUpContent}
//                     title={this.state.popUpTitle}
//                     handleClose={() => this.showPopUp(false, null)}
//                     htmlContent={true}
//                   />
//                 )}
//               </React.Fragment>
//             )}
//             <p className="event-date">{cardData.event_date}</p>
//             <p className="event-place">{cardData.venue_name}</p>
//           </div>
//           <div className="price-event">
//             <div className="price">
//               <span>
//                 <EventStatus
//                   status={cardData.event_status}
//                   color={cardData.event_status_text_color}
//                   background={cardData.event_status_background_color}
//                   paddingLeft={'2px'}
//                   paddingRight={'2px'}
//                 />
//               </span>
//               <p>{cardData.price ? cardData.price : ' '}</p>
//             </div>
//             <button
//               type="button"
//               onClick={() => redirectTo(cardData.alias)}
//               className={cardClass.cardButton}
//             >
//               Buy Tickets
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

//event-block
const Card = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="event-block">
      <span className="featured-tag">{cardData.genre[0]}</span>
      <div className="event-img">
        <img src={cardData.image} height="600px" />
      </div>
      <div className="event-details">
        <div className="event-detail-prime">
          {cardData.tags.map(tag => {
            return <button className="">{tag}</button>;
          })}
          <div className="item-title">
            <EventHeading
              title={cardData.title}
              lines={2}
              height={Utilities.mobileAndTabletcheck() ? 16 : 20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
