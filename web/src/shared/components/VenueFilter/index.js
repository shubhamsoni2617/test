import React, { Component, createRef } from 'react';
import CloseIcon from '../../../assets/images/close-blue.svg';
import './style.scss';

export default class VenueFilter extends Component {

   groupedCollection;

   constructor(props) {
      super(props);
      this.state = {
         search: '',
         display: this.props.venueFilterPanelDisplay ? 'block' : 'none',
         venuesData: this.props.venueData, hoverEffect: '', alphabet: ''
      }

      this.myRef = createRef();
   }

   componentDidMount() {
   }

   componentWillReceiveProps(props) {
      this.setState({ display: props.venueFilterPanelDisplay ? 'block' : 'none' });
   }

   closeVenuePopup = () => {
      this.setState({ display: 'none' });
   }

   handleHoverOn = (alphabet) => {
      this.setState({ hoverEffect: 'disable-venue', alphabet: alphabet });
   }

   handleHoverOff = () => {
      this.setState({ hoverEffect: '', alphabet: '' });
   }

   scrollToRef = (ref) => {
      let el = document.getElementById('li-'+ref.target.id);
      if(el !== null){
         this.myRef.scrollTo({
            top :0,
            left: el.offsetLeft-25,
            behavior: 'smooth',
         });
      }
   }


   sortAndGroup = (venues) => {
      this.groupedCollection = {};
      for (let i = 0; i < venues.length; i++) {//loop throug collection         
         let firstLetter = venues[i].name.charAt(0);
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
         groupedData.push(<li id={"li-"+key} className={"filter-directory-list-title " + addHoverClass}>{key}</li>);

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
      alphabets.push(<li className="">#</li>);
      for (let i = 65; i < 91; i++) {
         // let createHref = '#' + String.fromCharCode(i);
         alphabets.push(
            <li id={String.fromCharCode(i)} 
               onMouseOver={() => this.handleHoverOn(String.fromCharCode(i))}
               onMouseLeave={() => this.handleHoverOff()}
               key={i}
               onClick={this.scrollToRef} >
               {String.fromCharCode(i)}
            </li>
         )
      }
      return alphabets;;
   }

   // Return Jsx
   render() {
      const { venuesData, search, display } = this.state;
      const { setOpenVenuePanel } = this.props;
      let filteredVenue = venuesData.length && venuesData.filter((venues) => {
         return venues.name.toLowerCase().indexOf(search) !== -1;
      })
      this.sortAndGroup(filteredVenue);

      return (
         <div className="filters-panel">
            <div className="filter-directory-panel" style={{ display: display }}>
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
               <div>
                  <ul id="venueContainer" ref={(node)=>this.myRef=node} className="filter-directory-list">
                     {
                        this.groupeFilter(this.groupedCollection).map((lidata) => {
                           return lidata;
                        })
                     }
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}