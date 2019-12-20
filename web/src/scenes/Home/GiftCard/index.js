import React, { useState, useEffect, Fragment } from 'react';

const GiftCard = ({ api, params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    api(params)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setData(res.data.data);
            setLoading(false);
          }, 2000);
        }
      })
      .catch(err => {
        setError(true);
      });
  };
  if (!loading && data && data.length === 0) {
    return null;
  }

  if (error) return null;

  return (
    <Fragment>
      {data &&
        data.map(elem => {
          return (
            <div className="adds-container" key={elem.title}>
              <a
                href={elem && elem.navigation_link}
                className="giftcard-anchor"
                target="_blank"
              >
                <img
                  src={elem && elem.full_image}
                  className="img-fluid"
                  alt={elem && elem.alt_text}
                  title={elem && elem.title}
                />
              </a>
            </div>
          );
        })}
    </Fragment>
  );
};

export default GiftCard;
