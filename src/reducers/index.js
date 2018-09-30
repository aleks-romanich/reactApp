import { combineReducers} from 'redux';

import cards from './cards';
import popup from './popup';


export default combineReducers({
  cards,
  popup
})
