export const initialState = {
  genre: [],
  shimmer: true,
  shimmerFilter: true,
  filteredGnere: [],
  filteredSearch: [],
  filteredPromotions: [],
  filteredVenues: [],
  filteredTags: [],
  filteredPriceRange: {},
  filteredDateRange: {},
  filteredSortType: 'date',
  filteredSortOrder: '',
  eventsData: [],
  venues: [],
  filterConfig: null,
  first: 0,
  limit: 9,
  viewType: 'grid',
  viewTypeClass: 'events-section',
  totalRecords: 0,
  loader: false,
  queryParams: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_CONFIG': {
      return {
        ...state,
        filterConfig: action.filterConfig
      };
    }
    case 'LOAD_VENUE':
      return {
        ...state,
        venues: action.venues
      };
    case 'LOAD_GENRE_SEND':
      return {
        ...state,
        shimmerFilter: true
      };
    case 'LOAD_GENRE_SUCCESS':
      return {
        ...state,
        shimmerFilter: false,
        genre: action.genre
      };
    case 'LOAD_EVENTS':
      return {
        ...state,
        ...action.data
      };
    case 'LOAD_MORE_EVENTS_SEND':
      return {
        ...state,
        shimmer: true
      };
    case 'LOAD_MORE_EVENTS_SUCCESS':
      return {
        ...state,
        shimmer: false,
        eventsData: [...state.eventsData, ...action.data.eventsData]
      };
    case 'SET_FILTERS': {
      return {
        ...state,
        first: 0,
        limit: 9,
        ...action.payload
      };
    }
    case 'RESET_FILTERS':
      return {
        ...state,
        filteredGnere: [],
        filteredSearch: [],
        filteredPromotions: [],
        filteredVenues: [],
        filteredTags: [],
        filteredPriceRange: {},
        filteredDateRange: {},
        first: 0,
        limit: 9
      };
    case 'CHANGE_VIEW':
      return {
        ...state,
        viewTypeClass: action.payload.viewTypeClass,
        viewType: action.payload.viewType
      };
    default:
      return state;
  }
};
