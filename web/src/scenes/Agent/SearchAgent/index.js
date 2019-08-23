import React, { Fragment, useState, useRef } from 'react';
import SearchIcon from '../../../assets/images/search-grey.png';
import './style.scss';
import { ReactComponent as Watch } from '../../../assets/images/stopwatch-grey.svg';
import DirectionIcon from '../../../../src/assets/images/direction.png';


const SearchAgent = (props) => {

  const { initialItems, countryFile, onClick, getDirectionDetail } = props;
  const activePopUpRef = useRef();

  const [filter, setFilter] = useState('');
  const [popUpDetail, setPopUpDetail] = useState('');
  const [openPopUp, setOpenUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSearchAgent = (event) => {
    const { value } = event.target;
    setFilter(value);
  }

  const showPopUp = (detail) => {
    setPopUpDetail(detail);
    if (activePopUpRef.current) {
      if (openPopUp) {
        activePopUpRef.current.classList.remove("active");
        setOpenUp(false);
      } else {
        activePopUpRef.current.classList.add("active");
        setOpenUp(true);
      }
    }
  }

  // ------------------------------Array filtering-----------------------------
  const lowerCasedFilter = filter.toLowerCase();
  const filteredData = initialItems && initialItems.filter(item => {
    return Object.keys(item).some(key => {
      if (item[key] === null) {
        return
      }
      return item[key].toLowerCase().includes(lowerCasedFilter)
    });
  });


  return (
    <Fragment>
      <h1>Agents in Singapore</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-lg-10">
            <input
              className="form-control"
              type="text" value={filter}
              onChange={handleSearchAgent}
              placeholder="Search for an agent"
            />
          </div>
          <div className="col-lg-1">
            <button type="submit"><img src={SearchIcon} alt="search-icon" /></button>
          </div>
        </div>
      </form>
      <h6 className="festive-hour">
        {countryFile && <a href={countryFile} download target="_blank">Festive Period Operating Hours</a>}
      </h6>
      <ul className="list-group">
        {
          filteredData && filteredData.map((item, index) => {
            return (
              <ul className="pop-up-container" key={index} onMouseEnter={() => showPopUp(item)} onMouseLeave={showPopUp}>
                <li><strong>{item.name}</strong> <span><a onClick={(e) => { onClick(e, item) }}>shown On Map</a></span></li>
                <li>{item.address},{item.country}</li>
                <div
                  className={item.id === popUpDetail.id ? "pop-up-list active" : "pop-up-list"}
                  ref={item.id === popUpDetail.id ? activePopUpRef : null}
                >
                  <div className="text-right">
                    <a href={`https://www.google.com/maps/dir//${popUpDetail.address}`} target="_blank">
                      <img height='20' width='20' src={DirectionIcon} alt="direction" />
                    </a>
                  </div>
                  <div>
                    <strong>How To Get There</strong>
                    <p>{popUpDetail.how_to_get_there}</p>
                  </div>
                  <div>
                    <strong>Parking</strong>
                    <p>{popUpDetail.parking}</p>
                  </div>
                  <div>
                    <strong>Operating Hours</strong>
                    <p>{popUpDetail.operating_hours}</p>
                  </div>
                  <div>
                    <strong>Payment Mode</strong>
                    <p>{popUpDetail.payment_mode}</p>
                  </div>
                  <div>
                    <strong><Watch /> Ticket pick up Reminder</strong>
                    <p>{popUpDetail.reminder}</p>
                  </div>
                  {popUpDetail.festive_hours && <div>
                    <a href={popUpDetail.festive_hours_file} download target="_blank">Festive Period Operating Hours</a>
                  </div>}
                </div>
                <hr />
              </ul>
            )
          })
        }
      </ul>
    </Fragment>
  );
};

export default SearchAgent;
