import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Utilities from "../../../shared/utilities";
import Carousel from "../../../shared/components/Carousel";
import rightArrow from "../../../assets/images/right-arrow.svg";
import ShimmerEffect from "../../../shared/components/ShimmerEffect";

const CarouselConatiner = props => {
  const element = useRef(null);
  const [data, setData] = useState(null);
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
    if (callAPI) {
      props
        .api(params)
        .then(res => {
          Utilities.preloadImages(res.data.data, "thumb_image", () => {
            setTimeout(() => {
              setData(res.data.data);
              setLoading(false);
            }, 1000);
          });
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
  };

  if (error) {
    return null;
  }

  return (
    <div ref={element}>
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
          {loading ? (
            <ShimmerEffect
              propCls="shm_col-xs-6 col-md-2"
              height={298}
              count={6}
              type="TILE"
            />
          ) : (
            <>
              <Carousel
                imgArray={data}
                arrows={props.arrows}
                slidesToShow={6}
                slidesToScroll={6}
                autoplay={props.autoplay}
                infinite={props.infinite}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CarouselConatiner;
