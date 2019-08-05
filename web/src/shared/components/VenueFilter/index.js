import React, { Component } from 'react';
import CloseIcon from '../../../assets/images/close-icon.svg';
import './style.scss';

export default class VenueFilter extends Component {

   groupedCollection;
   venueShowLimit = 5;

   constructor(props) {
      super(props);
      this.state = {
         search: '',
         display: this.props.venueFilterPanelDisplay ? 'block' : 'none',
         venuesData: this.props.venueData
      }

   }

   componentDidMount() {
   }

   componentWillReceiveProps(props) {
      this.setState({ display: props.venueFilterPanelDisplay ? 'block' : 'none' });
   }

   closeVenuePopup = () => {
      this.setState({ display: 'none' });
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

   groupeFilter = (groupedCollection) => {
      let groupedData = [];
      Object.keys(groupedCollection).map((key) => {
         groupedData.push(<li id={key} className="filter-directory-list-title">{key}</li>);
         groupedCollection[key].map(item => {
            groupedData.push(<li>
               <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
               <label for="styled-checkbox-9">
                  {item.venue}
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
         let createHref = '#' + String.fromCharCode(i);
         alphabets.push(
            <li className="" key={i} ><a href={createHref} >{String.fromCharCode(i)}</a></li>
         )
      }
      return alphabets;;
   }

   // Filter for grouped Data
   groupeFilter = (groupedCollection) => {
      let liData = [];
      Object.keys(groupedCollection).map((key) => {
         liData.push(<li id={key} className="filter-directory-list-title">{key}</li>);
         groupedCollection[key].map(venue => {
            liData.push(<li>
               <input className="styled-checkbox" type="checkbox" id={venue.id + 'panel'} value="" />
               <label for={venue.id + 'panel'}>
                  {venue.name}
               </label>
            </li>);
         }
         )
      })
      return liData;
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
                        <img onClick={()=>setOpenVenuePanel(false)} src={CloseIcon} alt="Close" />
                     </span>
                  </div>
                  <div className="filter-directory-indices-list">
                     <input type="text" value={search} onChange={(event) => this.updateSearch(event)} placeholder="Search brand" className="filter-directory-search-input" />
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
                  <ul className="filter-directory-list">
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