import React, { Fragment } from 'react';

const SearchCategory = props => {
  const { defaultCategoryId, handleActiveCategory } = props;
  let searchCategories;
  if (props.searchCategories) {
    Object.keys(props.searchCategories).map((key) => {
      return [props.searchCategories[key]];
    });
  }
  return (
    <div className="promotions-full-wrapper">
      <section className="promotions-wrapper">
        <div className="promotions-nav">
          <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            {searchCategories && searchCategories[0] && searchCategories[0].total
              ? searchCategories && searchCategories.map(category => {
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
              : null}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SearchCategory;
