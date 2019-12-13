import React from 'react';
import Image from '../Image';
import { Link } from 'react-router-dom';
import EventHeading from '../EventHeading';
import Utilities from '../../utilities';
import Ellipsis from '../Ellipsis';

const ItemWrapper = (elem, genre, type) => {
  return (
    <div className="item-wrapper">
      <div className="currently-showing-img">
        <div className="item-img">
          <Image
            src={elem.thumb_image}
            className="img-fluid"
            type={`${type || 'Tile'}`}
          />
        </div>
      </div>
      <span className={`category ${genre}`}>{elem.primary_genre}</span>
      {elem.event_date === null || elem.event_date === '' ? (
        <p className="dt-srt-end"></p>
      ) : (
        // <p className="dt-srt-end">{elem.event_date}</p>
        <Ellipsis
          title={elem.event_date}
          lines={2}
          height={Utilities.mobilecheck() ? 15 : 18}
          allowTooltip={false}
          customClass="dt-srt-end"
        />
      )}
      {elem.title === null || elem.title === '' ? (
        <h3></h3>
      ) : (
        <EventHeading
          title={elem.title}
          lines={2}
          height={19}
          allowTooltip={false}
        />
      )}
      {/* <p>{Utilities.showLimitedChars(elem.venue_name, 25)}</p> */}
      <Ellipsis
        title={elem.venue_name}
        lines={1}
        height={Utilities.mobilecheck() ? 15 : 18}
        allowTooltip={true}
        customClass="venue-name"
      />
    </div>
  );
};

const CarouselSlide = ({ elem, type }) => {
  let genre;
  if (elem && elem.primary_genre) {
    genre = elem.primary_genre.toLowerCase();
  }
  return (
    <div className="item" key={elem.id}>
      {!elem.navigation_link && (
        <Link to={`/events/${elem.alias}`}>
          {ItemWrapper(elem, genre, type)}
        </Link>
      )}
      {elem.navigation_link && (
        <a target="_blank" href={`${elem.navigation_link}`}>
          {ItemWrapper(elem, genre, type)}
        </a>
      )}
    </div>
  );
};

export default CarouselSlide;
