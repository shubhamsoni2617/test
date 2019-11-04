import React from 'react';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import Utilities from '../../../../shared/utilities';

const SearchCategory = props => {
  const { defaultCategoryId, handleActiveCategory, searchCategories } = props;
  console.log(searchCategories);
  return (
    <div className="promotions-full-wrapper">
      <section className="promotions-wrapper">
        <div className="promotions-nav">
          {searchCategories && searchCategories.length ? (
            <ul className="nav nav-tabs" id="nav-tab" role="tablist">
              {searchCategories.map(category => {
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
                      {`${category.type[0].toUpperCase()}${category.type.slice(
                        1
                      )}`}
                      {category.type === 'attraction' ||
                      category.type === 'promotion'
                        ? `s `
                        : ` `}
                      ({category.total})
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ShimmerEffect height={50} count={4} type="BLOCK" />
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchCategory;
