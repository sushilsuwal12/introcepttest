export function addPhone(item) {
  return function (dispatch) {
    dispatch({type: 'ADD_ITEM', payload: item});
  };
}

export function updateItem(id, item) {
  return function (dispatch) {
    dispatch({type: 'UPDATE_ITEM', id: id, payload: item});
  };
}

export function deleteItem(id) {
  return function (dispatch) {
    dispatch({type: 'DELETE_ITEM', payload: id});
  };
}

export function filterPhone(brand) {
  return function (dispatch) {
    dispatch({type: 'FILTER_ITEM', payload: brand});
  };
}
