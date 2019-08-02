import React, { useState } from 'react';
import CloseIcon from '../../../assets/images/close-icon.svg';
import './style.scss';

const VenueFilter = (props) => {

   const { venueData } = props;
   const [search, setSearch] = useState('');
   let groupedCollection;

   const sortAndGroup = (venues) => {
      groupedCollection = {};
      for (let i = 0; i < venues.length; i++) {//loop throug collection         
         let firstLetter = venues[i].name.charAt(0);
         if (!isNaN(firstLetter)) {
            firstLetter = '#';
         }
         if (groupedCollection[firstLetter] == undefined) {
            groupedCollection[firstLetter] = [];
         }
         groupedCollection[firstLetter].push(venues[i]);
      }
      return groupedCollection;
   }

   const groupeFilter = (groupedCollection) => {
      let liData = [];
      Object.keys(groupedCollection).map((key) => {
         liData.push(<li id={key} className="filter-directory-list-title">{key}</li>);
         groupedCollection[key].map(venue => {
            liData.push(<li>
               <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
               <label for="styled-checkbox-9">
                  {venue.name}
               </label>
            </li>);
         }
         )
      })
      return liData;
   }

   const updateSearch = (event) => {
      setSearch(event.target.value.substr(0, 20));
   }

   const prepareAlphabets = () => {
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

   const filteredVenue = venueData.length && venueData.filter((venues) => {
      // console.log(venues)  
      return venues.name.toLowerCase().indexOf(search) !== -1;
   })

   sortAndGroup(filteredVenue);

   return (
      <div>
         <div className="filter-grid-heading">
            <h3>Venue</h3>
            <ul>
               <li className="active">
                  <a href="/">Clear</a>
               </li>
            </ul>
         </div>
         <div className="filters-panel">
            <ul>
               <li>
                  <input className="styled-checkbox" type="checkbox" id="styled-checkbox-12" value="" />
                  <label for="styled-checkbox-12">
                     Esplanade Concert Hall
                     </label>
               </li>
               <li>
                  <input className="styled-checkbox" type="checkbox" id="styled-checkbox-13" value="" />
                  <label for="styled-checkbox-13">
                     Sands Theatre at Marina Bay Sands
                     </label>
               </li>
               <li>
                  <input className="styled-checkbox" type="checkbox" id="styled-checkbox-14" value="" />
                  <label for="styled-checkbox-14">
                     Victoria Theatre
                     </label>
               </li>
            </ul>
            <a href="/" className="view-all-filters">
               + 94 More
                     </a>
            <div className="filter-directory-panel">
               <div className="filter-directory-titlebar">
                  <div className="filter-directory-heading">
                     <h3>Venue</h3>
                     <span className="filter-directory-close">
                        <img src={CloseIcon} alt="Close" />
                     </span>
                  </div>
                  <div className="filter-directory-indices-list">
                     <input type="text" value={search} onChange={(event) => updateSearch(event)} placeholder="Search brand" className="filter-directory-search-input" />
                     <ul className="filter-directory-indices">
                        {
                           prepareAlphabets().map((alphabets) => {
                              return alphabets
                           })
                        }
                     </ul>
                  </div>
               </div>
               <div>
                  <ul className="filter-directory-list">
                     {
                        groupeFilter(groupedCollection).map((lidata) => {
                           return lidata;
                        })
                     }
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default VenueFilter;