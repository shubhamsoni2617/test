import React, { Fragment } from 'react';

const SearchCategory = props => {
  const { searchCategories, defaultCategoryId, handleActiveCategory } = props;
  return (
    <div className="promotions-full-wrapper">
      <section className="promotions-wrapper">
        <div className="container-fluid">
          <div className="container">
            <div className="promotions-nav">
              <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                {searchCategories &&
                  searchCategories.map(category => {
                    return (
                      <li key={category.id}>
                        <a
                          className={`nav-item nav-link active ${
                            defaultCategoryId === category.id ? `active` : ``
                          }`}
                          onClick={() => handleActiveCategory(category.id)}
                        >
                          {category.name} ({category.count})
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchCategory;
