import { combineReducers } from 'redux';
import expandedReducer from "./expandedReducer";

const rootReducer = combineReducers({
    expanded: expandedReducer,
  });
  
export default rootReducer;