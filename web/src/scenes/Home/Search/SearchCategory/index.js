import React, { Fragment } from 'react';

const SearchCategory = props => {
  const { searchCategories, defaultCategoryId, handleActiveCategory } = props;
  return (
    <div className="promotions-full-wrapper">
      <section className="promotions-wrapper">
        <div className="promotions-nav">
          <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            {searchCategories &&
              searchCategories.map(category => {
                return (
                  <li key={category.type}>
                    <a
                      className={`nav-item nav-link ${
                        defaultCategoryId === category.type ? `active` : ``
                        }`}
                      onClick={() => handleActiveCategory(category.type)}
                    >
                      {category.type} ({category.total})
                        </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SearchCategory;
