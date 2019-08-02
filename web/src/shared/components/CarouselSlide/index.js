import React from 'react';
import Image from '../Image';
const CarouselSlide = (props) => {
    const {elem}=props;
    return (
        <div className="grid-container" key={elem.id}>
            <div className="item">
                <div className="item-wrapper">
                    <div className="currently-showing-img">
                        <div className="item-img">
                            <Image src={elem.thumb_image} className="img-fluid" alt="Kurios" type='Vertical' />
                        </div>
                    </div>
                    <span className={elem.genre === "Musical" ? "category musical" : "category comedy"}>{elem.primary_genre}</span>
                    <p>{elem.event_date}</p>
                    <h3>{elem.title}</h3>
                    <p>{elem.venue_name}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;