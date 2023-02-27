import React from 'react'
import CardStyle from './Card.module.css'
const Card = () => {
  return (
    <>
      {/* <div classNameName={CardStyle.cardContainer}>
        <div classNameName={CardStyle.main}>
          <img src="https://plus.unsplash.com/premium_photo-1661436363490-c115b2644e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=10" alt="" />
          <div classNameName={CardStyle.price}>
            <p>$100</p>

          </div>
          <div classNameName={CardStyle.detail}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis rerum! Omnis nulla ratione facilis! Dolore id odit atque qui veniam quaerat, sed eos ratione sint, excepturi earum expedita aperiam!</p>

          </div>
          <button type='button'>Add To Cart</button>
        </div>
      </div> */}


<div className={CardStyle.cardContainer}>
  <div className={CardStyle.card}>
    <div className="card-header">
      <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
    <p>$500</p>
    <div className={CardStyle.cardBody}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, dui et tempor dictum, lectus quam tincidunt velit, eu gravida dui diam id nibh.</p>
    </div>
    <button>Add To Cart</button>
  </div>
</div>

    </>
  )
}

export default Card
