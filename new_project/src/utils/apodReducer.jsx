export const initialState = {
    data: null,
    loading: true,
    error: null,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return {
          ...state,
          data: action.payload,
          loading: false,
        };
      case 'FETCH_ERROR':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }