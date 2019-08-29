import React, { useState, useEffect, memo } from "react";
import { CSSTransitionGroup } from "react-transition-group";

const FilterGrid = props => {
  const [limit, setLimit] = useState(5);
  const [activeClass, setActiveClass] = useState('');
  const [genreData, setGenreData] = useState(props.genreData);
  //Genres
  const checkUncheckAllGenre = status => {
    let genreData = props.genreData;
    let genreIds = [];
    genreData.map(genre => {
      genre.isChecked = status;
      genreIds.push(genre.id);
    });
    // this.setState({
    //   genreData: genreData,
    //   checkUncheckGnereActiveClass: status
    // });
    setActiveClass(status);
    if (!status) {
      genreIds = [];
    }
    props.handleFilters("genre-check-uncheck", genreIds);
  };

  const showMoreLessGenre = status => {
    if (status) {
      setLimit(props.genreData.length);
    } else {
      setLimit(5);
    }
  };

  const checkUnckeckGenre = (e, key) => {
    let genreData = props.genreData;
    genreData[key].isChecked = e.target.checked;
    setGenreData(genreData);
    // this.setState({ genreData: genreData });
    props.handleFilters("genre", genreData[key].id, e.target.checked);
  };

  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        <h3>Genre</h3>
        <ul>
          <li
            className={activeClass ? "active" : ""}
          >
            <a onClick={() => checkUncheckAllGenre(true)}>Select all</a>
          </li>
          <li
            className={activeClass ? "" : "active"}
          >
            <a onClick={() => checkUncheckAllGenre(false)}>Clear</a>
          </li>
        </ul>
      </div>
      <div className="filters-panel">
        <ul>
          <CSSTransitionGroup
            transitionName="dropdown"
            transitionEnter={true}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {genreData.length &&
              genreData.slice(0, limit).map((genre, key) => {
                let id = "genre-" + genre.id;
                return (
                  <li key={key}>
                    <input
                      checked={genre.isChecked}
                      onChange={e => checkUnckeckGenre(e, key)}
                      className="styled-checkbox"
                      type="checkbox"
                      id={id}
                      value=""
                    />
                    <label htmlFor={id}>
                      {genre.name} ({genre.events_count})
                    </label>
                  </li>
                );
              })}
          </CSSTransitionGroup>
        </ul>
        {genreData.length > limit && (
          <a
            onClick={() => showMoreLessGenre(true)}
            className="view-all-filters"
          >
            + {genreData.length - limit} More
          </a>
        )}
        {genreData.length == limit && (
          <a
            onClick={() => showMoreLessGenre(false)}
            className="view-all-filters"
          >
            Show Less
          </a>
        )}
      </div>
    </div>
  );
};
export default memo(FilterGrid);
