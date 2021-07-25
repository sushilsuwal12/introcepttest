import {combineReducers} from 'redux';
import {phoneReducers} from './phoneReducers';

const reducers = combineReducers({
  phone: phoneReducers,
});

export default reducers;

// changes
