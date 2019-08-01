import React, { useState, useEffect } from 'react';
import CloseIcon from '../../../assets/images/close-icon.svg';
import './style.scss';

const VenueFilter = (props) => {

   let groupedCollection;
   const venueShowLimit = 5;
   let obj = [{tod:'dfjk'}];
   const { venueData } = props;
   const [search, setSearch] = useState('');
   const [openVenuePanel, setOpenVenuePanel] = useState(false);
   const [clearVenuesCheckbox, setClearVenuesCheckbox] = useState(false);
   const [todos, setTodos] = useState();
  
   useEffect(() => {
      setTodos(venueData);
  }, [venueData])


   //Check all vneues by defalult to false
   const addAllChecked = () => {
      venueData.map((venue) => {
         venue.isChecked = false;
      })
   }

   addAllChecked();


   const handleAllChecked = (event) => {
      venueData.forEach(venue => venue.isChecked = event) 
    }

   // Sort and group venues for venue popup
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

   // Filter for grouped Data
   const groupeFilter = (groupedCollection) => {
      let liData = [];
      Object.keys(groupedCollection).map((key) => {
         liData.push(<li id={key} className="filter-directory-list-title">{key}</li>);
         groupedCollection[key].map(venue => {
            liData.push(<li>
               <input className="styled-checkbox" type="checkbox" id={venue.id} value="" />
               <label for={venue.id}>
                  {venue.name}
               </label>
            </li>);
         }
         )
      })
      return liData;
   }

   // Update search result in venue Popup
   const updateSearch = (event) => {
      setSearch(event.target.value.substr(0, 20));
   }

   // Prepare alphabests in Venue popup
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

   // Filtered venue
   const filteredVenue = venueData.length && venueData.filter((venues) => {
      return venues.name.toLowerCase().indexOf(search) !== -1;
   })
   //Call sort and gourp function
   sortAndGroup(filteredVenue);

   // Return Jsx
   return (
      <div>
         <div className="filter-grid-heading">
            <h3>Venue</h3>
            <ul>
            <li className="active">
                  <a onClick={()=>handleAllChecked(true)}>Select All</a>
               </li>
               <li className="active">
                  <a onClick={()=>setClearVenuesCheckbox(false)}>Clear</a>
               </li>
            </ul>
         </div>
         <div className="filters-panel">
            <ul>
               {venueData && venueData.slice(venueShowLimit).map((venue, index) => {
                  return <li>
                  <input className="styled-checkbox" type="checkbox" id={venue.id} value="" />
                  <label for={venue.id}>
                     {venue.name}
                     </label>
               </li>
               })}

            </ul>
            <a onClick={()=>setOpenVenuePanel(true)} className="view-all-filters">
               + {venueData.length - venueShowLimit} More
                     </a>
                     {}
            <div className="filter-directory-panel" style={{display:openVenuePanel?'block':'none'}}>
               <div className="filter-directory-titlebar">
                  <div className="filter-directory-heading">
                     <h3>Venue</h3>
                     <span className="filter-directory-close">
                        <img onClick={()=>setOpenVenuePanel(false)} src={CloseIcon} alt="Close" />
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