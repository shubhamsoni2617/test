import React from 'react';
import Image from '../Image';
import './style.scss';

function AdvertisementBlock({ image, url, type }) {
  if (!image) return null;
  if (url) {
    return (
      <a href={url}>
        <Image src={image} type={type} />
      </a>
    );
  }

  return <Image src={image} type={type} />;
}
function AdvertisementSection({ data }) {
  if (!data) return null;
  if (data && data.image) {
    return (
      <div className="advertisement-banner">
        <AdvertisementBlock
          image={data.image}
          url={data.url}
          type="BigBanner"
        />
      </div>
    );
  }

  return (
    <>
      {data.map(item => {
        return (
          <div key={item.image} className="advertisement-block">
            <AdvertisementBlock
              image={item.image}
              url={item.url}
              type="Vertical"
            />
          </div>
        );
      })}
    </>
  );
}

export default AdvertisementSection;
