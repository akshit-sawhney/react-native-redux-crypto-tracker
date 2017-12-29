import axios from 'axios';
import { apiBaseURL, forexConversionBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_FOREX_DATA_SUCCESS,
    FETCHING_FOREX_DATA,
    FETCHING_FOREX_DATA_FAIL
} from './../Utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_FOREX_DATA })
        return axios.get(`${forexConversionBaseURL}?base=USD&symbols=INR`)
            .then(forexResponse => {
                dispatch({ type: FETCHING_COIN_DATA });
                dispatch({ type: FETCHING_FOREX_DATA_SUCCESS, payload: forexResponse.data.rates.INR });  
                axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
                .then(res => {
                    return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });                
                })
                .catch(err => {
                    return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
                });
            })
            .catch(err => {
                return dispatch({ type: FETCHING_FOREX_DATA_FAIL, payload: err });
            });
    }
}

