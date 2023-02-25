import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

export const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)
  const images = [
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2164551/2019/3/12/e16e3b72-33be-44c4-b5d2-fa65245ec0ce1552375230799-Roadster-Men-Grey--Olive-Green-Camouflage-Print-Regular-Fit--4.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2164551/2019/3/12/7c50b10e-8316-4382-ba53-d0f0b578ea8e1552375230841-Roadster-Men-Grey--Olive-Green-Camouflage-Print-Regular-Fit--2.jpg"
  ]

  const increment = () =>{

    setQuantity(prev=>prev+1)
  }

  const decrement = () =>{
    if(quantity === 1){
      setQuantity(1)
    }else{
      setQuantity(prev=>prev-1)
    }

  }

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt=""  onClick={(e)=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e)=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet tempora
           repellat perspiciatis assumenda quibusdam. Fugiat quibusdam dolorum quia
           sint laboriosam odit unde, perferendis magni ut deserunt cum. Tempore, exercitationem.
        </p>
        <div className="quantity">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
          <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
          </button>
          
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISHLIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor Polo</span>
            <span>Product Type T-Shirt</span>
            <span>Tag: T-shirt, Women ,Top</span>
          </div>
          <hr />
          <div className="info">
            <span>Description</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        
      </div>
    </div>
  )
}
