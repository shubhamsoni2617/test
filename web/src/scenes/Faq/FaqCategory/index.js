import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import FaqContent from '../FaqContent';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import CategoryLink from './CategoryLink';

const FaqCategory = props => {
  let optionalSearchId = props.location.search.split('=')[1];

  // const [toggleContent, setToggleContent] = useState(true);
  const [updateContent, setUpdateContent] = useState(true);
  const [categoryLinkHeight, setCategoryLinkHeight] = useState(0);

  useEffect(() => {
    setUpdateContent(!updateContent);
  }, [optionalSearchId]);

  // const toggleContentHandler = toggleValue => {
  //   setToggleContent(toggleValue);
  // };
  const categoryLinkHeightHandler = height => {
    setCategoryLinkHeight(height);
  };

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
            let FaqContentComponent = (
              <FaqContent
                {...props}
                data={props.faqContentData}
                categoryId={category.id}
                optionalSearchId={optionalSearchId}
                categoryLinkHeight={categoryLinkHeight}
              />
            );
            return (
              <li
                key={category.id}
                className={
                  props.toggleContent && props.categoryId === category.id
                    ? `toggleContentActive`
                    : ``
                }
              >
                <CategoryLink
                  toggleContentHandler={props.toggleContentHandler}
                  currentCategoryId={props.categoryId}
                  categoryId={category.id}
                  categoryName={category.name}
                  currentCategoryId={props.categoryId}
                  toggleContent={props.toggleContent}
                  optionalSearchId={optionalSearchId}
                  categoryLinkHeightHandler={categoryLinkHeightHandler}
                  paramId={props.match.params.id}
                />
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
                      ) : props.toggleContent ? (
                        <>
                          {updateContent && FaqContentComponent}
                          {!updateContent && FaqContentComponent}
                        </>
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
