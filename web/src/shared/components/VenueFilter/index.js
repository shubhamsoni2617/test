import React, { Component } from 'react';
import './style.scss';

export default class VenueFilter extends Component {

   componentDidMount() {
      
   } 

   sortAndGroup(venues) {
      this.groupedCollection = {};
      for (let i = 0; i < venues.length; i++) {//loop throug collection         
         let firstLetter = venues[i].venue.charAt(0);
         if(!isNaN(firstLetter)){
               firstLetter = '#';
         }
         if (this.groupedCollection[firstLetter] == undefined) {
               this.groupedCollection[firstLetter] = [];
         }
         this.groupedCollection[firstLetter].push(venues[i]);
      }
      return this.groupedCollection;
   }

    groupeFilter(groupedCollection){
       let liData = [];
        Object.keys(groupedCollection).map((key) => {                                        
                liData.push(<li id={key} className="filter-directory-list-title">{key}</li>);
                
                groupedCollection[key].map(item => {
                  liData.push(<li>
                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                        <label for="styled-checkbox-9">
                            {item.venue}
                        </label>
                    </li>);
                }
            )
        })

        return liData;
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    prepareAlphabets = () => {
        let alphabets = [];
        alphabets.push(<li className="">#</li>);
        for (let i = 65; i < 91; i++) {
           let createHref = '#'+ String.fromCharCode(i);
            alphabets.push(
                <li className="" key={i} ><a href={createHref} >{String.fromCharCode(i)}</a></li>
            )
        }
        return alphabets;
    }

    render() {
        let filteredVenue = this.venues.filter((venues) => {
            return venues.venue.toLowerCase().indexOf(this.state.search) !==-1;
        })
        this.sortAndGroup(filteredVenue);

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
                                    <img src="assets/images/close-icon.svg" alt="Close" />
                                 </span>
                           </div>
                           <div className="filter-directory-indices-list">
                                 <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search brand" className="filter-directory-search-input" />
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
            </div>
        )
    }


    constructor(props) {
        super(props);

        this.venues = [
            {
               "country":"Andorra",
               "geonameid":3040051,
               "venue":"les Escaldes",
               "subcountry":"Escaldes-Engordany"
            },
            {
               "country":"Andorra",
               "geonameid":3041563,
               "venue":"Andorra la Vella",
               "subcountry":"Andorra la Vella"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":290594,
               "venue":"Umm al Qaywayn",
               "subcountry":"Umm al Qaywayn"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":291074,
               "venue":"Ras al-Khaimah",
               "subcountry":"Ra02bcs al Khaymah"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":291696,
               "venue":"Khawr Fakk0101n",
               "subcountry":"Ash Sh0101riqah"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292223,
               "venue":"Dubai",
               "subcountry":"Dubai"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292231,
               "venue":"Dibba Al-Fujairah",
               "subcountry":"Al Fujayrah"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292239,
               "venue":"Dibba Al-Hisn",
               "subcountry":"Al Fujayrah"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292672,
               "venue":"Sharjah",
               "subcountry":"Ash Sh0101riqah"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292688,
               "venue":"Ar Ruways",
               "subcountry":"Abu Dhabi"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292878,
               "venue":"Al Fujayrah",
               "subcountry":"Al Fujayrah"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292913,
               "venue":"Al Ain",
               "subcountry":"Abu Dhabi"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292932,
               "venue":"Ajman",
               "subcountry":"Ajman"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292953,
               "venue":"Adh Dhayd",
               "subcountry":"Ash Sh0101riqah"
            },
            {
               "country":"United Arab Emirates",
               "geonameid":292968,
               "venue":"Abu Dhabi",
               "subcountry":"Abu Dhabi"
            },
            {
               "country":"Afghanistan",
               "geonameid":1120985,
               "venue":"Zaranj",
               "subcountry":"N012bmr016bz"
            },
            {
               "country":"Afghanistan",
               "geonameid":1123004,
               "venue":"Taloqan",
               "subcountry":"Takh0101r"
            },
            {
               "country":"Afghanistan",
               "geonameid":1125155,
               "venue":"Sh012bn1e0fan1e0f",
               "subcountry":"Herat"
            },
            {
               "country":"Afghanistan",
               "geonameid":1125444,
               "venue":"Shibirgh0101n",
               "subcountry":"Jowzj0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1125896,
               "venue":"Shahrak",
               "subcountry":"Ghowr"
            },
            {
               "country":"Afghanistan",
               "geonameid":1127110,
               "venue":"Sar-e Pul",
               "subcountry":"Sar-e Pol"
            },
            {
               "country":"Afghanistan",
               "geonameid":1127628,
               "venue":"Sang-e Ch0101rak",
               "subcountry":"Sar-e Pol"
            },
            {
               "country":"Afghanistan",
               "geonameid":1127768,
               "venue":"A012bbak",
               "subcountry":"Samang0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1128265,
               "venue":"Rust0101q",
               "subcountry":"Takh0101r"
            },
            {
               "country":"Afghanistan",
               "geonameid":1129516,
               "venue":"Qarq012bn",
               "subcountry":"Jowzj0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1129648,
               "venue":"Qar0101wul",
               "subcountry":"Kunduz"
            },
            {
               "country":"Afghanistan",
               "geonameid":1130490,
               "venue":"Pul-e Khumr012b",
               "subcountry":"Wil0101yat-e Baghl0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1131316,
               "venue":"Paghm0101n",
               "subcountry":"Kabul"
            },
            {
               "country":"Afghanistan",
               "geonameid":1132495,
               "venue":"Nahr012bn",
               "subcountry":"Wil0101yat-e Baghl0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1133453,
               "venue":"Maymana",
               "subcountry":"Faryab"
            },
            {
               "country":"Afghanistan",
               "geonameid":1133574,
               "venue":"Mehtar L0101m",
               "subcountry":"Laghm0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1133616,
               "venue":"Maz0101r-e Shar012bf",
               "subcountry":"Balkh"
            },
            {
               "country":"Afghanistan",
               "geonameid":1134720,
               "venue":"Lashkar G0101h",
               "subcountry":"Helmand"
            },
            {
               "country":"Afghanistan",
               "geonameid":1135158,
               "venue":"Kushk",
               "subcountry":"Herat"
            },
            {
               "country":"Afghanistan",
               "geonameid":1135689,
               "venue":"Kunduz",
               "subcountry":"Kunduz"
            },
            {
               "country":"Afghanistan",
               "geonameid":1136469,
               "venue":"Kh014dst",
               "subcountry":"Khowst"
            },
            {
               "country":"Afghanistan",
               "geonameid":1136575,
               "venue":"Khulm",
               "subcountry":"Balkh"
            },
            {
               "country":"Afghanistan",
               "geonameid":1136863,
               "venue":"Kh0101sh",
               "subcountry":"N012bmr016bz"
            },
            {
               "country":"Afghanistan",
               "geonameid":1137168,
               "venue":"Khanabad",
               "subcountry":"Kunduz"
            },
            {
               "country":"Afghanistan",
               "geonameid":1137807,
               "venue":"Karukh",
               "subcountry":"Herat"
            },
            {
               "country":"Afghanistan",
               "geonameid":1138336,
               "venue":"Kandah0101r",
               "subcountry":"Kandah0101r"
            },
            {
               "country":"Afghanistan",
               "geonameid":1138958,
               "venue":"Kabul",
               "subcountry":"Kabul"
            },
            {
               "country":"Afghanistan",
               "geonameid":1139715,
               "venue":"Jal0101l0101b0101d",
               "subcountry":"Nangarh0101r"
            },
            {
               "country":"Afghanistan",
               "geonameid":1139807,
               "venue":"Jabal os Saraj",
               "subcountry":"Parv0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1140026,
               "venue":"Her0101t",
               "subcountry":"Herat"
            },
            {
               "country":"Afghanistan",
               "geonameid":1141089,
               "venue":"Ghormach",
               "subcountry":"Badghis"
            },
            {
               "country":"Afghanistan",
               "geonameid":1141269,
               "venue":"Ghazni",
               "subcountry":"Ghazn012b"
            },
            {
               "country":"Afghanistan",
               "geonameid":1141540,
               "venue":"Gereshk",
               "subcountry":"Helmand"
            },
            {
               "country":"Afghanistan",
               "geonameid":1141857,
               "venue":"Gard0113z",
               "subcountry":"Paktia"
            },
            {
               "country":"Afghanistan",
               "geonameid":1142170,
               "venue":"Fayzabad",
               "subcountry":"Badakhshan"
            },
            {
               "country":"Afghanistan",
               "geonameid":1142264,
               "venue":"Farah",
               "subcountry":"Farah"
            },
            {
               "country":"Afghanistan",
               "geonameid":1142404,
               "venue":"Kafir Qala",
               "subcountry":"Herat"
            },
            {
               "country":"Afghanistan",
               "geonameid":1145352,
               "venue":"Charikar",
               "subcountry":"Parv0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1147066,
               "venue":"Barak012b Barak",
               "subcountry":"Lowgar"
            },
            {
               "country":"Afghanistan",
               "geonameid":1147242,
               "venue":"B0101my0101n",
               "subcountry":"B0101m012b0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1147290,
               "venue":"Balkh",
               "subcountry":"Balkh"
            },
            {
               "country":"Afghanistan",
               "geonameid":1147540,
               "venue":"Baghl0101n",
               "subcountry":"Wil0101yat-e Baghl0101n"
            },
            {
               "country":"Afghanistan",
               "geonameid":1148106,
               "venue":"0100rt Khw0101jah",
               "subcountry":"Takh0101r"
            },
            {
               "country":"Afghanistan",
               "geonameid":1148205,
               "venue":"0100sm0101r",
               "subcountry":"Konar"
            },
            {
               "country":"Afghanistan",
               "geonameid":1148311,
               "venue":"Asad0101b0101d",
               "subcountry":"Konar"
            },
            {
               "country":"Afghanistan",
               "geonameid":1148658,
               "venue":"Andkh014dy",
               "subcountry":"Faryab"
            },
            {
               "country":"Afghanistan",
               "geonameid":1429434,
               "venue":"B0101z0101rak",
               "subcountry":"Panjshir"
            },
            {
               "country":"Afghanistan",
               "geonameid":1469706,
               "venue":"Markaz-e Woluswal012b-ye 0100ch012bn",
               "subcountry":"Nangarh0101r"
            },
            {
               "country":"Antigua and Barbuda",
               "geonameid":3576022,
               "venue":"Saint John2019s",
               "subcountry":"Saint John"
            },
            {
               "country":"Anguilla",
               "geonameid":3573374,
               "venue":"The Valley",
               "subcountry":"N/A"
            },
            {
               "country":"Albania",
               "geonameid":363243,
               "venue":"Sarand00eb",
               "subcountry":"Vlor00eb"
            },
            {
               "country":"Albania",
               "geonameid":782661,
               "venue":"Kuk00ebs",
               "subcountry":"Kuk00ebs"
            },
            {
               "country":"Albania",
               "geonameid":782756,
               "venue":"Kor00e700eb",
               "subcountry":"Kor00e700eb"
            },
            {
               "country":"Albania",
               "geonameid":783148,
               "venue":"Gjirokast00ebr",
               "subcountry":"Gjirokast00ebr"
            },
            {
               "country":"Albania",
               "geonameid":783263,
               "venue":"Elbasan",
               "subcountry":"Elbasan"
            },
            {
               "country":"Albania",
               "geonameid":783493,
               "venue":"Burrel",
               "subcountry":"Dib00ebr"
            },
            {
               "country":"Albania",
               "geonameid":3183719,
               "venue":"Vlor00eb",
               "subcountry":"Vlor00eb"
            },
            {
               "country":"Albania",
               "geonameid":3183875,
               "venue":"Tirana",
               "subcountry":"Tiran00eb"
            },
            {
               "country":"Albania",
               "geonameid":3184081,
               "venue":"Shkod00ebr",
               "subcountry":"Shkod00ebr"
            },
            {
               "country":"Albania",
               "geonameid":3184517,
               "venue":"Patos Fshat",
               "subcountry":"Fier"
            },
            {
               "country":"Albania",
               "geonameid":3184862,
               "venue":"Lushnj00eb",
               "subcountry":"Fier"
            },
            {
               "country":"Albania",
               "geonameid":3184935,
               "venue":"Lezh00eb",
               "subcountry":"Lezh00eb"
            },
            {
               "country":"Albania",
               "geonameid":3185012,
               "venue":"La00e7",
               "subcountry":"Lezh00eb"
            },
            {
               "country":"Albania",
               "geonameid":3185060,
               "venue":"Ku00e7ov00eb",
               "subcountry":"Berat"
            },
            {
               "country":"Albania",
               "geonameid":3185082,
               "venue":"Kruj00eb",
               "subcountry":"Durr00ebs"
            },
            {
               "country":"Albania",
               "geonameid":3185211,
               "venue":"Kavaj00eb",
               "subcountry":"Tiran00eb"
            },
            {
               "country":"Albania",
               "geonameid":3185670,
               "venue":"Fier-00c7if00e7i",
               "subcountry":"Fier"
            },
            {
               "country":"Albania",
               "geonameid":3185672,
               "venue":"Fier",
               "subcountry":"Fier"
            },
            {
               "country":"Albania",
               "geonameid":3185728,
               "venue":"Durr00ebs",
               "subcountry":"Durr00ebs"
            },
            {
               "country":"Albania",
               "geonameid":3186084,
               "venue":"Berat",
               "subcountry":"Berat"
            },
            {
               "country":"Armenia",
               "geonameid":174875,
               "venue":"Kapan",
               "subcountry":"Syunik Province"
            },
            {
               "country":"Armenia",
               "geonameid":174895,
               "venue":"Goris",
               "subcountry":"Syunik Province"
            },
            {
               "country":"Armenia",
               "geonameid":174972,
               "venue":"Hats2019avan",
               "subcountry":"Syunik Province"
            },
            {
               "country":"Armenia",
               "geonameid":174979,
               "venue":"Artashat",
               "subcountry":"Ararat Province"
            },
            {
               "country":"Armenia",
               "geonameid":174991,
               "venue":"Ararat",
               "subcountry":"Ararat Province"
            },
            {
               "country":"Armenia",
               "geonameid":616052,
               "venue":"Yerevan",
               "subcountry":"Yerevan"
            },
            {
               "country":"Armenia",
               "geonameid":616062,
               "venue":"Ejmiatsin",
               "subcountry":"Armavir Province"
            },
            {
               "country":"Armenia",
               "geonameid":616199,
               "venue":"Spitak",
               "subcountry":"Lori Province"
            },
            {
               "country":"Armenia",
               "geonameid":616250,
               "venue":"Sevan",
               "subcountry":"Gegharkunik Province"
            },
            {
               "country":"Armenia",
               "geonameid":616435,
               "venue":"Masis",
               "subcountry":"Ararat Province"
            },
            {
               "country":"Armenia",
               "geonameid":616530,
               "venue":"Vanadzor",
               "subcountry":"Lori Province"
            },
            {
               "country":"Armenia",
               "geonameid":616599,
               "venue":"Gavarr",
               "subcountry":"Gegharkunik Province"
            },
            {
               "country":"Armenia",
               "geonameid":616629,
               "venue":"Hrazdan",
               "subcountry":"Kotayk Province"
            },
            {
               "country":"Armenia",
               "geonameid":616631,
               "venue":"Armavir",
               "subcountry":"Armavir Province"
            },
            {
               "country":"Armenia",
               "geonameid":616635,
               "venue":"Gyumri",
               "subcountry":"Shirak Province"
            },
            {
               "country":"Armenia",
               "geonameid":616877,
               "venue":"Ashtarak",
               "subcountry":"Aragatsotn Province"
            },
            {
               "country":"Armenia",
               "geonameid":617026,
               "venue":"Abovyan",
               "subcountry":"Kotayk Province"
            },
            {
               "country":"Angola",
               "geonameid":145531,
               "venue":"Saurimo",
               "subcountry":"Lunda Sul"
            },
            {
               "country":"Angola",
               "geonameid":145724,
               "venue":"Lucapa",
               "subcountry":"Lunda Norte"
            },
            {
               "country":"Angola",
               "geonameid":876177,
               "venue":"Luau",
               "subcountry":"Moxico"
            },
            {
               "country":"Angola",
               "geonameid":2236568,
               "venue":"U00edge",
               "subcountry":"U00edge"
            },
            {
               "country":"Angola",
               "geonameid":2236967,
               "venue":"Soio",
               "subcountry":"Zaire"
            },
            {
               "country":"Angola",
               "geonameid":2239001,
               "venue":"Nzeto",
               "subcountry":"Zaire"
            },
            {
               "country":"Angola",
               "geonameid":2239076,
               "venue":"N2019dalatando",
               "subcountry":"Cuanza Norte"
            },
            {
               "country":"Angola",
               "geonameid":2239520,
               "venue":"Mbanza Congo",
               "subcountry":"Zaire"
            },
            {
               "country":"Angola",
               "geonameid":2239862,
               "venue":"Malanje",
               "subcountry":"Malanje"
            },
            {
               "country":"Angola",
               "geonameid":2240449,
               "venue":"Luanda",
               "subcountry":"Luanda"
            },
            {
               "country":"Angola",
               "geonameid":2242001,
               "venue":"Caxito",
               "subcountry":"Bengo"
            },
            {
               "country":"Angola",
               "geonameid":2243271,
               "venue":"Cabinda",
               "subcountry":"Cabinda"
            },
            {
               "country":"Angola",
               "geonameid":3346015,
               "venue":"Sumbe",
               "subcountry":"Cuanza Sul"
            },
            {
               "country":"Angola",
               "geonameid":3347019,
               "venue":"Namibe",
               "subcountry":"Namibe"
            },
            {
               "country":"Angola",
               "geonameid":3347353,
               "venue":"Menongue",
               "subcountry":"Cuando Cubango"
            },
            {
               "country":"Angola",
               "geonameid":3347719,
               "venue":"Luena",
               "subcountry":"Moxico"
            },
            {
               "country":"Angola",
               "geonameid":3347762,
               "venue":"Lubango",
               "subcountry":"Hu00edla"
            },
            {
               "country":"Angola",
               "geonameid":3347853,
               "venue":"Longonjo",
               "subcountry":"Huambo"
            },
            {
               "country":"Angola",
               "geonameid":3347939,
               "venue":"Lobito",
               "subcountry":"Benguela"
            },
            {
               "country":"Angola",
               "geonameid":3348078,
               "venue":"Cuito",
               "subcountry":"Bi00e9"
            },
            {
               "country":"Angola",
               "geonameid":3348313,
               "venue":"Huambo",
               "subcountry":"Huambo"
            },
            {
               "country":"Angola",
               "geonameid":3350246,
               "venue":"Catumbela",
               "subcountry":"Benguela"
            },
            {
               "country":"Angola",
               "geonameid":3350372,
               "venue":"Catabola",
               "subcountry":"Bi00e9"
            },
            {
               "country":"Angola",
               "geonameid":3351014,
               "venue":"Camacupa",
               "subcountry":"Bi00e9"
            },
            {
               "country":"Angola",
               "geonameid":3351024,
               "venue":"Caluquembe",
               "subcountry":"Hu00edla"
            },
            {
               "country":"Angola",
               "geonameid":3351500,
               "venue":"Ca00e1la",
               "subcountry":"Huambo"
            },
            {
               "country":"Angola",
               "geonameid":3351663,
               "venue":"Benguela",
               "subcountry":"Benguela"
            },
            {
               "country":"Argentina",
               "geonameid":3427213,
               "venue":"Z00e1rate",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3427388,
               "venue":"Villa Ocampo",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3427408,
               "venue":"Villa Lugano",
               "subcountry":"Buenos Aires F.D."
            },
            {
               "country":"Argentina",
               "geonameid":3427428,
               "venue":"Villaguay",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3427431,
               "venue":"Villa Gesell",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3427761,
               "venue":"Tigre",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3427833,
               "venue":"Tandil",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3428068,
               "venue":"San Vicente",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3428071,
               "venue":"Santo Tom00e9",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3428359,
               "venue":"Santa Elena",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3428577,
               "venue":"San Pedro",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3428708,
               "venue":"San Luis del Palmar",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3428759,
               "venue":"San Lorenzo",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3428975,
               "venue":"San Javier",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3428992,
               "venue":"San Isidro",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3429403,
               "venue":"Saladas",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3429576,
               "venue":"Retiro",
               "subcountry":"Buenos Aires F.D."
            },
            {
               "country":"Argentina",
               "geonameid":3429577,
               "venue":"Resistencia",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3429594,
               "venue":"Reconquista",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3429652,
               "venue":"Quilmes",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3429732,
               "venue":"Puerto Rico",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3429777,
               "venue":"Puerto Iguaz00fa",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3429786,
               "venue":"Puerto Esperanza",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3429790,
               "venue":"Puerto Eldorado",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3429886,
               "venue":"Posadas",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3429902,
               "venue":"Pontevedra",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3429949,
               "venue":"Piran00e9",
               "subcountry":"Formosa"
            },
            {
               "country":"Argentina",
               "geonameid":3430104,
               "venue":"Paso de los Libres",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3430340,
               "venue":"Ober00e1",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3430443,
               "venue":"Necochea",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3430545,
               "venue":"Mor00f3n",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3430598,
               "venue":"Monte Caseros",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3430601,
               "venue":"Montecarlo",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3430708,
               "venue":"Mercedes",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3430709,
               "venue":"Mercedes",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3430863,
               "venue":"Mar del Plata",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3430988,
               "venue":"Luj00e1n",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3432043,
               "venue":"La Plata",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3432079,
               "venue":"La Paz",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3433349,
               "venue":"Jard00edn Am00e9rica",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3433658,
               "venue":"Gualeguaych00fa",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3433663,
               "venue":"Gualeguay",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3433715,
               "venue":"Goya",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3433753,
               "venue":"Gobernador Ingeniero Valent00edn Virasoro",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3433803,
               "venue":"General Jos00e9 de San Mart00edn",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3433836,
               "venue":"Garup00e1",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3433899,
               "venue":"Formosa",
               "subcountry":"Formosa"
            },
            {
               "country":"Argentina",
               "geonameid":3433901,
               "venue":"Fontana",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3433956,
               "venue":"Federal",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3434095,
               "venue":"Esquina",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3434291,
               "venue":"El Soberbio",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3435038,
               "venue":"Dolores",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3435103,
               "venue":"Curuz00fa Cuati00e1",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3435217,
               "venue":"Corrientes",
               "subcountry":"Corrientes"
            },
            {
               "country":"Argentina",
               "geonameid":3435261,
               "venue":"Concordia",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3435264,
               "venue":"Concepci00f3n del Uruguay",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3435356,
               "venue":"Colegiales",
               "subcountry":"Buenos Aires F.D."
            },
            {
               "country":"Argentina",
               "geonameid":3435486,
               "venue":"Chajar00ed",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3435810,
               "venue":"Campana",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3435910,
               "venue":"Buenos Aires",
               "subcountry":"Buenos Aires F.D."
            },
            {
               "country":"Argentina",
               "geonameid":3436124,
               "venue":"Barranqueras",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3436199,
               "venue":"Azul",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3436230,
               "venue":"Avellaneda",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3436287,
               "venue":"Arist00f3bulo del Valle",
               "subcountry":"Misiones"
            },
            {
               "country":"Argentina",
               "geonameid":3832132,
               "venue":"Zapala",
               "subcountry":"Neuquen"
            },
            {
               "country":"Argentina",
               "geonameid":3832260,
               "venue":"Yerba Buena",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":3832647,
               "venue":"Villa Regina",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3832653,
               "venue":"Villa Paula de Sarmiento",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3832662,
               "venue":"Villa Nueva",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3832694,
               "venue":"Villa Mar00eda",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3832756,
               "venue":"Villa Dolores",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3832778,
               "venue":"Villa Constituci00f3n",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3832791,
               "venue":"Villa Carlos Paz",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3832811,
               "venue":"Villa 00c1ngela",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3832815,
               "venue":"Villa Allende",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3832899,
               "venue":"Viedma",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3832934,
               "venue":"Victoria",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3833027,
               "venue":"Vera",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3833062,
               "venue":"Venado Tuerto",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3833112,
               "venue":"Veinticinco de Mayo",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3833367,
               "venue":"Ushuaia",
               "subcountry":"Tierra del Fuego"
            },
            {
               "country":"Argentina",
               "geonameid":3833412,
               "venue":"Unquillo",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3833794,
               "venue":"Tres Isletas",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3833859,
               "venue":"Tres Arroyos",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3833883,
               "venue":"Trelew",
               "subcountry":"Chubut"
            },
            {
               "country":"Argentina",
               "geonameid":3834502,
               "venue":"Termas de R00edo Hondo",
               "subcountry":"Santiago del Estero"
            },
            {
               "country":"Argentina",
               "geonameid":3834601,
               "venue":"Tartagal",
               "subcountry":"Salta"
            },
            {
               "country":"Argentina",
               "geonameid":3834813,
               "venue":"Taf00ed Viejo",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":3834971,
               "venue":"Sunchales",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3835793,
               "venue":"Santo Tom00e9",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3835869,
               "venue":"Santiago del Estero",
               "subcountry":"Santiago del Estero"
            },
            {
               "country":"Argentina",
               "geonameid":3835994,
               "venue":"Santa Rosa",
               "subcountry":"La Pampa"
            },
            {
               "country":"Argentina",
               "geonameid":3836194,
               "venue":"Santa Luc00eda",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3836277,
               "venue":"Santa Fe de la Vera Cruz",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3836564,
               "venue":"San Salvador de Jujuy",
               "subcountry":"Jujuy"
            },
            {
               "country":"Argentina",
               "geonameid":3836620,
               "venue":"San Ram00f3n de la Nueva Or00e1n",
               "subcountry":"Salta"
            },
            {
               "country":"Argentina",
               "geonameid":3836669,
               "venue":"San Rafael",
               "subcountry":"Mendoza"
            },
            {
               "country":"Argentina",
               "geonameid":3836772,
               "venue":"San Pedro",
               "subcountry":"Jujuy"
            },
            {
               "country":"Argentina",
               "geonameid":3836846,
               "venue":"San Nicol00e1s de los Arroyos",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3836873,
               "venue":"San Miguel de Tucum00e1n",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":3836951,
               "venue":"San Mart00edn de los Andes",
               "subcountry":"Neuquen"
            },
            {
               "country":"Argentina",
               "geonameid":3836992,
               "venue":"San Mart00edn",
               "subcountry":"Mendoza"
            },
            {
               "country":"Argentina",
               "geonameid":3837056,
               "venue":"San Luis",
               "subcountry":"San Luis"
            },
            {
               "country":"Argentina",
               "geonameid":3837124,
               "venue":"San Justo",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3837213,
               "venue":"San Juan",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3837240,
               "venue":"San Jos00e9 de J00e1chal",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3837441,
               "venue":"San Jorge",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3837675,
               "venue":"San Francisco",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3837702,
               "venue":"San Fernando del Valle de Catamarca",
               "subcountry":"Catamarca"
            },
            {
               "country":"Argentina",
               "geonameid":3837980,
               "venue":"San Antonio Oeste",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3838233,
               "venue":"Salta",
               "subcountry":"Salta"
            },
            {
               "country":"Argentina",
               "geonameid":3838506,
               "venue":"Rufino",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3838583,
               "venue":"Rosario",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3838793,
               "venue":"R00edo Tercero",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3838797,
               "venue":"R00edo Segundo",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3838859,
               "venue":"R00edo Gallegos",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Argentina",
               "geonameid":3838874,
               "venue":"R00edo Cuarto",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3838902,
               "venue":"R00edo Ceballos",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3839307,
               "venue":"Rawson",
               "subcountry":"Chubut"
            },
            {
               "country":"Argentina",
               "geonameid":3839479,
               "venue":"Rafaela",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3839490,
               "venue":"Quitilipi",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3839982,
               "venue":"Punta Alta",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3840092,
               "venue":"Puerto Madryn",
               "subcountry":"Chubut"
            },
            {
               "country":"Argentina",
               "geonameid":3840300,
               "venue":"Presidencia Roque S00e1enz Pe00f1a",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3840860,
               "venue":"Pocito",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3840885,
               "venue":"Plottier",
               "subcountry":"Neuquen"
            },
            {
               "country":"Argentina",
               "geonameid":3841490,
               "venue":"Pergamino",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3841500,
               "venue":"P00e9rez",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3841956,
               "venue":"Paran00e1",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3842190,
               "venue":"Palpal00e1",
               "subcountry":"Jujuy"
            },
            {
               "country":"Argentina",
               "geonameid":3842670,
               "venue":"Olavarr00eda",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3842881,
               "venue":"Nueve de Julio",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3843123,
               "venue":"Neuqu00e9n",
               "subcountry":"Neuquen"
            },
            {
               "country":"Argentina",
               "geonameid":3843619,
               "venue":"Morteros",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3843803,
               "venue":"Monteros",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":3844421,
               "venue":"Mendoza",
               "subcountry":"Mendoza"
            },
            {
               "country":"Argentina",
               "geonameid":3844899,
               "venue":"Marcos Ju00e1rez",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3845330,
               "venue":"Machagai",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3846864,
               "venue":"Lincoln",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3846915,
               "venue":"Libertador General San Mart00edn",
               "subcountry":"Jujuy"
            },
            {
               "country":"Argentina",
               "geonameid":3848687,
               "venue":"Las Bre00f1as",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3848950,
               "venue":"La Rioja",
               "subcountry":"La Rioja"
            },
            {
               "country":"Argentina",
               "geonameid":3851331,
               "venue":"La Falda",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3852374,
               "venue":"La Calera",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3852468,
               "venue":"Laboulaye",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3853354,
               "venue":"Jun00edn",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3853491,
               "venue":"Joaqu00edn V. Gonz00e1lez",
               "subcountry":"Salta"
            },
            {
               "country":"Argentina",
               "geonameid":3853510,
               "venue":"Jes00fas Mar00eda",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3854895,
               "venue":"Granadero Baigorria",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3854985,
               "venue":"Gobernador G00e1lvez",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3855065,
               "venue":"General Roca",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3855074,
               "venue":"General Pinedo",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3855075,
               "venue":"General Pico",
               "subcountry":"La Pampa"
            },
            {
               "country":"Argentina",
               "geonameid":3855116,
               "venue":"General Enrique Mosconi",
               "subcountry":"Salta"
            },
            {
               "country":"Argentina",
               "geonameid":3855244,
               "venue":"G00e1lvez",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3855554,
               "venue":"Firmat",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3855666,
               "venue":"Famaill00e1",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":3855974,
               "venue":"Esquel",
               "subcountry":"Chubut"
            },
            {
               "country":"Argentina",
               "geonameid":3856022,
               "venue":"Esperanza",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3856231,
               "venue":"Embarcaci00f3n",
               "subcountry":"Salta"
            },
            {
               "country":"Argentina",
               "geonameid":3856235,
               "venue":"Embalse",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3858765,
               "venue":"El Bols00f3n",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3859384,
               "venue":"Diamante",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3859512,
               "venue":"De00e1n Funes",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3859552,
               "venue":"Cutral-C00f3",
               "subcountry":"Neuquen"
            },
            {
               "country":"Argentina",
               "geonameid":3859828,
               "venue":"Cruz del Eje",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3859904,
               "venue":"Crespo",
               "subcountry":"Entre Rios"
            },
            {
               "country":"Argentina",
               "geonameid":3859965,
               "venue":"Cosqu00edn",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3860164,
               "venue":"Coronel Su00e1rez",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3860217,
               "venue":"Coronda",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3860259,
               "venue":"C00f3rdoba",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3860443,
               "venue":"Comodoro Rivadavia",
               "subcountry":"Chubut"
            },
            {
               "country":"Argentina",
               "geonameid":3861056,
               "venue":"Cipolletti",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3861061,
               "venue":"Cinco Saltos",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3861344,
               "venue":"Chivilcoy",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3861416,
               "venue":"Chimbas",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3861445,
               "venue":"Chilecito",
               "subcountry":"La Rioja"
            },
            {
               "country":"Argentina",
               "geonameid":3861678,
               "venue":"Charata",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3861953,
               "venue":"Chacabuco",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3862144,
               "venue":"Centenario",
               "subcountry":"Neuquen"
            },
            {
               "country":"Argentina",
               "geonameid":3862240,
               "venue":"Caucete",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3862254,
               "venue":"Catriel",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3862320,
               "venue":"Castelli",
               "subcountry":"Chaco"
            },
            {
               "country":"Argentina",
               "geonameid":3862351,
               "venue":"Casilda",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3862655,
               "venue":"Carcara00f100e1",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3862738,
               "venue":"Capit00e1n Berm00fadez",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3862981,
               "venue":"Ca00f1ada de G00f3mez",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3863379,
               "venue":"Caleta Olivia",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Argentina",
               "geonameid":3864331,
               "venue":"Bell Ville",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3864375,
               "venue":"Bella Vista",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":3865086,
               "venue":"Bah00eda Blanca",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"Argentina",
               "geonameid":3865385,
               "venue":"Arroyo Seco",
               "subcountry":"Santa Fe"
            },
            {
               "country":"Argentina",
               "geonameid":3865424,
               "venue":"Arroyito",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3865840,
               "venue":"A00f1atuya",
               "subcountry":"Santiago del Estero"
            },
            {
               "country":"Argentina",
               "geonameid":3866163,
               "venue":"Alta Gracia",
               "subcountry":"Cordoba"
            },
            {
               "country":"Argentina",
               "geonameid":3866242,
               "venue":"Allen",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":3866367,
               "venue":"Alderetes",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":3866425,
               "venue":"Albard00f3n",
               "subcountry":"San Juan"
            },
            {
               "country":"Argentina",
               "geonameid":3866496,
               "venue":"Aguilares",
               "subcountry":"Tucum00e1n"
            },
            {
               "country":"Argentina",
               "geonameid":6693230,
               "venue":"Villa Santa Rita",
               "subcountry":"Buenos Aires F.D."
            },
            {
               "country":"Argentina",
               "geonameid":7116866,
               "venue":"Villa Mercedes",
               "subcountry":"San Luis"
            },
            {
               "country":"Argentina",
               "geonameid":7647007,
               "venue":"San Carlos de Bariloche",
               "subcountry":"Rio Negro"
            },
            {
               "country":"Argentina",
               "geonameid":10172104,
               "venue":"Adrogu00e9",
               "subcountry":"Buenos Aires"
            },
            {
               "country":"American Samoa",
               "geonameid":5881576,
               "venue":"Pago Pago",
               "subcountry":"Eastern District"
            },
            {
               "country":"Austria",
               "geonameid":2760910,
               "venue":"Wolfsberg",
               "subcountry":"Carinthia"
            },
            {
               "country":"Austria",
               "geonameid":2761353,
               "venue":"Wiener Neustadt",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2761369,
               "venue":"Vienna",
               "subcountry":"Vienna"
            },
            {
               "country":"Austria",
               "geonameid":2761524,
               "venue":"Wels",
               "subcountry":"Upper Austria"
            },
            {
               "country":"Austria",
               "geonameid":2761669,
               "venue":"Weinzierl bei Krems",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2762372,
               "venue":"Villach",
               "subcountry":"Carinthia"
            },
            {
               "country":"Austria",
               "geonameid":2763423,
               "venue":"Traun",
               "subcountry":"Upper Austria"
            },
            {
               "country":"Austria",
               "geonameid":2763460,
               "venue":"Traiskirchen",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2763795,
               "venue":"Ternitz",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2764359,
               "venue":"Steyr",
               "subcountry":"Upper Austria"
            },
            {
               "country":"Austria",
               "geonameid":2764786,
               "venue":"Spittal an der Drau",
               "subcountry":"Carinthia"
            },
            {
               "country":"Austria",
               "geonameid":2765388,
               "venue":"Schwechat",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2766429,
               "venue":"Sankt P00f6lten",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2766824,
               "venue":"Salzburg",
               "subcountry":"Salzburg"
            },
            {
               "country":"Austria",
               "geonameid":2766922,
               "venue":"Saalfelden am Steinernen Meer",
               "subcountry":"Salzburg"
            },
            {
               "country":"Austria",
               "geonameid":2771335,
               "venue":"M00f6dling",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2772173,
               "venue":"Lustenau",
               "subcountry":"Vorarlberg"
            },
            {
               "country":"Austria",
               "geonameid":2772400,
               "venue":"Linz",
               "subcountry":"Upper Austria"
            },
            {
               "country":"Austria",
               "geonameid":2772635,
               "venue":"Leonding",
               "subcountry":"Upper Austria"
            },
            {
               "country":"Austria",
               "geonameid":2772649,
               "venue":"Leoben",
               "subcountry":"Styria"
            },
            {
               "country":"Austria",
               "geonameid":2773300,
               "venue":"Kufstein",
               "subcountry":"Tyrol"
            },
            {
               "country":"Austria",
               "geonameid":2773549,
               "venue":"Krems an der Donau",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2773913,
               "venue":"Klosterneuburg",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2774326,
               "venue":"Klagenfurt am W00f6rthersee",
               "subcountry":"Carinthia"
            },
            {
               "country":"Austria",
               "geonameid":2774773,
               "venue":"Kapfenberg",
               "subcountry":"Styria"
            },
            {
               "country":"Austria",
               "geonameid":2775220,
               "venue":"Innsbruck",
               "subcountry":"Tyrol"
            },
            {
               "country":"Austria",
               "geonameid":2776951,
               "venue":"Hallein",
               "subcountry":"Salzburg"
            },
            {
               "country":"Austria",
               "geonameid":2778067,
               "venue":"Graz",
               "subcountry":"Styria"
            },
            {
               "country":"Austria",
               "geonameid":2779674,
               "venue":"Feldkirch",
               "subcountry":"Vorarlberg"
            },
            {
               "country":"Austria",
               "geonameid":2780741,
               "venue":"Dornbirn",
               "subcountry":"Vorarlberg"
            },
            {
               "country":"Austria",
               "geonameid":2781503,
               "venue":"Bregenz",
               "subcountry":"Vorarlberg"
            },
            {
               "country":"Austria",
               "geonameid":2781520,
               "venue":"Braunau am Inn",
               "subcountry":"Upper Austria"
            },
            {
               "country":"Austria",
               "geonameid":2782067,
               "venue":"Baden",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":2782555,
               "venue":"Amstetten",
               "subcountry":"Lower Austria"
            },
            {
               "country":"Austria",
               "geonameid":3323063,
               "venue":"Ansfelden",
               "subcountry":"Salzburg"
            },
            {
               "country":"Australia",
               "geonameid":2058430,
               "venue":"Whyalla",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":2062338,
               "venue":"Rockingham",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2062944,
               "venue":"Prospect",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":2063042,
               "venue":"Port Hedland",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2063523,
               "venue":"Perth",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2065176,
               "venue":"Murray Bridge",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":2065594,
               "venue":"Mount Isa",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2065740,
               "venue":"Morphett Vale",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":2067119,
               "venue":"Mandurah",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2068079,
               "venue":"Kwinana",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2068823,
               "venue":"Kalgoorlie",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2070571,
               "venue":"Gosnells",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2070998,
               "venue":"Geraldton",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2071059,
               "venue":"Gawler",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":2071223,
               "venue":"Fremantle",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2073124,
               "venue":"Darwin",
               "subcountry":"Northern Territory"
            },
            {
               "country":"Australia",
               "geonameid":2075265,
               "venue":"Busselton",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2075432,
               "venue":"Bunbury",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2077579,
               "venue":"Armadale",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2077895,
               "venue":"Alice Springs",
               "subcountry":"Northern Territory"
            },
            {
               "country":"Australia",
               "geonameid":2077963,
               "venue":"Albany",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":2078025,
               "venue":"Adelaide",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":2143069,
               "venue":"Woodridge",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2143285,
               "venue":"Wodonga",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2144095,
               "venue":"Werribee",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2144528,
               "venue":"Warrnambool",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2144728,
               "venue":"Wantirna South",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2144764,
               "venue":"Wangaratta",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2145110,
               "venue":"Wagga Wagga",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2146108,
               "venue":"Traralgon",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2146142,
               "venue":"Townsville",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2146268,
               "venue":"Toowoomba",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2146793,
               "venue":"Thornbury",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2146827,
               "venue":"Thomastown",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2147357,
               "venue":"Tarneit",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2147381,
               "venue":"Taree",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2147497,
               "venue":"Tamworth",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2147714,
               "venue":"Sydney",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2147849,
               "venue":"Surfers Paradise",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2147892,
               "venue":"Sunnybank",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2147914,
               "venue":"Sunbury",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2148398,
               "venue":"Port Stephens",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2148591,
               "venue":"Springvale",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2148928,
               "venue":"Southport",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2148997,
               "venue":"South Grafton",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2149645,
               "venue":"Shepparton",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2149975,
               "venue":"Seaford",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2150660,
               "venue":"Saint Kilda",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2150717,
               "venue":"Saint Albans",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2150894,
               "venue":"Rowville",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2151437,
               "venue":"Rockhampton",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2151649,
               "venue":"Richmond",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2151716,
               "venue":"Reservoir",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2152286,
               "venue":"Queanbeyan",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2152329,
               "venue":"Quakers Hill",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2152558,
               "venue":"Preston",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2152659,
               "venue":"Port Macquarie",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2152819,
               "venue":"Point Cook",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2153951,
               "venue":"Pakenham South",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2154219,
               "venue":"Orange",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2154787,
               "venue":"Nowra",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2155001,
               "venue":"Northcote",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2155204,
               "venue":"Noble Park",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2155472,
               "venue":"Newcastle",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2155542,
               "venue":"Nerang",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2155718,
               "venue":"Narre Warren",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2155787,
               "venue":"Narangba",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2156340,
               "venue":"Mulgrave",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2156578,
               "venue":"Mount Martha",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2156643,
               "venue":"Mount Gambier",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":2156663,
               "venue":"Mount Eliza",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2156813,
               "venue":"Mosman",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2156878,
               "venue":"Mornington",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2156934,
               "venue":"Morayfield",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2157343,
               "venue":"Moe",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2157635,
               "venue":"Mill Park",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2157698,
               "venue":"Mildura",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2158151,
               "venue":"Melton",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2158177,
               "venue":"Melbourne",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2158562,
               "venue":"Maryborough",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2158626,
               "venue":"Marrickville",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2158651,
               "venue":"Maroubra",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2159045,
               "venue":"Maitland",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2159220,
               "venue":"Mackay",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2159851,
               "venue":"Liverpool",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2160063,
               "venue":"Lismore",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2160188,
               "venue":"Lilydale",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2160517,
               "venue":"Launceston",
               "subcountry":"Tasmania"
            },
            {
               "country":"Australia",
               "geonameid":2160560,
               "venue":"Lara",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2160582,
               "venue":"Langwarrin",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2160706,
               "venue":"Lalor",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2161532,
               "venue":"Keysborough",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2161540,
               "venue":"Kew",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2161776,
               "venue":"Katoomba",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2163137,
               "venue":"Hornsby",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2163355,
               "venue":"Hobart",
               "subcountry":"Tasmania"
            },
            {
               "country":"Australia",
               "geonameid":2163776,
               "venue":"Hawthorn South",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2163990,
               "venue":"Hampton Park",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2164422,
               "venue":"Griffith",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2164515,
               "venue":"Greensborough",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2164691,
               "venue":"Granville",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2164837,
               "venue":"Goulburn",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2165087,
               "venue":"Gold Coast",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2165200,
               "venue":"Glenroy",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2165329,
               "venue":"Glenferrie",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2165478,
               "venue":"Gladstone",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2165798,
               "venue":"Geelong",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2166143,
               "venue":"Frankston East",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2166144,
               "venue":"Frankston",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2166309,
               "venue":"Forster",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2167208,
               "venue":"Essendon",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2167279,
               "venue":"Epping",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2167280,
               "venue":"Epping",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2167312,
               "venue":"Engadine",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2167445,
               "venue":"Eltham",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2167817,
               "venue":"Echuca",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2167949,
               "venue":"Earlwood",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2168305,
               "venue":"Dubbo",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2168605,
               "venue":"Doncaster East",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2168607,
               "venue":"Doncaster",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2168943,
               "venue":"Devonport",
               "subcountry":"Tasmania"
            },
            {
               "country":"Australia",
               "geonameid":2169145,
               "venue":"Deer Park",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2169220,
               "venue":"Deception Bay",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2169460,
               "venue":"Dandenong",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2169956,
               "venue":"Cronulla",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2170078,
               "venue":"Cranbourne",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2170079,
               "venue":"Cranbourne",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2170089,
               "venue":"Craigieburn",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2171085,
               "venue":"Coffs Harbour",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2171168,
               "venue":"Coburg",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2171400,
               "venue":"Clayton",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2171507,
               "venue":"Wollongong",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2171845,
               "venue":"Cessnock",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2172111,
               "venue":"Castle Hill",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2172191,
               "venue":"Carrum Downs",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2172264,
               "venue":"Carnegie",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2172303,
               "venue":"Carlingford",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2172311,
               "venue":"Caringbah",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2172517,
               "venue":"Canberra",
               "subcountry":"Australian Capital Territory"
            },
            {
               "country":"Australia",
               "geonameid":2172686,
               "venue":"Camberwell",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2172710,
               "venue":"Caloundra",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2172797,
               "venue":"Cairns",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2172832,
               "venue":"Caboolture",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2173125,
               "venue":"Burnie",
               "subcountry":"Tasmania"
            },
            {
               "country":"Australia",
               "geonameid":2173323,
               "venue":"Bundaberg",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2173605,
               "venue":"Buderim",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2173741,
               "venue":"Brunswick",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2173911,
               "venue":"Broken Hill",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2174003,
               "venue":"Brisbane",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2174580,
               "venue":"Boronia",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2175411,
               "venue":"Blacktown",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2176031,
               "venue":"Berwick",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2176187,
               "venue":"Bendigo",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2176592,
               "venue":"Baulkham Hills",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2176632,
               "venue":"Bathurst",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2176934,
               "venue":"Banora Point",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2176947,
               "venue":"Bankstown",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2177091,
               "venue":"Ballarat",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2177513,
               "venue":"Auburn",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2177565,
               "venue":"Ashfield",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2177671,
               "venue":"Armidale",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2178174,
               "venue":"Albury",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2207259,
               "venue":"South Brisbane",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":2207618,
               "venue":"Cheltenham",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":2208285,
               "venue":"Randwick",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2208305,
               "venue":"Dee Why",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":2208313,
               "venue":"Umina",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":6301965,
               "venue":"Palmerston",
               "subcountry":"Northern Territory"
            },
            {
               "country":"Australia",
               "geonameid":6943558,
               "venue":"Bracken Ridge",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":7281782,
               "venue":"North Ryde",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":7281807,
               "venue":"Hoppers Crossing",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":7281838,
               "venue":"Logan City",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":7281839,
               "venue":"Carindale",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":7281840,
               "venue":"Paramatta",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":7281850,
               "venue":"Ferntree Gully",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":7302259,
               "venue":"City of Parramatta",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":7302628,
               "venue":"Adelaide Hills",
               "subcountry":"South Australia"
            },
            {
               "country":"Australia",
               "geonameid":7302631,
               "venue":"Canning Vale",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":7302642,
               "venue":"Glenmore Park",
               "subcountry":"New South Wales"
            },
            {
               "country":"Australia",
               "geonameid":7932612,
               "venue":"Glen Iris",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":7932629,
               "venue":"Balwyn North",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":7932636,
               "venue":"Carnegie",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":7932638,
               "venue":"Malvern East",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":7932646,
               "venue":"Brighton East",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":7932654,
               "venue":"Booval",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":8015209,
               "venue":"St Albans",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8347325,
               "venue":"Endeavour Hills",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8347717,
               "venue":"Clayton",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8347847,
               "venue":"Taylors Lakes",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8347896,
               "venue":"Roxburgh Park",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8348078,
               "venue":"Wyndham Vale",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8348101,
               "venue":"Willetton",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":8348734,
               "venue":"Thornbury",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8349108,
               "venue":"Thornlie",
               "subcountry":"Western Australia"
            },
            {
               "country":"Australia",
               "geonameid":8349243,
               "venue":"Hillside",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":8349381,
               "venue":"Bundoora",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":9957340,
               "venue":"Forest Lake",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":9957350,
               "venue":"Sunnybank Hills",
               "subcountry":"Queensland"
            },
            {
               "country":"Australia",
               "geonameid":9972518,
               "venue":"Narre Warren South",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":9972522,
               "venue":"Dandenong North",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":9972527,
               "venue":"Frankston South",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":9972578,
               "venue":"Sunshine West",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":9972579,
               "venue":"Altona Meadows",
               "subcountry":"Victoria"
            },
            {
               "country":"Australia",
               "geonameid":9972964,
               "venue":"West Pennant",
               "subcountry":"New South Wales"
            },
            {
               "country":"Aruba",
               "geonameid":3577154,
               "venue":"Oranjestad",
               "subcountry":"N/A"
            },
            {
               "country":"Aruba",
               "geonameid":3577277,
               "venue":"Babijn",
               "subcountry":"N/A"
            },
            {
               "country":"Aruba",
               "geonameid":3577284,
               "venue":"Angochi",
               "subcountry":"N/A"
            },
            {
               "country":"Aland Islands",
               "geonameid":3041732,
               "venue":"Mariehamn",
               "subcountry":"Mariehamns stad"
            },
            {
               "country":"Azerbaijan",
               "geonameid":146970,
               "venue":"Xankandi",
               "subcountry":"Xank01ddndi"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147059,
               "venue":"018fhm0259db0259yli",
               "subcountry":"Saatl0131"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147105,
               "venue":"Shushi",
               "subcountry":"015eu015fa"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147271,
               "venue":"Salyan",
               "subcountry":"Salyan"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147288,
               "venue":"Saatl0131",
               "subcountry":"Saatl0131"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147425,
               "venue":"Neft00e7ala",
               "subcountry":"Neft00e7ala"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147429,
               "venue":"Nakhchivan",
               "subcountry":"Nakhichevan"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147622,
               "venue":"Lankaran",
               "subcountry":"L0259nk0259ran"
            },
            {
               "country":"Azerbaijan",
               "geonameid":147982,
               "venue":"Imishli",
               "subcountry":"0130mi015fli"
            },
            {
               "country":"Azerbaijan",
               "geonameid":148106,
               "venue":"Fizuli",
               "subcountry":"F00fczuli"
            },
            {
               "country":"Azerbaijan",
               "geonameid":148290,
               "venue":"Dzhalilabad",
               "subcountry":"Jalilabad"
            },
            {
               "country":"Azerbaijan",
               "geonameid":148340,
               "venue":"Pushkino",
               "subcountry":"Bil01ddsuvar"
            },
            {
               "country":"Azerbaijan",
               "geonameid":148354,
               "venue":"Beylagan",
               "subcountry":"Beyl0259qan"
            },
            {
               "country":"Azerbaijan",
               "geonameid":148445,
               "venue":"Astara",
               "subcountry":"Astara"
            },
            {
               "country":"Azerbaijan",
               "geonameid":148565,
               "venue":"015eirvan",
               "subcountry":"Shirvan"
            },
            {
               "country":"Azerbaijan",
               "geonameid":148619,
               "venue":"A011fdam",
               "subcountry":"A011fdam"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584596,
               "venue":"Zaqatala",
               "subcountry":"Zaqatala"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584614,
               "venue":"Zabrat",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584649,
               "venue":"Yevlakh",
               "subcountry":"Yevlax City"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584716,
               "venue":"Yelenendorf",
               "subcountry":"Goygol Rayon"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584717,
               "venue":"Xa00e7maz",
               "subcountry":"Xa00e7maz"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584791,
               "venue":"Ujar",
               "subcountry":"Ucar"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584871,
               "venue":"Terter",
               "subcountry":"T01ddrt01ddr"
            },
            {
               "country":"Azerbaijan",
               "geonameid":584923,
               "venue":"Sumqay0131t",
               "subcountry":"Sumqayit"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585103,
               "venue":"Qara00e7uxur",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585152,
               "venue":"Shamkhor",
               "subcountry":"015e01ddmkir"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585156,
               "venue":"Shamakhi",
               "subcountry":"015eamax0131"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585170,
               "venue":"Sheki",
               "subcountry":"Shaki City"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585184,
               "venue":"Sabun00e7u",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585187,
               "venue":"Sabirabad",
               "subcountry":"Sabirabad"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585220,
               "venue":"Qusar",
               "subcountry":"Qusar"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585221,
               "venue":"Quba",
               "subcountry":"Quba"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585225,
               "venue":"Hac0131qabul",
               "subcountry":"Hac0131qabul"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585226,
               "venue":"Qazax",
               "subcountry":"Qazax"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585379,
               "venue":"Hac0131 Zeynalabdin",
               "subcountry":"Sumqayit"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585514,
               "venue":"Mingelchaur",
               "subcountry":"Ming01ddcevir"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585557,
               "venue":"Ma015fta011fa",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585568,
               "venue":"Mardakan",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585630,
               "venue":"L00f6kbatan",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585763,
               "venue":"Kyurdarmir",
               "subcountry":"K00fcrd01ddmir"
            },
            {
               "country":"Azerbaijan",
               "geonameid":585915,
               "venue":"Khirdalan",
               "subcountry":"Ab015feron"
            },
            {
               "country":"Azerbaijan",
               "geonameid":586340,
               "venue":"Yeni Suraxan0131",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":586427,
               "venue":"Geoktschai",
               "subcountry":"G00f6y00e7ay"
            },
            {
               "country":"Azerbaijan",
               "geonameid":586429,
               "venue":"H00f6vsan",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":586523,
               "venue":"Ganja",
               "subcountry":"G01ddnc01dd"
            },
            {
               "country":"Azerbaijan",
               "geonameid":586763,
               "venue":"Divichibazar",
               "subcountry":"Shabran"
            },
            {
               "country":"Azerbaijan",
               "geonameid":586925,
               "venue":"Buzovna",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":586968,
               "venue":"Biny Selo",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":587057,
               "venue":"Barda",
               "subcountry":"B01ddrd01dd"
            },
            {
               "country":"Azerbaijan",
               "geonameid":587078,
               "venue":"Bilajari",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":587084,
               "venue":"Baku",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":587261,
               "venue":"Amirdzhan",
               "subcountry":"Baki"
            },
            {
               "country":"Azerbaijan",
               "geonameid":587361,
               "venue":"Aghsu",
               "subcountry":"A011fsu"
            },
            {
               "country":"Azerbaijan",
               "geonameid":587378,
               "venue":"A011fda015f",
               "subcountry":"A011fda015f"
            },
            {
               "country":"Azerbaijan",
               "geonameid":587384,
               "venue":"Agdzhabedy",
               "subcountry":"A011fcab01dddi"
            },
            {
               "country":"Azerbaijan",
               "geonameid":824003,
               "venue":"Bak0131xanov",
               "subcountry":"Baki"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3186573,
               "venue":"Zenica",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3187609,
               "venue":"Visoko",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3188225,
               "venue":"Velika Kladu0161a",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3188582,
               "venue":"Tuzla",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3188893,
               "venue":"Trebinje",
               "subcountry":"Republika Srpska"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3188924,
               "venue":"Travnik",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3191281,
               "venue":"Sarajevo",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3192409,
               "venue":"Prijedor",
               "subcountry":"Republika Srpska"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3194828,
               "venue":"Mostar",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3199744,
               "venue":"Grada010dac",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3199779,
               "venue":"Gra010danica",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3200396,
               "venue":"Gora017ede",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3201984,
               "venue":"Doboj",
               "subcountry":"Republika Srpska"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3202822,
               "venue":"Cazin",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3203099,
               "venue":"Bugojno",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3203521,
               "venue":"Br010dko",
               "subcountry":"Br010dko"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3203653,
               "venue":"Bosanska Krupa",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3204186,
               "venue":"Bijeljina",
               "subcountry":"Republika Srpska"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3204222,
               "venue":"Biha0107",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3204541,
               "venue":"Banja Luka",
               "subcountry":"Republika Srpska"
            },
            {
               "country":"Bosnia and Herzegovina",
               "geonameid":3337476,
               "venue":"Konjic",
               "subcountry":"Federation of Bosnia and Herzegovina"
            },
            {
               "country":"Barbados",
               "geonameid":3374036,
               "venue":"Bridgetown",
               "subcountry":"Saint Michael"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185092,
               "venue":"Th0101kurgaon",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185095,
               "venue":"Tekn0101f",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185098,
               "venue":"Tungi",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185099,
               "venue":"Sylhet",
               "subcountry":"Sylhet"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185100,
               "venue":"Doh0101r",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185106,
               "venue":"Jam0101lpur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185108,
               "venue":"Shibganj",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185111,
               "venue":"S0101tkhira",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185115,
               "venue":"Sir0101jganj",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185116,
               "venue":"Netrakona",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185117,
               "venue":"Narsingdi",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185120,
               "venue":"Sandw012bp",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185121,
               "venue":"Sh0101hz0101dpur",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185127,
               "venue":"R0101mganj",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185128,
               "venue":"R0101jsh0101hi",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185138,
               "venue":"Pirojpur",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185141,
               "venue":"Panchagarh",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185148,
               "venue":"Patiya",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185149,
               "venue":"Parbatipur",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185155,
               "venue":"N0101r0101yanganj",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185156,
               "venue":"N0101lchiti",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185159,
               "venue":"N0101garpur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185160,
               "venue":"Nageswari",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185162,
               "venue":"Mymensingh",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185164,
               "venue":"Mukt0101g0101cha",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185165,
               "venue":"Mirz0101pur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185166,
               "venue":"Maulavi B0101z0101r",
               "subcountry":"Sylhet"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185167,
               "venue":"Morrelgonj",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185171,
               "venue":"Mehendiganj",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185173,
               "venue":"Mathba",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185181,
               "venue":"Lalmanirhat",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185183,
               "venue":"L0101ksh0101m",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185186,
               "venue":"Comilla",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185188,
               "venue":"Rangpur",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185191,
               "venue":"Kushtia",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185199,
               "venue":"K0101l012bganj",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185204,
               "venue":"Jhingerg0101cha",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185206,
               "venue":"Joypur H0101t",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185207,
               "venue":"Ishurdi",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185209,
               "venue":"Habiganj",
               "subcountry":"Sylhet"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185210,
               "venue":"Gaurnadi",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185218,
               "venue":"Gafargaon",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185224,
               "venue":"Feni",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185236,
               "venue":"R0101ipur",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185239,
               "venue":"Sarankhola",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185241,
               "venue":"Dhaka",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185247,
               "venue":"Chilm0101ri",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185249,
               "venue":"Chh0101galn0101iya",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185251,
               "venue":"L0101lmohan",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185252,
               "venue":"Khagrachhari",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185254,
               "venue":"Chh0101tak",
               "subcountry":"Sylhet"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185260,
               "venue":"Bh0101tp0101ra Abhaynagar",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185262,
               "venue":"Bher0101m0101ra",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185263,
               "venue":"Bhairab B0101z0101r",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185270,
               "venue":"B0101ndarban",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185272,
               "venue":"K0101lia",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185274,
               "venue":"Baniachang",
               "subcountry":"Sylhet"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185276,
               "venue":"B0101jitpur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185283,
               "venue":"Badarganj",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185293,
               "venue":"Narail",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1185920,
               "venue":"Tungip0101ra",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1188569,
               "venue":"Sarish0101b0101ri",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1189056,
               "venue":"Sakhipur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1189638,
               "venue":"Raoj0101n",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1191139,
               "venue":"Phultala",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1191368,
               "venue":"P0101lang",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1192366,
               "venue":"P0101r Naogaon",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1193823,
               "venue":"Nab012bnagar",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1196292,
               "venue":"Lakshm012bpur",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1197895,
               "venue":"Kesabpur",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1201753,
               "venue":"H0101j012bganj",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1203344,
               "venue":"Far012bdpur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1203891,
               "venue":"Din0101jpur",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1205481,
               "venue":"Uttar Char Fasson",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1205733,
               "venue":"Chittagong",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1207047,
               "venue":"Char Bhadr0101san",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1209562,
               "venue":"Bera",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1210565,
               "venue":"Burh0101nuddin",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336133,
               "venue":"S0101tkania",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336134,
               "venue":"Cox2019s B0101z0101r",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336135,
               "venue":"Khulna",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336136,
               "venue":"Bhola",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336137,
               "venue":"Baris0101l",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336140,
               "venue":"Jessore",
               "subcountry":"Khulna"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336143,
               "venue":"P0101bna",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1336144,
               "venue":"T0101ng0101il",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1337233,
               "venue":"Bogra",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1337239,
               "venue":"P012brgaaj",
               "subcountry":"Rangpur Division"
            },
            {
               "country":"Bangladesh",
               "geonameid":1337240,
               "venue":"Naw0101bganj",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":1337245,
               "venue":"M0101d0101r012bpur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1337248,
               "venue":"Sherpur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1337249,
               "venue":"Kishorganj",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":1462681,
               "venue":"Manikchari",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":1477498,
               "venue":"Bh0101nd0101ria",
               "subcountry":"Baris0101l"
            },
            {
               "country":"Bangladesh",
               "geonameid":6414184,
               "venue":"Fatikchari",
               "subcountry":"Chittagong"
            },
            {
               "country":"Bangladesh",
               "geonameid":6545349,
               "venue":"Saidpur",
               "subcountry":"R0101jsh0101hi"
            },
            {
               "country":"Bangladesh",
               "geonameid":7701354,
               "venue":"Azimpur",
               "subcountry":"Dhaka"
            },
            {
               "country":"Bangladesh",
               "geonameid":9827976,
               "venue":"Paltan",
               "subcountry":"Dhaka"
            },
            {
               "country":"Belgium",
               "geonameid":2783081,
               "venue":"Zwijndrecht",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783089,
               "venue":"Zwevegem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783175,
               "venue":"Zottegem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783188,
               "venue":"Zonhoven",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783204,
               "venue":"Zoersel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783274,
               "venue":"Zemst",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783293,
               "venue":"Zele",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783308,
               "venue":"Zedelgem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783310,
               "venue":"Zaventem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783416,
               "venue":"Wuustwezel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783632,
               "venue":"Willebroek",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783759,
               "venue":"Wevelgem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783763,
               "venue":"Wetteren",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783801,
               "venue":"Westerlo",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783820,
               "venue":"Wervik",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2783941,
               "venue":"Wavre",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2783985,
               "venue":"Waterloo",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2784068,
               "venue":"Waregem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2784189,
               "venue":"Walcourt",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2784548,
               "venue":"Vis00e9",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2784604,
               "venue":"Vilvoorde",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2784821,
               "venue":"Verviers",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2785141,
               "venue":"Turnhout",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2785169,
               "venue":"Tubize",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2785341,
               "venue":"Tournai",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2785364,
               "venue":"Torhout",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2785389,
               "venue":"Tongeren",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2785470,
               "venue":"Tienen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2785476,
               "venue":"Tielt",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2785612,
               "venue":"Tessenderlo",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2785622,
               "venue":"Tervuren",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2785778,
               "venue":"Temse",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786087,
               "venue":"Stekene",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786229,
               "venue":"Stabroek",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786344,
               "venue":"Soumagne",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2786420,
               "venue":"Soignies",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2786545,
               "venue":"Sint-Truiden",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786559,
               "venue":"Sint-Pieters-Leeuw",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786578,
               "venue":"Sint-Niklaas",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786634,
               "venue":"Sint-Kruis",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786641,
               "venue":"Sint-Katelijne-Waver",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786694,
               "venue":"Sint-Gillis-Waas",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786700,
               "venue":"Sint-Genesius-Rode",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2786824,
               "venue":"Seraing",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2786963,
               "venue":"Schoten",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2787048,
               "venue":"Schilde",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2787356,
               "venue":"Saint-Nicolas",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2787416,
               "venue":"Saint-Ghislain",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2787662,
               "venue":"Rotselaar",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2787769,
               "venue":"Ronse",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2787889,
               "venue":"Roeselare",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2787989,
               "venue":"Rixensart",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2788088,
               "venue":"Riemst",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2788348,
               "venue":"Ranst",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2788499,
               "venue":"Quaregnon",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2788506,
               "venue":"Puurs",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2788521,
               "venue":"Putte",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2788726,
               "venue":"Poperinge",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2788765,
               "venue":"Pont-00e0-Celles",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2789162,
               "venue":"P00e9ruwelz",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2789232,
               "venue":"Peer",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2789413,
               "venue":"Overijse",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2789471,
               "venue":"Oupeye",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2789529,
               "venue":"Oudenaarde",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2789751,
               "venue":"Oostkamp",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2789786,
               "venue":"Ostend",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2790101,
               "venue":"Nivelles",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2790114,
               "venue":"Ninove",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2790135,
               "venue":"Nijlen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2790357,
               "venue":"Neerpelt",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2790471,
               "venue":"Namur",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2790595,
               "venue":"Mouscron",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2790676,
               "venue":"Mortsel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2790697,
               "venue":"Morlanwelz-Mariemont",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2790869,
               "venue":"Mons",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2791067,
               "venue":"Mol",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791194,
               "venue":"Middelkerke",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791315,
               "venue":"Merelbeke",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791343,
               "venue":"Menen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791424,
               "venue":"Meise",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791537,
               "venue":"Mechelen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791744,
               "venue":"Marche-en-Famenne",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2791814,
               "venue":"Manage",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2791857,
               "venue":"Maldegem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791961,
               "venue":"Maasmechelen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2791964,
               "venue":"Maaseik",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792073,
               "venue":"Louvain-la-Neuve",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2792165,
               "venue":"Londerzeel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792179,
               "venue":"Lommel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792196,
               "venue":"Lokeren",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792235,
               "venue":"Lochristi",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792360,
               "venue":"Lille",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792397,
               "venue":"Lier",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792413,
               "venue":"Li00e8ge",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2792482,
               "venue":"Leuven",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2792567,
               "venue":"Lessines",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2793077,
               "venue":"Lede",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2793144,
               "venue":"Lebbeke",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2793446,
               "venue":"Lanaken",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2793508,
               "venue":"La Louvi00e8re",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2794055,
               "venue":"Kortrijk",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2794070,
               "venue":"Kortenberg",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2794117,
               "venue":"Kontich",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2794166,
               "venue":"Koksijde",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2794210,
               "venue":"Knokke-Heist",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2794663,
               "venue":"Kasterlee",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2794730,
               "venue":"Kapellen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2794788,
               "venue":"Kalmthout",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795009,
               "venue":"Izegem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795100,
               "venue":"Ieper",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795113,
               "venue":"Huy",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2795261,
               "venue":"Houthalen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795398,
               "venue":"Hoogstraten",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795730,
               "venue":"Hoboken",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795800,
               "venue":"Heusden",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795908,
               "venue":"Herzele",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2795912,
               "venue":"Herve",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2795930,
               "venue":"Herstal",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2796009,
               "venue":"Herentals",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796012,
               "venue":"Herent",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796132,
               "venue":"Helchteren",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796153,
               "venue":"Heist-op-den-Berg",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796491,
               "venue":"Hasselt",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796542,
               "venue":"Harelbeke",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796637,
               "venue":"Hamme",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796696,
               "venue":"Halle",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2796833,
               "venue":"Haaltert",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2797114,
               "venue":"Grimbergen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2797638,
               "venue":"Geraardsbergen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2797656,
               "venue":"Gent",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2797670,
               "venue":"Genk",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2797713,
               "venue":"Gembloux",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2797779,
               "venue":"Geel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2798023,
               "venue":"Frameries",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2798297,
               "venue":"Fleurus",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2798301,
               "venue":"Fl00e9ron",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2798307,
               "venue":"Fl00e9malle-Haute",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2798551,
               "venue":"Evergem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2798573,
               "venue":"Eupen",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2798615,
               "venue":"Essen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2798987,
               "venue":"Eeklo",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799007,
               "venue":"Edegem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799090,
               "venue":"Duffel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799226,
               "venue":"Dour",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2799365,
               "venue":"Dilbeek",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799369,
               "venue":"Diksmuide",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799397,
               "venue":"Diest",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799412,
               "venue":"Diepenbeek",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799496,
               "venue":"Destelbergen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799645,
               "venue":"Dendermonde",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799647,
               "venue":"Denderleeuw",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2799746,
               "venue":"Deinze",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2800063,
               "venue":"Courcelles",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2800220,
               "venue":"Colfontaine",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2800438,
               "venue":"Chaudfontaine",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2800448,
               "venue":"Ch00e2telet",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2800461,
               "venue":"Chasse Royale",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2800481,
               "venue":"Charleroi",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2800866,
               "venue":"Brussels",
               "subcountry":"Brussels Capital"
            },
            {
               "country":"Belgium",
               "geonameid":2800931,
               "venue":"Brugge",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2801106,
               "venue":"Brecht",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2801117,
               "venue":"Brasschaat",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2801150,
               "venue":"Braine-le-Comte",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2801154,
               "venue":"Braine-l'Alleud",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2801226,
               "venue":"Boussu",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2801447,
               "venue":"Bornem",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2801494,
               "venue":"Boom",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2801858,
               "venue":"Blankenberge",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2801922,
               "venue":"Binche",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2801924,
               "venue":"Bilzen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2802031,
               "venue":"Beveren",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2802170,
               "venue":"Beringen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2802433,
               "venue":"Beersel",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2802435,
               "venue":"Beerse",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2802743,
               "venue":"Balen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2803010,
               "venue":"Ath",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2803033,
               "venue":"Asse",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2803073,
               "venue":"Arlon",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2803138,
               "venue":"Antwerpen",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2803160,
               "venue":"Ans",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2803204,
               "venue":"Andenne",
               "subcountry":"Wallonia"
            },
            {
               "country":"Belgium",
               "geonameid":2803429,
               "venue":"Aarschot",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2803443,
               "venue":"Aalter",
               "subcountry":"Flanders"
            },
            {
               "country":"Belgium",
               "geonameid":2803448,
               "venue":"Aalst",
               "subcountry":"Flanders"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2353197,
               "venue":"Zorgo",
               "subcountry":"Plateau-Central"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2353688,
               "venue":"Yako",
               "subcountry":"Nord"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2354176,
               "venue":"Tougan",
               "subcountry":"Boucle du Mouhoun"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2354349,
               "venue":"Titao",
               "subcountry":"Nord"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2354675,
               "venue":"Tenkodogo",
               "subcountry":"Centre-Est"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2356228,
               "venue":"R00e9o",
               "subcountry":"Centre-Ouest"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2356454,
               "venue":"P00f4",
               "subcountry":"Centre-Sud"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2357043,
               "venue":"Ouahigouya",
               "subcountry":"Nord"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2357048,
               "venue":"Ouagadougou",
               "subcountry":"Centre"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2357163,
               "venue":"Nouna",
               "subcountry":"Boucle du Mouhoun"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2358100,
               "venue":"Manga",
               "subcountry":"Centre-Sud"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2358382,
               "venue":"L00e9o",
               "subcountry":"Centre-Ouest"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2358738,
               "venue":"Koup00e9la",
               "subcountry":"Centre-Est"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2358946,
               "venue":"Koudougou",
               "subcountry":"Centre-Ouest"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2359142,
               "venue":"Kongoussi",
               "subcountry":"Centre-Nord"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2359227,
               "venue":"Kombissiri",
               "subcountry":"Centre-Sud"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2359317,
               "venue":"Kokologo",
               "subcountry":"Centre-Ouest"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2359608,
               "venue":"Kaya",
               "subcountry":"Centre-Nord"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2360073,
               "venue":"Hound00e9",
               "subcountry":"High-Basins"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2360238,
               "venue":"Gourcy",
               "subcountry":"Nord"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2360615,
               "venue":"Garango",
               "subcountry":"Centre-Est"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2360886,
               "venue":"Fada N'gourma",
               "subcountry":"Est"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2361082,
               "venue":"Dori",
               "subcountry":"Sahel"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2361177,
               "venue":"Djibo",
               "subcountry":"Sahel"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2361373,
               "venue":"Diapaga",
               "subcountry":"Est"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2361477,
               "venue":"D00e9dougou",
               "subcountry":"Boucle du Mouhoun"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2361845,
               "venue":"Bouss00e9",
               "subcountry":"Plateau-Central"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2361946,
               "venue":"Boulsa",
               "subcountry":"Centre-Nord"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2362344,
               "venue":"Bobo-Dioulasso",
               "subcountry":"High-Basins"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2362909,
               "venue":"Banfora",
               "subcountry":"Cascades"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2577162,
               "venue":"Gaoua",
               "subcountry":"Southwest"
            },
            {
               "country":"Burkina Faso",
               "geonameid":2577164,
               "venue":"Orodara",
               "subcountry":"High-Basins"
            },
            {
               "country":"Bulgaria",
               "geonameid":725578,
               "venue":"Yambol",
               "subcountry":"Yambol"
            },
            {
               "country":"Bulgaria",
               "geonameid":725712,
               "venue":"Vratsa",
               "subcountry":"Vratsa"
            },
            {
               "country":"Bulgaria",
               "geonameid":725905,
               "venue":"Vidin",
               "subcountry":"Vidin"
            },
            {
               "country":"Bulgaria",
               "geonameid":725988,
               "venue":"Velingrad",
               "subcountry":"Pazardzhik"
            },
            {
               "country":"Bulgaria",
               "geonameid":725993,
               "venue":"Veliko T016drnovo",
               "subcountry":"Veliko T016drnovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":726050,
               "venue":"Varna",
               "subcountry":"Varna"
            },
            {
               "country":"Bulgaria",
               "geonameid":726174,
               "venue":"Targovishte",
               "subcountry":"T016drgovishte"
            },
            {
               "country":"Bulgaria",
               "geonameid":726320,
               "venue":"Troyan",
               "subcountry":"Lovech"
            },
            {
               "country":"Bulgaria",
               "geonameid":726418,
               "venue":"Dobrich",
               "subcountry":"Dobrich"
            },
            {
               "country":"Bulgaria",
               "geonameid":726534,
               "venue":"Svishtov",
               "subcountry":"Veliko T016drnovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":726546,
               "venue":"Svilengrad",
               "subcountry":"Khaskovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":726848,
               "venue":"Stara Zagora",
               "subcountry":"Stara Zagora"
            },
            {
               "country":"Bulgaria",
               "geonameid":726872,
               "venue":"Dupnitsa",
               "subcountry":"Kyustendil"
            },
            {
               "country":"Bulgaria",
               "geonameid":727011,
               "venue":"Sofia",
               "subcountry":"Sofia-Capital"
            },
            {
               "country":"Bulgaria",
               "geonameid":727030,
               "venue":"Smolyan",
               "subcountry":"Smolyan"
            },
            {
               "country":"Bulgaria",
               "geonameid":727079,
               "venue":"Sliven",
               "subcountry":"Sliven"
            },
            {
               "country":"Bulgaria",
               "geonameid":727221,
               "venue":"Silistra",
               "subcountry":"Silistra"
            },
            {
               "country":"Bulgaria",
               "geonameid":727233,
               "venue":"Shumen",
               "subcountry":"Shumen"
            },
            {
               "country":"Bulgaria",
               "geonameid":727337,
               "venue":"Sevlievo",
               "subcountry":"Gabrovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":727447,
               "venue":"Sandanski",
               "subcountry":"Blagoevgrad"
            },
            {
               "country":"Bulgaria",
               "geonameid":727462,
               "venue":"Samokov",
               "subcountry":"Sofiya"
            },
            {
               "country":"Bulgaria",
               "geonameid":727523,
               "venue":"Ruse",
               "subcountry":"Ruse"
            },
            {
               "country":"Bulgaria",
               "geonameid":727696,
               "venue":"Razgrad",
               "subcountry":"Razgrad"
            },
            {
               "country":"Bulgaria",
               "geonameid":727791,
               "venue":"Rakovski",
               "subcountry":"Plovdiv"
            },
            {
               "country":"Bulgaria",
               "geonameid":728075,
               "venue":"Popovo",
               "subcountry":"T016drgovishte"
            },
            {
               "country":"Bulgaria",
               "geonameid":728193,
               "venue":"Plovdiv",
               "subcountry":"Plovdiv"
            },
            {
               "country":"Bulgaria",
               "geonameid":728203,
               "venue":"Pleven",
               "subcountry":"Pleven"
            },
            {
               "country":"Bulgaria",
               "geonameid":728288,
               "venue":"Petrich",
               "subcountry":"Blagoevgrad"
            },
            {
               "country":"Bulgaria",
               "geonameid":728317,
               "venue":"Peshtera",
               "subcountry":"Pazardzhik"
            },
            {
               "country":"Bulgaria",
               "geonameid":728330,
               "venue":"Pernik",
               "subcountry":"Pernik"
            },
            {
               "country":"Bulgaria",
               "geonameid":728378,
               "venue":"Pazardzhik",
               "subcountry":"Pazardzhik"
            },
            {
               "country":"Bulgaria",
               "geonameid":728448,
               "venue":"Panagyurishte",
               "subcountry":"Pazardzhik"
            },
            {
               "country":"Bulgaria",
               "geonameid":728742,
               "venue":"Nova Zagora",
               "subcountry":"Sliven"
            },
            {
               "country":"Bulgaria",
               "geonameid":729114,
               "venue":"Montana",
               "subcountry":"Montana"
            },
            {
               "country":"Bulgaria",
               "geonameid":729559,
               "venue":"Lovech",
               "subcountry":"Lovech"
            },
            {
               "country":"Bulgaria",
               "geonameid":729581,
               "venue":"Lom",
               "subcountry":"Montana"
            },
            {
               "country":"Bulgaria",
               "geonameid":729730,
               "venue":"Kyustendil",
               "subcountry":"Kyustendil"
            },
            {
               "country":"Bulgaria",
               "geonameid":729794,
               "venue":"Kardzhali",
               "subcountry":"K016drdzhali"
            },
            {
               "country":"Bulgaria",
               "geonameid":730435,
               "venue":"Haskovo",
               "subcountry":"Khaskovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":730442,
               "venue":"Kharmanli",
               "subcountry":"Khaskovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":730496,
               "venue":"Kazanl016dk",
               "subcountry":"Stara Zagora"
            },
            {
               "country":"Bulgaria",
               "geonameid":730559,
               "venue":"Karnobat",
               "subcountry":"Burgas"
            },
            {
               "country":"Bulgaria",
               "geonameid":730565,
               "venue":"Karlovo",
               "subcountry":"Plovdiv"
            },
            {
               "country":"Bulgaria",
               "geonameid":731108,
               "venue":"Gotse Delchev",
               "subcountry":"Blagoevgrad"
            },
            {
               "country":"Bulgaria",
               "geonameid":731233,
               "venue":"Gorna Oryakhovitsa",
               "subcountry":"Veliko T016drnovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":731549,
               "venue":"Gabrovo",
               "subcountry":"Gabrovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":732263,
               "venue":"Dimitrovgrad",
               "subcountry":"Khaskovo"
            },
            {
               "country":"Bulgaria",
               "geonameid":732452,
               "venue":"Chirpan",
               "subcountry":"Stara Zagora"
            },
            {
               "country":"Bulgaria",
               "geonameid":732491,
               "venue":"Cherven Bryag",
               "subcountry":"Pleven"
            },
            {
               "country":"Bulgaria",
               "geonameid":732770,
               "venue":"Burgas",
               "subcountry":"Burgas"
            },
            {
               "country":"Bulgaria",
               "geonameid":733014,
               "venue":"Botevgrad",
               "subcountry":"Sofiya"
            },
            {
               "country":"Bulgaria",
               "geonameid":733191,
               "venue":"Blagoevgrad",
               "subcountry":"Blagoevgrad"
            },
            {
               "country":"Bulgaria",
               "geonameid":733264,
               "venue":"Berkovitsa",
               "subcountry":"Montana"
            },
            {
               "country":"Bulgaria",
               "geonameid":733579,
               "venue":"Aytos",
               "subcountry":"Burgas"
            },
            {
               "country":"Bulgaria",
               "geonameid":733618,
               "venue":"Asenovgrad",
               "subcountry":"Plovdiv"
            },
            {
               "country":"Bahrain",
               "geonameid":290104,
               "venue":"Sitrah",
               "subcountry":"Manama"
            },
            {
               "country":"Bahrain",
               "geonameid":290187,
               "venue":"Mad012bnat 2018012as00e1",
               "subcountry":"Southern Governorate"
            },
            {
               "country":"Bahrain",
               "geonameid":290215,
               "venue":"Jidd 1e28af015f",
               "subcountry":"Manama"
            },
            {
               "country":"Bahrain",
               "geonameid":290247,
               "venue":"Mad012bnat 1e28amad",
               "subcountry":"Central Governorate"
            },
            {
               "country":"Bahrain",
               "geonameid":290269,
               "venue":"D0101r Kulayb",
               "subcountry":"Southern Governorate"
            },
            {
               "country":"Bahrain",
               "geonameid":290332,
               "venue":"Al Muharraq",
               "subcountry":"Muharraq"
            },
            {
               "country":"Bahrain",
               "geonameid":290340,
               "venue":"Manama",
               "subcountry":"Manama"
            },
            {
               "country":"Bahrain",
               "geonameid":385038,
               "venue":"Ar Rif01012018",
               "subcountry":"Southern Governorate"
            },
            {
               "country":"Burundi",
               "geonameid":422232,
               "venue":"Makamba",
               "subcountry":"Makamba"
            },
            {
               "country":"Burundi",
               "geonameid":423328,
               "venue":"Bururi",
               "subcountry":"Bururi"
            },
            {
               "country":"Burundi",
               "geonameid":425378,
               "venue":"Bujumbura",
               "subcountry":"Bujumbura Mairie"
            },
            {
               "country":"Burundi",
               "geonameid":425551,
               "venue":"Muramvya",
               "subcountry":"Muramvya"
            },
            {
               "country":"Burundi",
               "geonameid":426272,
               "venue":"Gitega",
               "subcountry":"Gitega"
            },
            {
               "country":"Burundi",
               "geonameid":426700,
               "venue":"Ruyigi",
               "subcountry":"Ruyigi"
            },
            {
               "country":"Burundi",
               "geonameid":430569,
               "venue":"Ngozi",
               "subcountry":"Ngozi"
            },
            {
               "country":"Burundi",
               "geonameid":430952,
               "venue":"Kayanza",
               "subcountry":"Kayanza"
            },
            {
               "country":"Burundi",
               "geonameid":431748,
               "venue":"Muyinga",
               "subcountry":"Muyinga"
            },
            {
               "country":"Burundi",
               "geonameid":433635,
               "venue":"Rutana",
               "subcountry":"Rutana"
            },
            {
               "country":"Benin",
               "geonameid":2391377,
               "venue":"Tchaourou",
               "subcountry":"Borgou"
            },
            {
               "country":"Benin",
               "geonameid":2391455,
               "venue":"Tangui00e9ta",
               "subcountry":"Atakora"
            },
            {
               "country":"Benin",
               "geonameid":2391893,
               "venue":"Sav00e9",
               "subcountry":"Collines"
            },
            {
               "country":"Benin",
               "geonameid":2391895,
               "venue":"Savalou",
               "subcountry":"Collines"
            },
            {
               "country":"Benin",
               "geonameid":2392009,
               "venue":"Sak00e9t00e9",
               "subcountry":"Plateau"
            },
            {
               "country":"Benin",
               "geonameid":2392087,
               "venue":"Porto-Novo",
               "subcountry":"Qu00e9m00e9"
            },
            {
               "country":"Benin",
               "geonameid":2392108,
               "venue":"Pob00e9",
               "subcountry":"Plateau"
            },
            {
               "country":"Benin",
               "geonameid":2392204,
               "venue":"Parakou",
               "subcountry":"Borgou"
            },
            {
               "country":"Benin",
               "geonameid":2392308,
               "venue":"Ouidah",
               "subcountry":"Atlantique"
            },
            {
               "country":"Benin",
               "geonameid":2392505,
               "venue":"Nikki",
               "subcountry":"Borgou"
            },
            {
               "country":"Benin",
               "geonameid":2392601,
               "venue":"Natitingou",
               "subcountry":"Atakora"
            },
            {
               "country":"Benin",
               "geonameid":2392837,
               "venue":"Malanville",
               "subcountry":"Atakora"
            },
            {
               "country":"Benin",
               "geonameid":2392897,
               "venue":"Lokossa",
               "subcountry":"Mono"
            },
            {
               "country":"Benin",
               "geonameid":2393551,
               "venue":"K00e9tou",
               "subcountry":"Plateau"
            },
            {
               "country":"Benin",
               "geonameid":2393693,
               "venue":"Kandi",
               "subcountry":"Alibori"
            },
            {
               "country":"Benin",
               "geonameid":2394545,
               "venue":"Dogbo",
               "subcountry":"Kouffo"
            },
            {
               "country":"Benin",
               "geonameid":2394560,
               "venue":"Djougou",
               "subcountry":"Donga"
            },
            {
               "country":"Benin",
               "geonameid":2394711,
               "venue":"Dassa-Zoum00e9",
               "subcountry":"Collines"
            },
            {
               "country":"Benin",
               "geonameid":2394814,
               "venue":"Cov00e9",
               "subcountry":"Zou"
            },
            {
               "country":"Benin",
               "geonameid":2394819,
               "venue":"Cotonou",
               "subcountry":"Littoral"
            },
            {
               "country":"Benin",
               "geonameid":2394824,
               "venue":"Com00e9",
               "subcountry":"Mono"
            },
            {
               "country":"Benin",
               "geonameid":2395049,
               "venue":"Bohicon",
               "subcountry":"Zou"
            },
            {
               "country":"Benin",
               "geonameid":2395182,
               "venue":"Bemb00e8r00e8k00e8",
               "subcountry":"Borgou"
            },
            {
               "country":"Benin",
               "geonameid":2395261,
               "venue":"Bassila",
               "subcountry":"Donga"
            },
            {
               "country":"Benin",
               "geonameid":2395317,
               "venue":"Banikoara",
               "subcountry":"Alibori"
            },
            {
               "country":"Benin",
               "geonameid":2395568,
               "venue":"Aplahou00e9",
               "subcountry":"Kouffo"
            },
            {
               "country":"Benin",
               "geonameid":2395635,
               "venue":"Allada",
               "subcountry":"Atlantique"
            },
            {
               "country":"Benin",
               "geonameid":2395914,
               "venue":"Abomey-Calavi",
               "subcountry":"Atlantique"
            },
            {
               "country":"Benin",
               "geonameid":2395915,
               "venue":"Abomey",
               "subcountry":"Zou"
            },
            {
               "country":"Saint Barthelemy",
               "geonameid":3579132,
               "venue":"Gustavia",
               "subcountry":"N/A"
            },
            {
               "country":"Bermuda",
               "geonameid":3573197,
               "venue":"Hamilton",
               "subcountry":"Hamilton city"
            },
            {
               "country":"Brunei",
               "geonameid":1820071,
               "venue":"Tutong",
               "subcountry":"Tutong"
            },
            {
               "country":"Brunei",
               "geonameid":1820187,
               "venue":"Seria",
               "subcountry":"Belait"
            },
            {
               "country":"Brunei",
               "geonameid":1820491,
               "venue":"Kuala Belait",
               "subcountry":"Belait"
            },
            {
               "country":"Brunei",
               "geonameid":1820906,
               "venue":"Bandar Seri Begawan",
               "subcountry":"Brunei and Muara"
            },
            {
               "country":"Bolivia",
               "geonameid":3901178,
               "venue":"Yacuiba",
               "subcountry":"Tarija"
            },
            {
               "country":"Bolivia",
               "geonameid":3901301,
               "venue":"Warnes",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bolivia",
               "geonameid":3901501,
               "venue":"Villaz00f3n",
               "subcountry":"Potos00ed"
            },
            {
               "country":"Bolivia",
               "geonameid":3901504,
               "venue":"Villa Yapacan00ed",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bolivia",
               "geonameid":3901547,
               "venue":"Villamontes",
               "subcountry":"Tarija"
            },
            {
               "country":"Bolivia",
               "geonameid":3902202,
               "venue":"Tupiza",
               "subcountry":"Potos00ed"
            },
            {
               "country":"Bolivia",
               "geonameid":3902377,
               "venue":"Trinidad",
               "subcountry":"El Beni"
            },
            {
               "country":"Bolivia",
               "geonameid":3903320,
               "venue":"Tarija",
               "subcountry":"Tarija"
            },
            {
               "country":"Bolivia",
               "geonameid":3903987,
               "venue":"Sucre",
               "subcountry":"Chuquisaca"
            },
            {
               "country":"Bolivia",
               "geonameid":3904666,
               "venue":"Santiago del Torno",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bolivia",
               "geonameid":3904906,
               "venue":"Santa Cruz de la Sierra",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bolivia",
               "geonameid":3905658,
               "venue":"San Ignacio de Velasco",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bolivia",
               "geonameid":3905792,
               "venue":"San Borja",
               "subcountry":"El Beni"
            },
            {
               "country":"Bolivia",
               "geonameid":3906466,
               "venue":"Riberalta",
               "subcountry":"El Beni"
            },
            {
               "country":"Bolivia",
               "geonameid":3907080,
               "venue":"Punata",
               "subcountry":"Cochabamba"
            },
            {
               "country":"Bolivia",
               "geonameid":3907584,
               "venue":"Potos00ed",
               "subcountry":"Potos00ed"
            },
            {
               "country":"Bolivia",
               "geonameid":3909234,
               "venue":"Oruro",
               "subcountry":"Oruro"
            },
            {
               "country":"Bolivia",
               "geonameid":3910027,
               "venue":"Montero",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bolivia",
               "geonameid":3910291,
               "venue":"Mizque",
               "subcountry":"Cochabamba"
            },
            {
               "country":"Bolivia",
               "geonameid":3911409,
               "venue":"Llallagua",
               "subcountry":"Potos00ed"
            },
            {
               "country":"Bolivia",
               "geonameid":3911925,
               "venue":"La Paz",
               "subcountry":"La Paz"
            },
            {
               "country":"Bolivia",
               "geonameid":3914839,
               "venue":"Huanuni",
               "subcountry":"Oruro"
            },
            {
               "country":"Bolivia",
               "geonameid":3915350,
               "venue":"Guayaramer00edn",
               "subcountry":"El Beni"
            },
            {
               "country":"Bolivia",
               "geonameid":3918937,
               "venue":"Cotoca",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bolivia",
               "geonameid":3919968,
               "venue":"Cochabamba",
               "subcountry":"Cochabamba"
            },
            {
               "country":"Bolivia",
               "geonameid":3919998,
               "venue":"Cobija",
               "subcountry":"Pando"
            },
            {
               "country":"Bolivia",
               "geonameid":3922414,
               "venue":"Camiri",
               "subcountry":"Santa Cruz"
            },
            {
               "country":"Bonaire, Saint Eustatius and Saba",
               "geonameid":3513563,
               "venue":"Kralendijk",
               "subcountry":"Bonaire"
            },
            {
               "country":"Brazil",
               "geonameid":3384986,
               "venue":"Vit00f3ria do Mearim",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3384987,
               "venue":"Vit00f3ria de Santo Ant00e3o",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3385022,
               "venue":"Viseu",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3385077,
               "venue":"Conde",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3385088,
               "venue":"Vigia",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3385106,
               "venue":"Vi00e7osa do Cear00e1",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3385109,
               "venue":"Vi00e7osa",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3385122,
               "venue":"Viana",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3385467,
               "venue":"V00e1rzea Alegre",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3385504,
               "venue":"Varjota",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3385538,
               "venue":"Vargem Grande",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3385592,
               "venue":"Valen00e7a do Piau00ed",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3385742,
               "venue":"Uni00e3o dos Palmares",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3385745,
               "venue":"Uni00e3o",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3385922,
               "venue":"Tuntum",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3385935,
               "venue":"Tucuru00ed",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3385980,
               "venue":"Tucum00e3",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3386042,
               "venue":"Trindade",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3386177,
               "venue":"Trairi",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3386264,
               "venue":"Toritama",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3386279,
               "venue":"Tom00e9 A00e7u",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3386361,
               "venue":"Timon",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3386372,
               "venue":"Timbiras",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3386396,
               "venue":"Timba00faba",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3386449,
               "venue":"Tiangu00e1",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3386496,
               "venue":"Teresina",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3386567,
               "venue":"S00e3o Jo00e3o dos Inhamuns",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3386931,
               "venue":"Tamandar00e9",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3387082,
               "venue":"Tabira",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3387115,
               "venue":"Surubim",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3387202,
               "venue":"Sousa",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3387204,
               "venue":"Soure",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3387266,
               "venue":"Sol00e2nea",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3387296,
               "venue":"Sobral",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3387604,
               "venue":"Sirinha00e9m",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3387663,
               "venue":"Sert00e2nia",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3387786,
               "venue":"Serra Talhada",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3387926,
               "venue":"Senador Pompeu",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3387987,
               "venue":"Satuba",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3388145,
               "venue":"S00e3o Raimundo Nonato",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3388269,
               "venue":"S00e3o Miguel dos Campos",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3388270,
               "venue":"S00e3o Miguel do Guam00e1",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3388318,
               "venue":"S00e3o Mateus do Maranh00e3o",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3388341,
               "venue":"S00e3o Lu00eds do Quitunde",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3388368,
               "venue":"S00e3o Lu00eds",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3388376,
               "venue":"S00e3o Louren00e7o da Mata",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3388435,
               "venue":"S00e3o Jos00e9 do Egito",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3388441,
               "venue":"S00e3o Jos00e9 de Ribamar",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3388443,
               "venue":"S00e3o Jos00e9 de Mipibu",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3388615,
               "venue":"S00e3o Jo00e3o dos Patos",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3388714,
               "venue":"S00e3o Gon00e7alo do Amarante",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3388847,
               "venue":"S00e3o F00e9lix do Xingu",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3388868,
               "venue":"S00e3o Domingos do Maranh00e3o",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3388991,
               "venue":"S00e3o Bento",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3389006,
               "venue":"S00e3o Bento",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3389321,
               "venue":"Santa Rita",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3389353,
               "venue":"Santar00e9m",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3389358,
               "venue":"Santa Quit00e9ria do Maranh00e3o",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3389361,
               "venue":"Santa Quit00e9ria",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3389384,
               "venue":"Santana do Ipanema",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3389557,
               "venue":"Santa Luzia",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3389609,
               "venue":"Santa In00eas",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3389622,
               "venue":"Santa Helena",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3389652,
               "venue":"Santa Cruz do Capibaribe",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3389673,
               "venue":"Santa Cruz",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3389822,
               "venue":"Salin00f3polis",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3389860,
               "venue":"Salgueiro",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3390160,
               "venue":"Russas",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3390288,
               "venue":"Rio Largo",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3390295,
               "venue":"Rio Formoso",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3390326,
               "venue":"Ribeir00e3o",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3390760,
               "venue":"Recife",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3390901,
               "venue":"Quixeramobim",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3390907,
               "venue":"Quixad00e1",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3391220,
               "venue":"Presidente Dutra",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3391360,
               "venue":"Santana",
               "subcountry":"Amap00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3391397,
               "venue":"Porto Calvo",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3391412,
               "venue":"Portel",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3391556,
               "venue":"Pombos",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3391571,
               "venue":"Pombal",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3391908,
               "venue":"Piripiri",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3391991,
               "venue":"Piracuruca",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3392054,
               "venue":"Pinheiro",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3392088,
               "venue":"Pindar00e9 Mirim",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3392126,
               "venue":"Pilar",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3392167,
               "venue":"Picos",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3392242,
               "venue":"Petrolina",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3392243,
               "venue":"Jatob00e1",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3392251,
               "venue":"Pesqueira",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3392345,
               "venue":"Pentecoste",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3392368,
               "venue":"Penalva",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3392431,
               "venue":"Pedro II",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3392629,
               "venue":"Pedra Branca",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3392734,
               "venue":"Paulo Afonso",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3392740,
               "venue":"Paulista",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3392887,
               "venue":"Patos",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3392998,
               "venue":"Parnamirim",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3393001,
               "venue":"Parna00edba",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3393008,
               "venue":"Parintins",
               "subcountry":"Amazonas"
            },
            {
               "country":"Brazil",
               "geonameid":3393017,
               "venue":"Parelhas",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3393091,
               "venue":"Paraipaba",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393106,
               "venue":"Paragominas",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393115,
               "venue":"Paracuru",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393264,
               "venue":"Palmares",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3393400,
               "venue":"Pacatuba",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393409,
               "venue":"Pacajus",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393452,
               "venue":"Ouricuri",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3393465,
               "venue":"Or00f3s",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393471,
               "venue":"Oriximin00e1",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393536,
               "venue":"Olinda",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3393764,
               "venue":"Oeiras",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3393768,
               "venue":"00c1bidos",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393832,
               "venue":"Nova Russas",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3393876,
               "venue":"Nova Cruz",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3393972,
               "venue":"Nazar00e9 da Mata",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3394023,
               "venue":"Natal",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3394116,
               "venue":"Murici",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3394453,
               "venue":"Moreno",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3394500,
               "venue":"Morada Nova",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3394549,
               "venue":"Monteiro",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3394605,
               "venue":"Monte Alegre",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3394649,
               "venue":"Momba00e7a",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3394661,
               "venue":"Moju",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3394682,
               "venue":"Mossor00f3",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3394745,
               "venue":"Mocajuba",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3395062,
               "venue":"Mau00e9s",
               "subcountry":"Amazonas"
            },
            {
               "country":"Brazil",
               "geonameid":3395077,
               "venue":"Matriz de Camaragibe",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3395380,
               "venue":"Mari",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3395395,
               "venue":"Marechal Deodoro",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3395458,
               "venue":"Maragogi",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3395473,
               "venue":"Maracana00fa",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3395503,
               "venue":"Marab00e1",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3395717,
               "venue":"Mamanguape",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3395981,
               "venue":"Macei00f3",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3395998,
               "venue":"Macau",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3396016,
               "venue":"Macap00e1",
               "subcountry":"Amap00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3396048,
               "venue":"Maca00edba",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3396266,
               "venue":"Limoeiro do Norte",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3396277,
               "venue":"Limoeiro",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3396364,
               "venue":"Lavras da Mangabeira",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3396496,
               "venue":"Lajedo",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3396601,
               "venue":"Lago da Pedra",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3396769,
               "venue":"Lagoa do Itaenga",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3397147,
               "venue":"Juazeiro do Norte",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3397230,
               "venue":"Jos00e9 de Freitas",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3397277,
               "venue":"Jo00e3o Pessoa",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3397315,
               "venue":"Jo00e3o C00e2mara",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3397665,
               "venue":"Jaguaruana",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3397675,
               "venue":"Jaguaribe",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3397838,
               "venue":"Jaboat00e3o",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3397851,
               "venue":"Itupiranga",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3397893,
               "venue":"Itacoatiara",
               "subcountry":"Amazonas"
            },
            {
               "country":"Brazil",
               "geonameid":3397898,
               "venue":"Itaporanga",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3397904,
               "venue":"Itapissuma",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3397909,
               "venue":"Itapipoca",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3397936,
               "venue":"Itapecuru Mirim",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3397941,
               "venue":"Itapag00e9",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3397967,
               "venue":"Itaituba",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3397969,
               "venue":"Itaitinga",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398003,
               "venue":"Itabaiana",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3398076,
               "venue":"Ipueiras",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398105,
               "venue":"Ipubi",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3398112,
               "venue":"Ipu",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398115,
               "venue":"Ipojuca",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3398269,
               "venue":"Imperatriz",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3398331,
               "venue":"Iguatu",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398343,
               "venue":"Igarap00e9 Miri",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398350,
               "venue":"Igarap00e9 A00e7u",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398352,
               "venue":"Igarassu",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3398379,
               "venue":"Ic00f3",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398450,
               "venue":"Horizonte",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398569,
               "venue":"Guaraciaba do Norte",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398570,
               "venue":"Guarabira",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3398614,
               "venue":"Guai00faba",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398691,
               "venue":"Gravat00e1",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3398706,
               "venue":"Granja",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3398856,
               "venue":"Graja00fa",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3398904,
               "venue":"Goiana",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3398920,
               "venue":"Gl00f3ria do Goit00e1",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3399058,
               "venue":"Garanhuns",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3399132,
               "venue":"Gameleira",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3399415,
               "venue":"Fortaleza",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3399506,
               "venue":"Floriano",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3399518,
               "venue":"Floresta",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3400558,
               "venue":"Eus00e9bio",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3400567,
               "venue":"Extremoz",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3400617,
               "venue":"Estreito",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3400740,
               "venue":"Esperantina",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3400752,
               "venue":"Esperan00e7a",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3400804,
               "venue":"Escada",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3400969,
               "venue":"Dom Pedro",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3401106,
               "venue":"Demerval Lob00e3o",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3401109,
               "venue":"Delmiro Gouveia",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3401138,
               "venue":"Cust00f3dia",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3401148,
               "venue":"Cururupu",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3401283,
               "venue":"Currais Novos",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3401340,
               "venue":"Cupira",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3401545,
               "venue":"Crato",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3401548,
               "venue":"Crate00fas",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3401703,
               "venue":"Coroat00e1",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3401830,
               "venue":"Condado",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3401845,
               "venue":"Concei00e700e3o do Araguaia",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3401963,
               "venue":"Colinas",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3401992,
               "venue":"Coelho Neto",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3402000,
               "venue":"Cod00f3",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3402229,
               "venue":"Chapadinha",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3402271,
               "venue":"Ch00e3 Grande",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3402360,
               "venue":"Cear00e1 Mirim",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3402383,
               "venue":"Caxias",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3402429,
               "venue":"Caucaia",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3402465,
               "venue":"Catol00e9 do Rocha",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3402528,
               "venue":"Catende",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3402591,
               "venue":"Castanhal",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3402613,
               "venue":"Cascavel",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3402655,
               "venue":"Caruaru",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3402721,
               "venue":"Carpina",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3402724,
               "venue":"Carolina",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3403127,
               "venue":"Capit00e3o Po00e7o",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3403208,
               "venue":"Capanema",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3403353,
               "venue":"Canind00e9",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3403362,
               "venue":"Canguaretama",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3403534,
               "venue":"Campos Sales",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3403566,
               "venue":"Campo Maior",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3403611,
               "venue":"Campo Alegre",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3403642,
               "venue":"Campina Grande",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3403687,
               "venue":"Camocim",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3403697,
               "venue":"Camet00e1",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3403941,
               "venue":"Cajueiro",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3404020,
               "venue":"Cajazeiras",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3404117,
               "venue":"Caic00f3",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3404513,
               "venue":"Cabrob00f3",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3404545,
               "venue":"Cabo",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3404558,
               "venue":"Cabedelo",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3404722,
               "venue":"Buriti Bravo",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3404766,
               "venue":"Bu00edque",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3404817,
               "venue":"Breves",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3404833,
               "venue":"Brejo Santo",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3404862,
               "venue":"Brejo da Madre de Deus",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3405006,
               "venue":"Bragan00e7a",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3405380,
               "venue":"Bom Conselho",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3405616,
               "venue":"Boa Viagem",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3405738,
               "venue":"Bezerros",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3405792,
               "venue":"Benevides",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3405812,
               "venue":"Belo Jardim",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3405863,
               "venue":"Bel00e9m",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3405870,
               "venue":"Bel00e9m",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3405924,
               "venue":"Beberibe",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3405940,
               "venue":"Bayeux",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3405954,
               "venue":"Baturit00e9",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3406160,
               "venue":"Barreiros",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3406196,
               "venue":"Barreirinhas",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3406263,
               "venue":"Barras",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3406318,
               "venue":"Barra do Corda",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3406429,
               "venue":"Barcarena",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3406442,
               "venue":"Barbalha",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3406545,
               "venue":"Balsas",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3406910,
               "venue":"Bacabal",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3406961,
               "venue":"Augusto Corr00eaa",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3406996,
               "venue":"Atalaia",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3407194,
               "venue":"Areia Branca",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3407216,
               "venue":"Arcoverde",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3407243,
               "venue":"Araripina",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3407258,
               "venue":"Arari",
               "subcountry":"Maranh00e3o"
            },
            {
               "country":"Brazil",
               "geonameid":3407327,
               "venue":"Arapiraca",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3407357,
               "venue":"Aragua00edna",
               "subcountry":"Tocantins"
            },
            {
               "country":"Brazil",
               "geonameid":3407378,
               "venue":"Aracati",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3407407,
               "venue":"Aquiraz",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3407440,
               "venue":"Apodi",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3407669,
               "venue":"Ananindeua",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3407758,
               "venue":"Amaraji",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3407797,
               "venue":"Altos",
               "subcountry":"Piau00ed"
            },
            {
               "country":"Brazil",
               "geonameid":3407882,
               "venue":"Altamira",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3407903,
               "venue":"Almeirim",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3407980,
               "venue":"Alenquer",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3408100,
               "venue":"Alagoa Grande",
               "subcountry":"Para00edba"
            },
            {
               "country":"Brazil",
               "geonameid":3408166,
               "venue":"00c1guas Belas",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3408175,
               "venue":"00c1gua Preta",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3408274,
               "venue":"Afogados da Ingazeira",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3408337,
               "venue":"A00e7u",
               "subcountry":"Rio Grande do Norte"
            },
            {
               "country":"Brazil",
               "geonameid":3408343,
               "venue":"Acopiara",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3408368,
               "venue":"Acara00fa",
               "subcountry":"Cear00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3408404,
               "venue":"Abreu e Lima",
               "subcountry":"Pernambuco"
            },
            {
               "country":"Brazil",
               "geonameid":3408424,
               "venue":"Abaetetuba",
               "subcountry":"Par00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3444823,
               "venue":"Xique Xique",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3444848,
               "venue":"Xanxer00ea",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3444864,
               "venue":"Votuporanga",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3444866,
               "venue":"Votorantim",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3444876,
               "venue":"Volta Redonda",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3444914,
               "venue":"Vit00f3ria da Conquista",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3444924,
               "venue":"Vit00f3ria",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3444969,
               "venue":"Visconde do Rio Branco",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3444997,
               "venue":"Viradouro",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445014,
               "venue":"Vinhedo",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445026,
               "venue":"Vila Velha",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3445126,
               "venue":"Videira",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3445133,
               "venue":"Vi00e7osa",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445153,
               "venue":"Viana",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3445156,
               "venue":"Viam00e3o",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3445162,
               "venue":"Vespasiano",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445299,
               "venue":"Veran00f3polis",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3445307,
               "venue":"Vera Cruz",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3445348,
               "venue":"Wenceslau Braz",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3445350,
               "venue":"Ven00e2ncio Aires",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3445418,
               "venue":"Vazante",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445433,
               "venue":"Vassouras",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3445446,
               "venue":"V00e1rzea Paulista",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445451,
               "venue":"V00e1rzea Grande",
               "subcountry":"Mato Grosso"
            },
            {
               "country":"Brazil",
               "geonameid":3445459,
               "venue":"V00e1rzea da Palma",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445487,
               "venue":"Varginha",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445500,
               "venue":"Vargem Grande do Sul",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445575,
               "venue":"Valpara00edso",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445578,
               "venue":"Valinhos",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445596,
               "venue":"Valen00e7a",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3445597,
               "venue":"Valen00e7a",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3445630,
               "venue":"Vacaria",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3445679,
               "venue":"Uruguaiana",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3445690,
               "venue":"Uru00e7uca",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3445713,
               "venue":"Urua00e7u",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3445746,
               "venue":"Uni00e3o da Vit00f3ria",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3445764,
               "venue":"Una00ed",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445781,
               "venue":"Una",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3445782,
               "venue":"Umuarama",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3445831,
               "venue":"Uberl00e2ndia",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445839,
               "venue":"Uberaba",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445847,
               "venue":"Ubatuba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445849,
               "venue":"Ubat00e3",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3445853,
               "venue":"Ubaitaba",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3445859,
               "venue":"Ub00e1",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445939,
               "venue":"Tupanciret00e3",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3445941,
               "venue":"Tupaciguara",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3445942,
               "venue":"Tup00e3",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3445983,
               "venue":"Tucano",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3445993,
               "venue":"Tubar00e3o",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3446038,
               "venue":"Trindade",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3446065,
               "venue":"Tr00eas Rios",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3446077,
               "venue":"Tr00eas Pontas",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3446087,
               "venue":"Tr00eas Passos",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446098,
               "venue":"Tr00eas Lagoas",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446130,
               "venue":"Tr00eas de Maio",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446137,
               "venue":"Tr00eas Coroas",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446138,
               "venue":"Tr00eas Cora00e700f5es",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3446194,
               "venue":"Trememb00e9",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3446232,
               "venue":"Tramanda00ed",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446295,
               "venue":"Torres",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446370,
               "venue":"Toledo",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3446400,
               "venue":"Tobias Barreto",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3446445,
               "venue":"Tim00f3teo",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3446465,
               "venue":"Timb00f3",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3446500,
               "venue":"Tijucas",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3446539,
               "venue":"Tiet00ea",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3446556,
               "venue":"Teut00f4nia",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446606,
               "venue":"Teres00f3polis",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3446621,
               "venue":"Te00f3filo Otoni",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3446625,
               "venue":"Teodoro Sampaio",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3446652,
               "venue":"Tel00eamaco Borba",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3446682,
               "venue":"Taubat00e9",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3446692,
               "venue":"Tatu00ed",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3446752,
               "venue":"Taquarituba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3446753,
               "venue":"Taquaritinga",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3446783,
               "venue":"Taquari",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446847,
               "venue":"Taquara",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446866,
               "venue":"Tapiramut00e1",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3446880,
               "venue":"Tapes",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3446974,
               "venue":"Tangu00e1",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3446979,
               "venue":"Tanabi",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447005,
               "venue":"Tamba00fa",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447059,
               "venue":"Taiobeiras",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3447186,
               "venue":"Tabo00e3o da Serra",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447212,
               "venue":"Suzano",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447259,
               "venue":"Sumar00e9",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447399,
               "venue":"Sorocaba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447423,
               "venue":"Soledade",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3447437,
               "venue":"Socorro",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447473,
               "venue":"Sobradinho",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3447562,
               "venue":"Sim00e3o Dias",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3447591,
               "venue":"Silva Jardim",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3447597,
               "venue":"Sidrol00e2ndia",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3447624,
               "venue":"Sete Lagoas",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3447651,
               "venue":"Sert00e3ozinho",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447690,
               "venue":"Serrinha",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3447718,
               "venue":"Serra Negra",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447720,
               "venue":"Serrana",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3447779,
               "venue":"Serra",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3447785,
               "venue":"Serop00e9dica",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3447839,
               "venue":"Senhor do Bonfim",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3447854,
               "venue":"Senador Canedo",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3447928,
               "venue":"Seabra",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3447929,
               "venue":"Schroeder",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3447961,
               "venue":"Saubara",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3447969,
               "venue":"Sarzedo",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3447997,
               "venue":"Sarandi",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3447998,
               "venue":"Sarandi",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3448011,
               "venue":"Saquarema",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3448031,
               "venue":"Sapucaia",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448063,
               "venue":"Sapiranga",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448136,
               "venue":"S00e3o Vicente",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448207,
               "venue":"S00e3o Sep00e9",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448219,
               "venue":"S00e3o Sebasti00e3o do Pass00e9",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3448221,
               "venue":"S00e3o Sebasti00e3o do Para00edso",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3448227,
               "venue":"S00e3o Sebasti00e3o do Ca00ed",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448257,
               "venue":"S00e3o Sebasti00e3o",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448300,
               "venue":"S00e3o Roque",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448351,
               "venue":"S00e3o Pedro da Aldeia",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3448403,
               "venue":"S00e3o Pedro",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448439,
               "venue":"S00e3o Paulo",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448453,
               "venue":"S00e3o Miguel do Igua00e7u",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3448455,
               "venue":"S00e3o Miguel do Araguaia",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3448502,
               "venue":"S00e3o Mateus do Sul",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3448519,
               "venue":"S00e3o Mateus",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3448533,
               "venue":"S00e3o Marcos",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448545,
               "venue":"S00e3o Manuel",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448552,
               "venue":"S00e3o Luiz Gonzaga",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448558,
               "venue":"S00e3o Lu00eds de Montes Belos",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3448596,
               "venue":"S00e3o Louren00e7o do Sul",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448616,
               "venue":"S00e3o Louren00e7o",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3448622,
               "venue":"S00e3o Leopoldo",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3448632,
               "venue":"S00e3o Jos00e9 dos Pinhais",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3448636,
               "venue":"S00e3o Jos00e9 dos Campos",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448639,
               "venue":"S00e3o Jos00e9 do Rio Preto",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448640,
               "venue":"S00e3o Jos00e9 do Rio Pardo",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448742,
               "venue":"S00e3o Jos00e9",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3448825,
               "venue":"S00e3o Joaquim da Barra",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448828,
               "venue":"S00e3o Joaquim",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3448846,
               "venue":"S00e3o Jo00e3o Nepomuceno",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3448877,
               "venue":"S00e3o Jo00e3o de Meriti",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3448879,
               "venue":"S00e3o Jo00e3o del Rei",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3448902,
               "venue":"S00e3o Jo00e3o da Boa Vista",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3448903,
               "venue":"S00e3o Jo00e3o da Barra",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3449045,
               "venue":"S00e3o Jer00f4nimo",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449053,
               "venue":"S00e3o Gotardo",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449056,
               "venue":"S00e3o Gon00e7alo do Sapuca00ed",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449099,
               "venue":"S00e3o Gabriel",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449112,
               "venue":"S00e3o Francisco do Sul",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3449116,
               "venue":"S00e3o Francisco do Conde",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3449176,
               "venue":"S00e3o Francisco",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449195,
               "venue":"S00e3o Fid00e9lis",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3449310,
               "venue":"S00e3o Crist00f3v00e3o",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3449319,
               "venue":"S00e3o Carlos",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449324,
               "venue":"S00e3o Caetano do Sul",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449340,
               "venue":"S00e3o Borja",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449344,
               "venue":"S00e3o Bernardo do Campo",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449350,
               "venue":"S00e3o Bento do Sul",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3449427,
               "venue":"Santos Dumont",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449433,
               "venue":"Santos",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449467,
               "venue":"Santo Est00eav00e3o",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3449500,
               "venue":"Santo Ant00f4nio do Monte",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449516,
               "venue":"Santo Ant00f4nio do Amparo",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449518,
               "venue":"Santo Ant00f4nio de Posse",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449519,
               "venue":"Santo Ant00f4nio de P00e1dua",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3449521,
               "venue":"Santo Ant00f4nio de Jesus",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3449529,
               "venue":"Santo Ant00f4nio da Platina",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3449696,
               "venue":"Santo 00c2ngelo",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449701,
               "venue":"Santo Andr00e9",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449707,
               "venue":"Santo Anast00e1cio",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449711,
               "venue":"Santo Amaro da Imperatriz",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3449720,
               "venue":"Santo Amaro",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3449741,
               "venue":"Santiago",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449747,
               "venue":"Santa Vit00f3ria do Palmar",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449793,
               "venue":"Santa Rosa de Viterbo",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449822,
               "venue":"Santa Rosa",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449847,
               "venue":"Santa Rita do Sapuca00ed",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449851,
               "venue":"Santa Rita do Passa Quatro",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3449933,
               "venue":"Santana do Para00edso",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3449936,
               "venue":"Santana do Livramento",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3449948,
               "venue":"Santana de Parna00edba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450063,
               "venue":"Santa Maria da Vit00f3ria",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3450083,
               "venue":"Santa Maria",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3450144,
               "venue":"Santa Luzia",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3450157,
               "venue":"Santaluz",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3450188,
               "venue":"Santa Isabel",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450206,
               "venue":"Santa Helena de Goi00e1s",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3450225,
               "venue":"Santa Gertrudes",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450232,
               "venue":"Santa F00e9 do Sul",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450269,
               "venue":"Santa Cruz do Sul",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3450272,
               "venue":"Santa Cruz do Rio Pardo",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450283,
               "venue":"Santa Cruz das Palmeiras",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450288,
               "venue":"Santa Cruz Cabr00e1lia",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3450376,
               "venue":"Santa Cec00edlia",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3450404,
               "venue":"Santa B00e1rbara d'Oeste",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450554,
               "venue":"Salvador",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3450563,
               "venue":"Salto de Pirapora",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450594,
               "venue":"Salto",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3450671,
               "venue":"Salinas",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3450759,
               "venue":"Sacramento",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3450832,
               "venue":"Ruy Barbosa",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3450843,
               "venue":"Rubiataba",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3450873,
               "venue":"Ros00e1rio do Sul",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3450909,
               "venue":"Rondon00f3polis",
               "subcountry":"Mato Grosso"
            },
            {
               "country":"Brazil",
               "geonameid":3450963,
               "venue":"Rolante",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3450964,
               "venue":"Rol00e2ndia",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3451051,
               "venue":"Rio Verde de Mato Grosso",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3451071,
               "venue":"Rio Real",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3451102,
               "venue":"Rio Pardo",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3451121,
               "venue":"Rio Negro",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3451124,
               "venue":"Rio Negrinho",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3451134,
               "venue":"Rio Grande da Serra",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451138,
               "venue":"Rio Grande",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3451152,
               "venue":"Rio do Sul",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3451190,
               "venue":"Rio de Janeiro",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3451202,
               "venue":"Rio das Pedras",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451205,
               "venue":"Rio das Ostras",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3451234,
               "venue":"Rio Claro",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451241,
               "venue":"Rio Brilhante",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3451242,
               "venue":"Rio Branco do Sul",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3451261,
               "venue":"Rio Bonito",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3451328,
               "venue":"Ribeir00e3o Preto",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451329,
               "venue":"Ribeir00e3o Pires",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451353,
               "venue":"Ribeir00e3o das Neves",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3451357,
               "venue":"Ribeir00e3o da Ilha",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3451383,
               "venue":"Ribeira do Pombal",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3451474,
               "venue":"Riach00e3o do Jacu00edpe",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3451650,
               "venue":"Resplendor",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3451668,
               "venue":"Resende",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3451704,
               "venue":"Registro",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451709,
               "venue":"Regente Feij00f3",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451856,
               "venue":"Rancharia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3451931,
               "venue":"Quirin00f3polis",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3452073,
               "venue":"Queimados",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3452141,
               "venue":"Quatro Barras",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3452179,
               "venue":"Quara00ed",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3452216,
               "venue":"Prudent00f3polis",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3452233,
               "venue":"Propri00e1",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3452237,
               "venue":"Promiss00e3o",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3452320,
               "venue":"Presidente Venceslau",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3452324,
               "venue":"Presidente Prudente",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3452331,
               "venue":"Presidente Epit00e1cio",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3452440,
               "venue":"Prata",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3452465,
               "venue":"Praia Grande",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3452483,
               "venue":"Prado",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3452525,
               "venue":"Pouso Alegre",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3452599,
               "venue":"Posse",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3452623,
               "venue":"Porto Uni00e3o",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3452640,
               "venue":"Porto Seguro",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3452775,
               "venue":"Porto Ferreira",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3452779,
               "venue":"Porto Feliz",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3452925,
               "venue":"Porto Alegre",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3452982,
               "venue":"Port00e3o",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3453014,
               "venue":"Porangatu",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3453060,
               "venue":"Pontes e Lacerda",
               "subcountry":"Mato Grosso"
            },
            {
               "country":"Brazil",
               "geonameid":3453078,
               "venue":"Ponte Nova",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3453150,
               "venue":"Ponta Por00e3",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3453171,
               "venue":"Pontal",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453186,
               "venue":"Ponta Grossa",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3453240,
               "venue":"Pomp00e9u",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3453242,
               "venue":"Pomp00e9ia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453245,
               "venue":"Pomerode",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3453303,
               "venue":"Po00e7os de Caldas",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3453315,
               "venue":"Pocon00e9",
               "subcountry":"Mato Grosso"
            },
            {
               "country":"Brazil",
               "geonameid":3453337,
               "venue":"Po00e700f5es",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3453406,
               "venue":"Po00e1",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453420,
               "venue":"Planaltina",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3453435,
               "venue":"Pi00fama",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3453439,
               "venue":"Piu00ed",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3453457,
               "venue":"Pitangui",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3453467,
               "venue":"Pitangueiras",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453478,
               "venue":"Pitanga",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3453494,
               "venue":"Piritiba",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3453503,
               "venue":"Pires do Rio",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3453535,
               "venue":"Piraquara",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3453542,
               "venue":"Pirapozinho",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453546,
               "venue":"Pirapora",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3453605,
               "venue":"Piraju00ed",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453610,
               "venue":"Piraju",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453622,
               "venue":"Pira00ed do Sul",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3453635,
               "venue":"Pira00ed",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3453639,
               "venue":"Pirassununga",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453643,
               "venue":"Piracicaba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453659,
               "venue":"Piracanjuba",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3453661,
               "venue":"Piracaia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453767,
               "venue":"Pinheiral",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3453777,
               "venue":"Pinh00e3o",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3453807,
               "venue":"Esp00edrito Santo do Pinhal",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453827,
               "venue":"Pindoba00e7u",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3453837,
               "venue":"Pindamonhangaba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453896,
               "venue":"Pilar do Sul",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3453926,
               "venue":"Piedade",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3454031,
               "venue":"Petr00f3polis",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3454061,
               "venue":"Peru00edbe",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3454131,
               "venue":"Pereira Barreto",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3454139,
               "venue":"Perd00f5es",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3454213,
               "venue":"Penha",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3454231,
               "venue":"Penedo",
               "subcountry":"Alagoas"
            },
            {
               "country":"Brazil",
               "geonameid":3454235,
               "venue":"Pen00e1polis",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3454244,
               "venue":"Pelotas",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3454358,
               "venue":"Pedro Leopoldo",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3454407,
               "venue":"Pedreira",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3454578,
               "venue":"Pedra Azul",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3454620,
               "venue":"Pederneiras",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3454690,
               "venue":"Paul00ednia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3454763,
               "venue":"Patroc00ednio",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3454783,
               "venue":"Patos de Minas",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3454818,
               "venue":"Pato Branco",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3454827,
               "venue":"Paty do Alferes",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3454847,
               "venue":"Passos",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3454857,
               "venue":"Passo Fundo",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3454954,
               "venue":"Parob00e9",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3455036,
               "venue":"Paraty",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3455051,
               "venue":"Paranava00ed",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3455061,
               "venue":"Paranapanema",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3455065,
               "venue":"Parana00edba",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3455070,
               "venue":"Paranagu00e1",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3455141,
               "venue":"Para00edba do Sul",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3455152,
               "venue":"Paragua00e7u Paulista",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3455155,
               "venue":"Paragua00e7u",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3455161,
               "venue":"Par00e1 de Minas",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3455168,
               "venue":"Paracatu",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3455170,
               "venue":"Paracambi",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3455281,
               "venue":"Panambi",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3455298,
               "venue":"Palotina",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3455342,
               "venue":"Palmital",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3455416,
               "venue":"Palmeira das Miss00f5es",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3455425,
               "venue":"Palmeira",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3455459,
               "venue":"Palmas",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3455478,
               "venue":"Palho00e7a",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3455553,
               "venue":"Pai00e7andu",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3455580,
               "venue":"Padre Bernardo",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3455671,
               "venue":"Ouro Preto",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3455689,
               "venue":"Ouro Branco",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3455729,
               "venue":"Ourinhos",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3455756,
               "venue":"Osvaldo Cruz",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3455769,
               "venue":"Os00f3rio",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3455775,
               "venue":"Osasco",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3455784,
               "venue":"Orleans",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3455785,
               "venue":"Orl00e2ndia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3455908,
               "venue":"Oliveira",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3455923,
               "venue":"Ol00edmpia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456060,
               "venue":"Novo Horizonte",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456068,
               "venue":"Novo Hamburgo",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3456102,
               "venue":"Nova Vi00e7osa",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3456110,
               "venue":"Nova Ven00e9cia",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3456125,
               "venue":"Nova Prata",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3456127,
               "venue":"Nova Petr00f3polis",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3456137,
               "venue":"Nova Ol00edmpia",
               "subcountry":"Mato Grosso"
            },
            {
               "country":"Brazil",
               "geonameid":3456138,
               "venue":"Nova Odessa",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456147,
               "venue":"Nova Lima",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456160,
               "venue":"Nova Igua00e7u",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3456164,
               "venue":"Nova Granada",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456166,
               "venue":"Nova Friburgo",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3456176,
               "venue":"Nova Era",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456223,
               "venue":"Nossa Senhora do Socorro",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3456240,
               "venue":"Nossa Senhora da Gl00f3ria",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3456283,
               "venue":"Niter00f3i",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3456285,
               "venue":"Niquel00e2ndia",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3456290,
               "venue":"Nil00f3polis",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3456322,
               "venue":"Ner00f3polis",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3456324,
               "venue":"Nepomuceno",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456366,
               "venue":"Nazar00e9",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3456368,
               "venue":"Navira00ed",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3456370,
               "venue":"Navegantes",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3456398,
               "venue":"Nanuque",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456412,
               "venue":"Muzambinho",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456483,
               "venue":"Muritiba",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3456500,
               "venue":"Muria00e9",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456593,
               "venue":"Mucuri",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3456696,
               "venue":"Morro do Chap00e9u",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3456724,
               "venue":"Morro Agudo",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456735,
               "venue":"Morrinhos",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3456814,
               "venue":"Montes Claros",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456816,
               "venue":"Monte Santo de Minas",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456826,
               "venue":"Montenegro",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3456827,
               "venue":"Monte Mor",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456848,
               "venue":"Monte Carmelo",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3456863,
               "venue":"Monte Azul Paulista",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456866,
               "venue":"Monte Apraz00edvel",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456873,
               "venue":"Monte Alto",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456944,
               "venue":"Mongagu00e1",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3456998,
               "venue":"Mogi Mirim",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457000,
               "venue":"Mogi-Gaucu",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457001,
               "venue":"Mogi das Cruzes",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457025,
               "venue":"Mococa",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457107,
               "venue":"Mirandop00f3lis",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457133,
               "venue":"Miracema",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3457147,
               "venue":"Mineiros",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3457191,
               "venue":"Miguel Pereira",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3457192,
               "venue":"Miguel00f3polis",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457247,
               "venue":"Mendes",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3457359,
               "venue":"Medianeira",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3457360,
               "venue":"Medeiros Neto",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3457381,
               "venue":"Mau00e1",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457393,
               "venue":"Matozinhos",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3457484,
               "venue":"Mateus Leme",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3457509,
               "venue":"Mat00e3o",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457528,
               "venue":"Mata de S00e3o Jo00e3o",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3457566,
               "venue":"Mascote",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3457595,
               "venue":"Martin00f3polis",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457671,
               "venue":"Maring00e1",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3457692,
               "venue":"Mar00edlia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3457708,
               "venue":"Maric00e1",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3457736,
               "venue":"Mariana",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3457741,
               "venue":"Marialva",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3457772,
               "venue":"Marechal C00e2ndido Rondon",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3457817,
               "venue":"Marau",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3457819,
               "venue":"Marataizes",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3457850,
               "venue":"Maragogipe",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3457854,
               "venue":"Marac00e1s",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3457859,
               "venue":"Maracaju",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3457950,
               "venue":"Manhumirim",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3457952,
               "venue":"Manhua00e7u",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3457991,
               "venue":"Mangaratiba",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3458049,
               "venue":"Mandaguari",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3458131,
               "venue":"Mairipor00e3",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458132,
               "venue":"Mairinque",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458147,
               "venue":"Mafra",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3458211,
               "venue":"Machado",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3458245,
               "venue":"Macatuba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458266,
               "venue":"Maca00e9",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3458329,
               "venue":"Luzi00e2nia",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3458397,
               "venue":"Lucas",
               "subcountry":"Mato Grosso"
            },
            {
               "country":"Brazil",
               "geonameid":3458406,
               "venue":"Louveira",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458425,
               "venue":"Lorena",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458449,
               "venue":"Londrina",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3458479,
               "venue":"Loanda",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3458481,
               "venue":"Livramento do Brumado",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3458494,
               "venue":"Lins",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458498,
               "venue":"Linhares",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3458575,
               "venue":"Limeira",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458632,
               "venue":"Leopoldina",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3458645,
               "venue":"Len00e700f3is Paulista",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458662,
               "venue":"Leme",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458696,
               "venue":"Lavras",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3458746,
               "venue":"Laranjeiras do Sul",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3458778,
               "venue":"Laranjeiras",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3458786,
               "venue":"Laranjal Paulista",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3458826,
               "venue":"Lapa",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3458902,
               "venue":"Lajinha",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3458930,
               "venue":"Lages",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3459035,
               "venue":"Lajeado",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3459094,
               "venue":"Laguna",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3459126,
               "venue":"Lagoa Vermelha",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3459138,
               "venue":"Lagoa Santa",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3459251,
               "venue":"Lagoa da Prata",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3459342,
               "venue":"Lagarto",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3459352,
               "venue":"Lad00e1rio",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3459462,
               "venue":"Jundia00ed",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3459495,
               "venue":"J00falio de Castilhos",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3459505,
               "venue":"Juiz de Fora",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3459550,
               "venue":"Juatuba",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3459667,
               "venue":"Jos00e9 Bonif00e1cio",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3459712,
               "venue":"Joinville",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3459785,
               "venue":"Jo00e3o Pinheiro",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3459796,
               "venue":"Jo00e3o Monlevade",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3459869,
               "venue":"Joa00e7aba",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3459922,
               "venue":"Jeremoabo",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3459925,
               "venue":"Jequitinhonha",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3459943,
               "venue":"Jequi00e9",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460005,
               "venue":"Ja00fa",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460064,
               "venue":"Jata00ed",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3460068,
               "venue":"Jarinu",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460071,
               "venue":"Jardin00f3polis",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460087,
               "venue":"Jardim",
               "subcountry":"Mato Grosso do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3460102,
               "venue":"Jaragu00e1 do Sul",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3460107,
               "venue":"Jaragu00e1",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3460132,
               "venue":"Japeri",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3460148,
               "venue":"Janu00e1ria",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460170,
               "venue":"Jandira",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460172,
               "venue":"Jandaia do Sul",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3460174,
               "venue":"Jana00faba",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460186,
               "venue":"Jales",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460200,
               "venue":"Jaguari00fana",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460214,
               "venue":"Jaguaria00edva",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3460225,
               "venue":"Jaguarari",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460232,
               "venue":"Jaguar00e3o",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3460242,
               "venue":"Jaguaquara",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460267,
               "venue":"Jacutinga",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460344,
               "venue":"Jacobina",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460355,
               "venue":"Jaciara",
               "subcountry":"Mato Grosso"
            },
            {
               "country":"Brazil",
               "geonameid":3460362,
               "venue":"Jacarezinho",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3460370,
               "venue":"Jacare00ed",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460441,
               "venue":"Jaboticabal",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460484,
               "venue":"Ivoti",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3460511,
               "venue":"Ituverava",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460513,
               "venue":"Iturama",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460516,
               "venue":"Itupeva",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460522,
               "venue":"Itumbiara",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3460523,
               "venue":"Ituiutaba",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460530,
               "venue":"Ituber00e1",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460535,
               "venue":"Itu",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460542,
               "venue":"Itoror00f3",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460584,
               "venue":"Ita00fana",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460594,
               "venue":"Itatinga",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460598,
               "venue":"Itatiba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460620,
               "venue":"Itarar00e9",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460629,
               "venue":"Itaqui",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3460644,
               "venue":"Itaquaquecetuba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460648,
               "venue":"Itapuranga",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3460671,
               "venue":"It00e1polis",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460699,
               "venue":"Itapira",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460718,
               "venue":"Itapevi",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460723,
               "venue":"Itapeva",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460728,
               "venue":"Itapetininga",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460730,
               "venue":"Itapetinga",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460733,
               "venue":"Itaperuna",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3460734,
               "venue":"Itaperu00e7u",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3460738,
               "venue":"Itapemirim",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3460740,
               "venue":"Itapema",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3460748,
               "venue":"Itapecerica da Serra",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460752,
               "venue":"Itapecerica",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460764,
               "venue":"Itaparica",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460773,
               "venue":"Itapaci",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3460774,
               "venue":"Itaocara",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3460791,
               "venue":"Itanha00e9m",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460813,
               "venue":"Itamb00e9",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460825,
               "venue":"Itamarandiba",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460826,
               "venue":"Itamaraju",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460831,
               "venue":"Itaju00edpe",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460834,
               "venue":"Itajub00e1",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460845,
               "venue":"Itaja00ed",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3460887,
               "venue":"Ita00ed",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3460899,
               "venue":"Itagua00ed",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3460949,
               "venue":"Itabuna",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460950,
               "venue":"Itabora00ed",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3460954,
               "venue":"Itabirito",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460960,
               "venue":"Itabira",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3460963,
               "venue":"Itabera00ed",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3460966,
               "venue":"Itaberaba",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3460971,
               "venue":"Itabaianinha",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3460974,
               "venue":"Itabaiana",
               "subcountry":"Sergipe"
            },
            {
               "country":"Brazil",
               "geonameid":3461013,
               "venue":"Irec00ea",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461017,
               "venue":"Irati",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3461055,
               "venue":"Iracem00e1polis",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461090,
               "venue":"Ipor00e1",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3461124,
               "venue":"Ipir00e1",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461129,
               "venue":"Ipia00fa",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461134,
               "venue":"Iper00f3",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461144,
               "venue":"Ipatinga",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461151,
               "venue":"Ipameri",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3461153,
               "venue":"Ipaba",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461194,
               "venue":"Inhumas",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3461311,
               "venue":"Indaiatuba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461316,
               "venue":"Indaial",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3461368,
               "venue":"Imbituva",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3461370,
               "venue":"Imbituba",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3461408,
               "venue":"Ilh00e9us",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461411,
               "venue":"Ilha Solteira",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461425,
               "venue":"Ilhabela",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461444,
               "venue":"Iju00ed",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3461465,
               "venue":"Iguape",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461481,
               "venue":"Igrejinha",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3461498,
               "venue":"Igarap00e9",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461499,
               "venue":"Igarapava",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461501,
               "venue":"Igara00e7u do Tiet00ea",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461519,
               "venue":"I00e7ara",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3461525,
               "venue":"Ibotirama",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461528,
               "venue":"Ibi00fana",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461550,
               "venue":"Ibitinga",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461563,
               "venue":"Ibirit00e9",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461565,
               "venue":"Ibirataia",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461576,
               "venue":"Ibirama",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3461588,
               "venue":"Ibipor00e3",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3461606,
               "venue":"Ibicara00ed",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461620,
               "venue":"Ibi00e1",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461625,
               "venue":"Ibat00e9",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461628,
               "venue":"Ibaiti",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3461638,
               "venue":"Ia00e7u",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461655,
               "venue":"Hortol00e2ndia",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461680,
               "venue":"Herval",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3461724,
               "venue":"Gurupi",
               "subcountry":"Tocantins"
            },
            {
               "country":"Brazil",
               "geonameid":3461763,
               "venue":"Guaxup00e9",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461786,
               "venue":"Guarulhos",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461789,
               "venue":"Guaruj00e1",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461824,
               "venue":"Guariba",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461857,
               "venue":"Guaratuba",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3461859,
               "venue":"Guaratinguet00e1",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461871,
               "venue":"Guararema",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461874,
               "venue":"Guararapes",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461879,
               "venue":"Guarapuava",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3461888,
               "venue":"Guarapari",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3461910,
               "venue":"Guaran00e9sia",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461914,
               "venue":"Guaramirim",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3461935,
               "venue":"Guar00e1",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3461941,
               "venue":"Guapor00e9",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3461949,
               "venue":"Guapimirim",
               "subcountry":"Rio de Janeiro"
            },
            {
               "country":"Brazil",
               "geonameid":3461958,
               "venue":"Guanh00e3es",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3461973,
               "venue":"Guanambi",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3461995,
               "venue":"Gua00edra",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3462022,
               "venue":"Gua00e7u00ed",
               "subcountry":"Esp00edrito Santo"
            },
            {
               "country":"Brazil",
               "geonameid":3462089,
               "venue":"Gravata00ed",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3462315,
               "venue":"Governador Valadares",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3462371,
               "venue":"Goiatuba",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3462374,
               "venue":"Goi00e1s",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3462376,
               "venue":"Goianira",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3462377,
               "venue":"Goi00e2nia",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3462378,
               "venue":"Goian00e9sia",
               "subcountry":"Goi00e1s"
            },
            {
               "country":"Brazil",
               "geonameid":3462535,
               "venue":"Gaspar",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3462557,
               "venue":"Garibaldi",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3462580,
               "venue":"Gar00e7a",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3462601,
               "venue":"Gandu",
               "subcountry":"Bahia"
            },
            {
               "country":"Brazil",
               "geonameid":3462916,
               "venue":"Frutal",
               "subcountry":"Minas Gerais"
            },
            {
               "country":"Brazil",
               "geonameid":3462956,
               "venue":"Frederico Westphalen",
               "subcountry":"Rio Grande do Sul"
            },
            {
               "country":"Brazil",
               "geonameid":3462964,
               "venue":"Franco da Rocha",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3462980,
               "venue":"Francisco Morato",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3462996,
               "venue":"Francisco Beltr00e3o",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3463011,
               "venue":"Franca",
               "subcountry":"S00e3o Paulo"
            },
            {
               "country":"Brazil",
               "geonameid":3463030,
               "venue":"Foz do Igua00e7u",
               "subcountry":"Paran00e1"
            },
            {
               "country":"Brazil",
               "geonameid":3463066,
               "venue":"Forquilhinha",
               "subcountry":"Santa Catarina"
            },
            {
               "country":"Brazil",
               "geonameid":3463140,
               "venue":"Formosa",
               "subcountry":"Goi00e1s"
            }
         ]


        // this.venues = [
        // {
        //     'id': 0,
        //     'venue': '0ArtScience Museum'
        // },    
        // {
        //     'id': 1,
        //     'venue': 'ArtScience Museum'
        // },
        // {
        //     'id': 2,
        //     'venue': 'Changi Exhibition Centre'
        // },
        // {
        //     'id': 3,
        //     'venue': 'Gardens by the Bay'
        // },
        // {
        //     'id': 4,
        //     'venue': 'Marina Bay Cruise Centre Singapore'
        // },
        // {
        //     'id': 5,
        //     'venue': 'Raffles City Convention Centre'
        // },
        // {
        //     'id': 6,
        //     'venue': 'Resorts World™ Sentosa Convention Centre'
        // },
        // {
        //     'id': 7,
        //     'venue': 'Royal Albatross'
        // },
        // {
        //     'id': 8,
        //     'venue': 'Sands Expo® and Convention Centre'
        // },
        // {
        //     'id': 9,
        //     'venue': 'S.E.A. Aquarium™'
        // },
        // {
        //     'id': 10,
        //     'venue': 'Singapore EXPO Convention & Exhibition Centre and MAX Atria'
        // },
        // {
        //     'id': 11,
        //     'venue': 'Suntec Singapore Convention & Exhibition Centre'
        // },
        // {
        //     'id': 12,
        //     'venue': 'Resorts World™ Sentosa Convention Centre'
        // }];

        this.state = { search: '' };
    }
}