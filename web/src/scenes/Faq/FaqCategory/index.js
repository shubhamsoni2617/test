import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import FaqContent from '../FaqContent';

const FaqCategory = props => {
  const [toggleContent, setToggleContent] = useState(true);
  return (
    <Fragment>
      <ul className="faq-listing">
        {props.categories &&
          props.categories.map(category => {
            return (
              <li key={category.id}>
                <Link
                  className={
                    props.categoryId === category.id
                      ? 'nav-item nav-link active'
                      : 'nav-item nav-link'
                  }
                  to={`/faq/${category.name.replace(/\s/g, '-').toLowerCase()}`}
                  onClick={() => {
                    if (window.innerWidth > 991) {
                      window.scrollTo({
                        top: 400,
                        left: 0,
                        behavior: 'smooth'
                      });
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
                      {props.faqContentData && toggleContent && (
                        <FaqContent
                          {...props}
                          data={props.faqContentData}
                          categoryId={category.id}
                        />
                      )}
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
