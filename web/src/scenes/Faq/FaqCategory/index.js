import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import FaqContent from '../FaqContent';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';

const FaqCategory = props => {
  const [toggleContent, setToggleContent] = useState(true);
  return (
    <Fragment>
      <ul className="faq-listing">
        {!props.categories ? (
          <ShimmerEffect
            propCls="shm_col-xs-6 col-md-12"
            height={80}
            count={3}
            type="TILE"
          />
        ) : (
          props.categories.map(category => {
            return (
              <li key={category.id}>
                <Link
                  className={`nav-item nav-link  ${
                    props.categoryId === category.id ? `active` : ``
                  }`}
                  to={`/faq/${category.name.replace(/\s/g, '-').toLowerCase()}`}
                  onClick={() => {
                    if (window.innerWidth > 991) {
                      window.scrollTo({
                        top: 400,
                        left: 0,
                        behavior: 'smooth'
                      });
                      setToggleContent(true);
                    } else {
                      if (props.categoryId === category.id) {
                        setToggleContent(!toggleContent);
                      } else {
                        setToggleContent(true);
                      }
                    }
                  }}
                >
                  {category.name}
                </Link>
                {props.categoryId === category.id ? (
                  <Fragment>
                    <div className="faq-ans-wrapper">
                      <h2>{props.categoryName}</h2>
                      {!props.faqContentData ? (
                        <ShimmerEffect
                          propCls="shm_col-xs-6 col-md-12"
                          height={80}
                          count={3}
                          type="TILE"
                        />
                      ) : toggleContent ? (
                        <FaqContent
                          {...props}
                          data={props.faqContentData}
                          categoryId={category.id}
                        />
                      ) : null}
                    </div>
                  </Fragment>
                ) : null}
              </li>
            );
          })
        )}
      </ul>
    </Fragment>
  );
};

export default FaqCategory;
