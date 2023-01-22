import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStyles, toggleCarousel } from "../../store/styles/actions";
import { Switch } from '@chakra-ui/react'
const FIlters = () => {
  const styles = useSelector((store)=>store.styles) 
  const dispatch = useDispatch()
  function handleColor(event){
    dispatch(getStyles(event.target.value))
  }
  function handleToggle(event){
    dispatch(toggleCarousel(event.target.value))
  }
  console.log(styles)
  return (
    <div style={style}>
      <div>
        <select name="color" onChange={(event)=>handleColor(event)} style = {selectButton}>
            <option >SELECT FONT COLOR: </option>
            <option value="orange">
                Orange
            </option>
            <option value="red">
                Red
            </option>
            <option value="green">
                Green
            </option>
        </select>
      </div>
      <br />
      <div>
      <select  name="carousel" onChange={(event)=>handleToggle(event)} style = {selectButton}>
            <option >TOGGLE CAROUSEL: </option>
            <option value="true">
                YES
            </option>
            <option value="false">
                NO
            </option>
        </select>
      </div>
    </div>
  );
};

export default FIlters;

var style = {
  "width": "20%",
  "height": "100vh",
  "backgroundColor": "whitesmoke",
  "padding": "50px 0"
};


var selectButton = {
  "border":"none",
  "paddingRight": "20px",
  "marginRight":"20px",
  "height": "30px",
  "fontSize": "15px"
}
