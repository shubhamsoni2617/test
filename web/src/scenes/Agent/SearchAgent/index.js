import React, { Fragment, useState, useRef } from 'react';
import SearchIcon from '../../../assets/images/search-grey.png';
import './style.scss';
import { ReactComponent as Watch } from '../../../assets/images/stopwatch-grey.svg';

const SearchAgent = (props) => {

  const { initialItems } = props;

  const popUpRef = useRef();
  const activePopUpRef = useRef();

  const [filter, setFilter] = useState('');
  const [popUpDetail, setPopUpDetail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSearchAgent = (event) => {
    const { value } = event.target;
    setFilter(value);
  }

  const showPopUp = (detail) => {
    if (activePopUpRef.current) {
      // activePopUpRef.current.style.display = "block";
      activePopUpRef.current.classList.add("active");
    }
    setPopUpDetail(detail);

  }

  const removePopUp = () => {
    if (activePopUpRef.current) {
      // activePopUpRef.current.style.display = "none";
      activePopUpRef.current.classList.remove("active");

    }
  }


  // const toggle = () => {
  //   if (!isOpen) {
  //     if (activePopUpRef.current) {
  //       // activePopUpRef.current.style.display="none"
  //     }
  //     window.addEventListener('click', handleOutsideClick, false);
  //     // popUpRef.current.classList.add("active");
  //   } else {
  //     window.removeEventListener('click', handleOutsideClick, false);
  //     // popUpRef.current.classList.remove("active");
  //   }
  //   setIsOpen(!isOpen)
  // }

  // const handleOutsideClick = (e) => {
  //   if (popUpRef.current.contains(e.target)) {
  //     return;
  //   }
  //   toggle();
  // }

  // ------------------------------Array filtering-----------------------------
  const lowerCasedFilter = filter.toLowerCase();
  const filteredData = initialItems && initialItems.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toLowerCase().includes(lowerCasedFilter)
    );
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
      <ul
        className="list-group"
        // onClick={toggle}
        // ref={popUpRef}
      >
        {
          filteredData && filteredData.map((item, index) => {
            return (
              <ul className="pop-up-container" key={index} onMouseEnter={() => showPopUp(item)} onMouseLeave={removePopUp}>
                <li><strong>{item.name}</strong> <span><a>shown On Map</a></span></li>
                <li>{item.address},{item.country}</li>
                <div
                  className={item.id === popUpDetail.id ? "pop-up-list active" : "pop-up-list"}
                  // style={{ display: item.id === popUpDetail.id ? "block" : "none" }}
                  ref={item.id === popUpDetail.id ? activePopUpRef : null}
                >
                  <div>
                    <strong>How To Get There</strong>
                    <blockquote>{popUpDetail.how_to_get_there}</blockquote>
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
