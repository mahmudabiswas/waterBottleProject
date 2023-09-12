import React from 'react'
import "./bottle.css"
const Bottle = ({ bottle,handleAddToCard }) => {
    // console.log(bottle)
  const { category, name, img, price, ratings, seller } = bottle
  
  return (<>
 
      <div className='bottleContainer'>
          <h1>Category: {category} </h1>
          <h2>name: {name} </h2>
          <img src={img} alt="" style={{ width: '200px' }} />
          <h3>price : {price}</h3>
          <h4>Ratings : {ratings} </h4>
      <h5>seller : {seller} </h5>
      <button onClick={() =>  handleAddToCard(bottle)} >Purchase</button>
    </div>
  
      </>
    )
}

export default Bottle