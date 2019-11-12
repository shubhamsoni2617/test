import React from 'react';
import Image from '../Image';
import { Link } from 'react-router-dom';
import EventHeading from '../EventHeading';

const ItemWrapper = (elem, genre) => {
  return (
    <div className="item-wrapper">
      <div className="currently-showing-img">
        <div className="item-img">
          <Image src={elem.thumb_image} className="img-fluid" type="Tile" />
        </div>
      </div>
      <span className={`category ${genre}`}>{elem.primary_genre}</span>
      <p className="dt-srt-end">{elem.event_date}</p>
      <EventHeading title={elem.title} lines={2} height={19} />
      <p>{elem.venue_name}</p>
    </div>
  );
};

const CarouselSlide = ({ elem }) => {
  let genre;
  if (elem && elem.primary_genre) {
    genre = elem.primary_genre.toLowerCase();
  }
  return (
    <div className="item" key={elem.id}>
      {!elem.navigation_link && (
        <Link to={`/events/${elem.alias}`}>{ItemWrapper(elem, genre)}</Link>
      )}
      {elem.navigation_link && (
        <a target="_blank" href={`${elem.navigation_link}`}>
          {ItemWrapper(elem, genre)}
        </a>
      )}
    </div>
  );
};

export default CarouselSlide;
