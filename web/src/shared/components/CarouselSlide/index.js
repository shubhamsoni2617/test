import React from 'react';
import NoImage from '../../../assets/images/Horizontal Tile.png';

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
                            <img src={elem.thumb_image ? elem.thumb_image : NoImage} className="img-fluid" alt="Kurios" />
                        </div>
                    </div>
                    <span className={`category ${genre}`}>{elem.primary_genre}</span>
                    <p>{elem.event_date}</p>
                    <h3>{elem.title}</h3>
                    <p>{elem.venue_name}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;