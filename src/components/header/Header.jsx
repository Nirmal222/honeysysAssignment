import React from 'react'

const Header = () => {
  return (
    <div style={style}>
        <p>Home</p>
        <p>Products</p>
    </div>
  )
}

export default Header

var style =  {
    "display": "flex",
    "backgroundColor": 'black',
    "color": "white",
    "gap": "3rem",
    "paddingLeft":"3rem"
}