import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./types";
import axios from "axios";
export const getData = ()=>async dispatch=>{
    dispatch({type: GET_DATA_LOADING});
    try{
        let data = await axios("https://fakestoreapi.com/products");
        data = data.data;
        dispatch({ type: GET_DATA_SUCCESS, payload: data });
    }catch(e){
        return dispatch({ type: GET_DATA_ERROR });
    }
}