import React, { Fragment } from 'react';
import loaderImage from '../../../../assets/images/loader.svg';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
// import * from '../../../../'

const SearchCategory = props => {
  const { defaultCategoryId, handleActiveCategory, searchCategories } = props;

  return (
    <div className="promotions-full-wrapper">
      <section className="promotions-wrapper">
        <div className="promotions-nav">
          <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            {searchCategories && searchCategories.length
              ? searchCategories.map(category => {
                  return (
                    <li
                      key={category.type}
                      className={!category.total ? `no-category` : ``}
                    >
                      <a
                        className={`nav-item nav-link ${
                          defaultCategoryId === category.type ? `active` : ``
                        }`}
                        onClick={() => handleActiveCategory(category.type)}
                      >
                        {category.type[0].toUpperCase() +
                          category.type.slice(1)}
                        {category.type === 'event' ||
                        category.type === 'attraction' ||
                        category.type === 'promotion'
                          ? `s`
                          : ``}
                        ({category.total})
                      </a>
                    </li>
                  );
                })
              : // <img className="filter-loader" src={loaderImage} />
                null}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SearchCategory;
