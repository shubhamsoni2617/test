import React from 'react';
import Image from '../Image';
import { Link } from 'react-router-dom';

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
                            <Image src={elem.thumb_image} className="img-fluid" alt="Kurios" type='Vertical' />
                        </div>
                    </div>
                    <span className={`category ${genre}`}>{elem.primary_genre}</span>
                    <p>{elem.event_date}</p>
                    <Link to={`events/${elem.alias}`}><h3>{elem.title}</h3></Link>
                    <p>{elem.venue_name}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;
