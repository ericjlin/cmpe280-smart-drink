import { Constants } from './constants';
import { combineReducers } from 'redux';
const initialState = {
    data: [],
    error: undefined,
    requestOut: false,
    displayed: [],
    pages: []
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
        case Constants.SET_PAGE:
            // console.log("CALLED",  action);
            const indexLastPoint = action.currentPage * 15;
            const indexFirstPoint = indexLastPoint - 15;
            return {
                ...state,
                displayed: state.data.filter((item, index) => {
                    return index >= indexFirstPoint && index < indexLastPoint
                })
            }
        case Constants.SET_DATA:
            let pages = action.data.length / 15;
            let page_array = [];
            for (let i = 0; i < pages; i++) {
                page_array.push(i + 1)
            }
            return {
                ...state,
                data: action.data,
                pages: page_array
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer,
  });
  
  export default rootReducer;

