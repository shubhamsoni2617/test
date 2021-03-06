import React from 'react';
import * as moment from 'moment';
import './style.scss';
import closeBlueImg from '../../../assets/images/close-blue.svg';
import Utilities from '../../utilities';
import { useGlobalState } from '../../../scenes/App/store';

function FilterSelected(props) {
  const [state] = useGlobalState('global');
  const { genreData } = state;
  const {
    venueData,
    attractionCategories,
    filterConfig,
    filteredPriceRange,
    filteredGnere,
    filteredPromotions,
    filteredVenues,
    filteredTags,
    filteredDateRange,
    filteredCategory,
    handleFilters
  } = props;

  if (!Utilities.mobilecheck()) {
    return null;
  }

  const Button = ({ text, obj }) => {
    return (
      <>
        {text}
        <button
          onClick={() => {
            setTimeout(() => {
              handleFilters(obj, true);
              // props.type == "EVENTS" ? props.history.push(`/events/search`) : props.history.push(`/attraction`) ;
            }, 100);
          }}
          className="filtered-tags-close-btn"
        >
          <img src={closeBlueImg} alt="close-btn" />
        </button>
      </>
    );
  };
  const ListItem = ({ selectedFilters, title, data, category }) => {
    let newFilterObject = {};
    newFilterObject[category] = [];
    newFilterObject[`local${category}`] = [];
    if (selectedFilters.length === 1 && data) {
      const selected = data.find(item => item.id === selectedFilters[0]);
      return selected ? (
        <li>
          <Button text={selected.name} obj={newFilterObject} />
        </li>
      ) : null;
    }

    return (
      <li>
        <Button
          text={`${selectedFilters.length} ${title}`}
          obj={newFilterObject}
        />
      </li>
    );
  };

  if (
    !(filteredPriceRange && filteredPriceRange.min) &&
    !(filteredGnere && filteredGnere.length) &&
    !(filteredTags && filteredTags.length) &&
    !(filteredDateRange && filteredDateRange.to) &&
    !(filteredPromotions && filteredPromotions.length) &&
    !(filteredVenues && filteredVenues.length) &&
    !(filteredCategory && filteredCategory.length)
  )
    return null;

  return (
    <div className="filtered-tags">
      <ul>
        {filteredPriceRange && filteredPriceRange.min && (
          <li>
            <Button
              text={`S$${filteredPriceRange.min} - S$${filteredPriceRange.max}`}
              obj={{
                filteredPriceRange: { min: '', max: '' },
                localfilteredPriceRange: { min: '', max: '' }
              }}
            />
          </li>
        )}
        {filteredGnere && filteredGnere.length > 0 && (
          <ListItem
            selectedFilters={filteredGnere}
            title="Genre"
            data={genreData}
            category={'filteredGnere'}
          />
        )}
        {filteredTags && filteredTags.length > 0 && (
          <ListItem
            selectedFilters={filteredTags}
            title="Tags"
            data={filterConfig && filterConfig.tags}
            category={'filteredTags'}
          />
        )}
        {filteredDateRange && filteredDateRange.to && (
          <li>
            <Button
              text={`${moment(filteredDateRange.from).format(
                'D-MMM-YYYY'
              )} - ${moment(filteredDateRange.to).format('D-MMM-YYYY')}`}
              obj={{
                filteredDateRange: {
                  from: '',
                  to: ''
                },
                localfilteredDateRange: {
                  from: '',
                  to: ''
                }
              }}
            />
          </li>
        )}
        {filteredPromotions && filteredPromotions.length > 0 && (
          <ListItem
            selectedFilters={filteredPromotions}
            title="Promotion"
            data={filterConfig && filterConfig.promotion_categories}
            category={'filteredPromotions'}
          />
        )}
        {filteredVenues && filteredVenues.length > 0 && (
          <ListItem
            selectedFilters={filteredVenues}
            title="Venue"
            data={venueData}
            category={'filteredVenues'}
          />
        )}
        {filteredCategory && filteredCategory.length > 0 && (
          <ListItem
            selectedFilters={filteredCategory}
            title="Categories"
            data={attractionCategories}
            category={'filteredCategory'}
          />
        )}
      </ul>
    </div>
  );
}

export default FilterSelected;
