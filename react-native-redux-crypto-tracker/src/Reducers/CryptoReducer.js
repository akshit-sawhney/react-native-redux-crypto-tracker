import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_FOREX_DATA,
    FETCHING_FOREX_DATA_SUCCESS,
    FETCHING_FOREX_DATA_FAIL
} from './../Utils/ActionTypes';

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
    forexRate: null,
};

export default function(state = initialState, action) {

    switch(action.type) {

        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: [],
                hasError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            });

        case FETCHING_FOREX_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
        
        case FETCHING_FOREX_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                forexRate: action.payload,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_FOREX_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                forexRate: null,
                hasError: true,
                errorMessage: action.payload
            });

    
        default:
            return state;
    }
    
}