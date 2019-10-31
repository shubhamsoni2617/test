import React from 'react';

const SearchCategory = props => {
  const { defaultCategoryId, handleActiveCategory, searchCategories } = props;

  return (
    <div className="promotions-full-wrapper">
      <section className="promotions-wrapper">
        <div className="promotions-nav">

          <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            {searchCategories && searchCategories.length && searchCategories.map(category => {
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
                    {`${category.type[0].toUpperCase()}${
                      category.type !== 'faq' ? category.type.slice(1) : 'AQ'
                      }`}
                    {category.type === 'event' ||
                      category.type === 'attraction' ||
                      category.type === 'promotion'
                      ? `s `
                      : ` `}
                    ({category.total})
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
