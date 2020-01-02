import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import noEvent from '../../../../assets/images/no-event.svg';
import Utilities from '../../../../shared/utilities';
import EventHeading from '../../../../shared/components/EventHeading';

const CardList = React.forwardRef((props, ref) => {
  const { history, articleList, totalRecords } = props;
  let textLimit = Utilities.mobilecheck() ? 45 : 50;
  return articleList.length ? (
    articleList.map(cardData => {
      let routePath =
        cardData.type === 'templates_1_2_'
          ? `/explore/1/${cardData.id}`
          : `/explore/2/${cardData.id}`;
      return (
        <div
          key={cardData.id}
          ref={ref}
          onClick={() => history.push(routePath)}
        >
          <div className="event-block">
            <div className="article-category-group">
              {cardData.categories &&
                cardData.categories.slice(0, 1).map(category => {
                  return (
                    <span key={category} className="category">
                      {category}
                    </span>
                  );
                })}
            </div>
            <div className="event-img">
              <Image src={cardData.thumb_image} />
            </div>
            <div className="event-details">
              <div className="event-detail-prime">
                <div className="category-group">
                  <ul>
                    {cardData.tags &&
                      cardData.tags.slice(0, 4).map(genreName => {
                        if (genreName) {
                          return (
                            <li key={genreName}>
                              <span className="">{genreName}</span>
                            </li>
                          );
                        }
                      })}
                  </ul>
                </div>
                <div className="article-bottom-details">
                  <div className="article-text-content">
                    {/* <h3>{cardData.title}</h3> */}
                    <EventHeading
                      title={cardData.title}
                      lines={2}
                      height={20}
                    />
                    <div className="item-title">
                      <span>{cardData.description.slice(0, textLimit)}</span>
                      <span className="article-show-more">...More</span>
                    </div>
                  </div>
                  <div className="item-bottom">
                    <span className="item-author">
                      {cardData.author_name
                        ? `By ${cardData.author_name}`
                        : null}
                    </span>
                    <span className="item-date">{cardData.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : totalRecords === 0 ? (
    <ShimmerEffect
      propCls={`${
        Utilities.mobileAndTabletcheck() ? 'shm_col-xs-6' : ''
        } col-md-4`}
      height={150}
      count={Utilities.mobileAndTabletcheck() ? 2 : 3}
      type="LIST"
    />
  ) : (
        <div className="no-data">
          <img src={noEvent} alt="No Event Data" />
          <p>
            <strong>No Data found</strong>
          </p>
          <p>Try again with more general search</p>
        </div>
      );
});
export default CardList;
