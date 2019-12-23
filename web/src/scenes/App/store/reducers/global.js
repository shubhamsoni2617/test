export const initialState = {
  theme: { primary: 'green' },
  genreData: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeTheme':
      return {
        ...state,
        theme: action.newTheme
      };

    case 'LOAD_GENRE':
      return {
        ...state,
        genreData: action.payload
      };

    default:
      return state;
  }
};
