import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../shared/components/Carousel";
import rightArrow from "../../../assets/images/right-arrow.svg";
import loaderImage from  '../../../assets/images/Vertical Tile.png';
const data = [
    {
      "id": "58",
      "title": "",
      "alias": "cmaz0719",
      "thumb_image": loaderImage,
      "event_date": "Thu, 15 Aug - Fri, 06 Sep 2019",
      "venue_name": "Abigo",
      "primary_genre": "MICE",
      "event_status": null,
      "price": "S$250.00 - S$400.00"
    },
    {
      "id": "60",
      "title": "",
      "alias": "andy0919",
      "thumb_image": loaderImage,
      "event_date": "Thu, 01 Aug - Sat, 31 Aug 2019",
      "venue_name": "Abigo",
      "primary_genre": "Comedy",
      "event_status": null,
      "price": "S$40.00 - S$62.00"
    },
    {
      "id": "75",
      "title": "",
      "alias": "44",
      "thumb_image": loaderImage,
      "event_date": "Sun, 30 Jun - Sat, 12 Oct 2019",
      "venue_name": "112 Katong",
      "primary_genre": "Dance",
      "event_status": "On Sale for month",
      "price": "S$445 - S$900"
    },
    {
      "id": "87",
      "title": "",
      "alias": "HOLLY999",
      "thumb_image": loaderImage,
      "event_date": "Wed, 31 Jul - Thu, 07 Nov 2019",
      "venue_name": "City Square Mall",
      "primary_genre": "Theatre",
      "event_status": "Last Offer",
      "price": "S$50 - S$200"
    },
    {
      "id": "119",
      "title": "",
      "alias": "code1",
      "thumb_image": loaderImage,
      "event_date": "Wed, 07 Aug - Sat, 31 Aug 2019",
      "venue_name": "313@somerset",
      "primary_genre": "Comedy",
      "event_status": "",
      "price": "S$3434 - S$6767"
    },
    {
      "id": "187",
      "title": "",
      "alias": "002",
      "thumb_image": loaderImage,
      "event_date": "",
      "venue_name": "",
      "primary_genre": "",
      "event_status": "",
      "price": ""
    }
  ];

  function preloadImages(srcs, callback) {
    var img;
    var remaining = srcs.length;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.onload = function() {
            --remaining;
            if (remaining <= 0) {
                callback();
            }
        };
        img.src = srcs[i].thumb_image;
    }
}

const CarouselConatiner = props => {
  const element = useRef(null);
  const [currentlyShowing, setCurrentlyShowing] = useState(data);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [callAPI, setCallAPI] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", scrollHandler, true);
      return () => {
        window.removeEventListener("scroll", scrollHandler, true);
      };
  }, []);

  useEffect(() => {
    const params = {
      client: 1
    };
    if(callAPI){
      props.api(params)
      .then(res => {

        setTimeout(() => {
          preloadImages(res.data.data, () => {
            setCurrentlyShowing(res.data.data);
            setLoading(false);
          });
        }, 1000);

      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
    }
  }, [callAPI]);

  const scrollHandler = () => {
    if (!callAPI && window.pageYOffset >= element.current.offsetTop - 400) {
      setCallAPI(true);
    }
  }

  if (error) {
    return null;
  }
  return (
    <div ref={element} className={loading ? 'page-load' : 'fade-in'}>
      <section className={props.classStr}>
        <div className="container-fluid">
          <div className="section-top-wrapper">
            <h2>{props.title}</h2>
            <div className="carousel-dots">
              <Link to="/events">
                See all{" "}
                <img src={rightArrow} className="img-fluid" alt="arrow" />
                &nbsp;
              </Link>
            </div>
          </div>
          <Carousel
            imgArray={currentlyShowing}
            arrows={props.arrows}
            slidesToShow={6}
            slidesToScroll={6}
            autoplay={props.autoplay}
            infinite={props.infinite}
          />
        </div>
      </section>
    </div>
  );
};

export default CarouselConatiner;
