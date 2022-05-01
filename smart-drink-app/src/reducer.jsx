import { Constants } from './constants';
import { combineReducers } from 'redux';
const initialState = {
    data: [],
    error: undefined,
    requestOut: false
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case Constants.GET_DATA_OUT:
            return {
                ...state,
                requestOut: true
            }
        case Constants.GET_DATA_FAIL:
            return {
                ...state,
                error: action.error,
                requestOut: false
            }
        case Constants.GET_DATA_SUCCESS:
            return {
                ...state,
                error: undefined,
                requestOut: false
            }
        case Constants.SET_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer,
  });
  
  export default rootReducer;

