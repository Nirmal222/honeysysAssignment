
const initialState = {
    color:"black",
    carousel: false
}
export const styleReducer = (state=initialState, { type, payload })=>{
    switch(type){
        case "GETCOLOR": return {...state, color:payload };
        case "TOGGLECAROUSEL": return { ...state, carousel: payload }
        default: return state;
    };
}