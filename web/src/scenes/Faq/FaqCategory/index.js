import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import FaqContent from '../FaqContent';
import Utilities from '../../../shared/utilities';

const FaqCategory = props => {
  return (
    <Fragment>
      <ul className="faq-listing">
        {props.categories.map(category => {
          return (
            <li key={category.id}>
              <Link
                className={
                  props.categoryId === category.id && props.urlExist
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
                }
                to={`/faq/${category.name.replace(/\s/g, '-').toLowerCase()}`}
                onClick={() =>
                  !Utilities.mobileAndTabletcheck()
                    ? window.scrollTo({
                        top: 400,
                        left: 0,
                        behavior: 'smooth'
                      })
                    : null
                }
              >
                {category.name}
              </Link>
              {props.categoryId === category.id ? (
                <Fragment>
                  <div className="faq-ans-wrapper">
                    <h2>{props.categoryName}</h2>
                    <FaqContent
                      {...props}
                      data={props.faqContentData}
                      categoryId={category.id}
                    />
                  </div>
                </Fragment>
              ) : null}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default FaqCategory;
