import React from 'react';
import Image from '../Image';
import { Link } from 'react-router-dom';
import Utilities from '../../utilities';
import EventHeading from '../EventHeading';

const CarouselSlide = (props) => {
    const { elem } = props;
    let genre;
    if (elem && elem.primary_genre) {
        genre = elem.primary_genre.toLowerCase()
    }
    return (
        <div className="grid-container" key={elem.id}>
            <div className="item">
                <div className="item-wrapper">
                    <div className="currently-showing-img">
                        <div className="item-img">
                            <Image src={elem.thumb_image} className="img-fluid"  type='Tile' />
                        </div>
                    </div>
                    <span className={`category ${genre}`}>{elem.primary_genre}</span>
                    <p className="date-event">{elem.event_date}</p>
                    {/* <Link to={`/events/${elem.alias}`}><h3>{Utilities.showLimitedChars(elem.title, 40)}</h3></Link> */}
                    <Link to={`/events/${elem.alias}`}><EventHeading title={elem.title} lines={2} height={20} /></Link>
                    <p>{elem.venue_name}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;
