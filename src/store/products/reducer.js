import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./types"

const initialState = { 
    loading: false,
    error: false,
    data: []
}

export const productReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case GET_DATA_LOADING: return { ...state, loading: true };
        case GET_DATA_SUCCESS: return { ...state, loading: false, data: payload };
        case GET_DATA_ERROR: return { ...state, error: true, loading: false };
        default: return state;
    }
}