import React, { Component, createRef } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import CloseIcon from '../../../assets/images/close-blue.svg';
import './style.scss';

export default class VenueFilter extends Component {

   groupedCollection;

   constructor(props) {
      super(props);
      this.state = {
         search: '',
         display: false,
         venuesData: this.props.venueData, hoverEffect: '', alphabet: ''
      }

      this.myRef = createRef();
   }

   componentDidMount() {
   }

   componentWillReceiveProps(props) {
      this.setState({ display: props.venueFilterPanelDisplay ? true : false });
   }

   closeVenuePopup = () => {
      this.setState({ display: false });
   }

   handleHoverOn = (alphabet) => {
      this.setState({ hoverEffect: 'disable-venue', alphabet: alphabet });
   }

   handleHoverOff = () => {
      this.setState({ hoverEffect: '', alphabet: '' });
   }

   scrollToRef = (ref) => {
      let el = document.getElementById('li-' + ref.target.id);
      if (el !== null) {
         this.myRef.scrollTo({
            top: 0,
            left: el.offsetLeft - 25,
            behavior: 'smooth',
         });
      }
   }


   sortAndGroup = (venues) => {
      this.groupedCollection = {};
      for (let i = 0; i < venues.length; i++) {//loop throug collection         
         let firstLetter = venues[i].name.charAt(0).toUpperCase();
         if (!isNaN(firstLetter)) {
            firstLetter = '#';
         }
         if (this.groupedCollection[firstLetter] == undefined) {
            this.groupedCollection[firstLetter] = [];
         }
         this.groupedCollection[firstLetter].push(venues[i]);
      }
      return this.groupedCollection;
   }

   // Filter for grouped Data
   groupeFilter = (groupedCollection) => {
      let groupedData = [];
      let addHoverClass;
      let id;
      Object.keys(groupedCollection).map((key) => {

         addHoverClass = (this.state.alphabet == key) ? '' : this.state.hoverEffect;
         groupedData.push(<li id={"li-" + key} className={"filter-directory-list-title " + addHoverClass}>{key}</li>);

         groupedCollection[key].map((venue) => {
            id = 'venue-panel-' + venue.id;
            addHoverClass = (this.state.alphabet == key) ? '' : this.state.hoverEffect;
            groupedData.push(<li className={addHoverClass}>
               <input onChange={(e) => this.props.checkUncheckVenues(e, venue.id, 'child')} className="styled-checkbox" type="checkbox" id={id} />
               <label htmlFor={id}>
                  {venue.name}
               </label>
            </li>);
         }
         )
      })
      return groupedData;
   }

   updateSearch = (event) => {
      this.setState({ search: event.target.value.substr(0, 20) });
   }

   // Prepare alphabests in Venue popup
   prepareAlphabets = () => {
      let alphabets = [];
      alphabets.push(<li id="#"
         onMouseOver={() => this.handleHoverOn('#')}
         onMouseLeave={() => this.handleHoverOff()}
         onClick={this.scrollToRef} >#</ li>);
      for (let i = 65; i < 91; i++) {
            alphabets.push(
               <li id={String.fromCharCode(i)}
                  onMouseOver={() => this.handleHoverOn(String.fromCharCode(i))}
                  onMouseLeave={() => this.handleHoverOff()}
                  key={i}
                  onClick={this.scrollToRef} >
                  {String.fromCharCode(i).toUpperCase()}
               </li>
            )
         }
         return alphabets;;
      }
   
      // Return Jsx
   render() {
      const {venuesData, search, display } = this.state;
      const {setOpenVenuePanel} = this.props;
      let filteredVenue = venuesData.length && venuesData.filter((venues) => {
         return venues.name.toLowerCase().indexOf(search) !== -1;
      })
      this.sortAndGroup(filteredVenue);

      return (
         <div className="filters-panel">
         <CSSTransitionGroup
                    transitionName="dropdown"
                    transitionEnter={true}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
            {display && <div className="filter-directory-panel">
               <div className="filter-directory-titlebar">
                  <div className="filter-directory-heading">
                     <h3>Venue</h3>
                     <span className="filter-directory-close">
                        <img onClick={() => setOpenVenuePanel(false)} src={CloseIcon} alt="Close" />
                     </span>
                  </div>
                  <div className="filter-directory-indices-list">
                     <input type="text" value={search} onChange={(event) => this.updateSearch(event)} placeholder="Search in Venues" className="filter-directory-search-input" />
                     <ul className="filter-directory-indices">
                        {
                           this.prepareAlphabets().map((alphabets) => {
                              return alphabets
                           })
                        }
                     </ul>
                  </div>
               </div>
               <div className="filter-directory-list">
                  <ul id="venueContainer" ref={(node)=>this.myRef=node}>
                     {
                        this.groupeFilter(this.groupedCollection).map((lidata) => {
                           return lidata;
                        })
                     }
                  </ul>
               </div>
            </div>}
            </CSSTransitionGroup>
         </div>
         )
      }
}
