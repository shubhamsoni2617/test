import React from 'react';
import Image from '../../../../../../shared/components/Image';

const MostViewed = ({ mostViewed }) => {
  return (
    <div className="most-viewed">
      <h3>Most Viewed</h3>
      <ul className="advertisment-listing">
        {mostViewed &&
          mostViewed.map((elem, index) => {
            return (
              <li key={index}>
                <div className="most-viewed-img">
                  <Image
                    src={elem.full_image}
                    type="MediumVertical"
                    className="img-fluid"
                  />
                </div>
                <span className="category musical">{elem.primary_genre}</span>
                <a href={elem.navigation_link} target='_blank'>
                  <h4>{elem.title}</h4>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MostViewed;
