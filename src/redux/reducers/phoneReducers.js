const initialState = {
  phones: [],
  copy: [],
};

export function phoneReducers(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        phones: [...state.phones, action.payload],
        copy: [...state.phones, action.payload],
      };
    case 'UPDATE_ITEM':
      const updatedItem = state.phones.map(item => {
        if (item.id === action.id) {
          item = action.payload;
        }
        return item;
      });
      return {
        ...state,
        phones: updatedItem,
      };
    case 'FILTER_ITEM':
      const filteredArray = state.copy.filter(
        item => item.brand === action.payload,
      );
      return {
        ...state,
        phones: filteredArray,
      };
    case 'DELETE_ITEM':
      const deletedPhone = state.phones.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        phones: deletedPhone,
      };
    default:
      return state;
  }
}
