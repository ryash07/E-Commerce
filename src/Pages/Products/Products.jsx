import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../Components/List/List'
import "./Products.scss"

export const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor='2'>Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <span>0</span>
          <input type="range" min={1} max={1000} onChange={(e)=> setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name="price" onChange={(e)=>setSort("asc")}></input>
            <label htmlFor='asc'>Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name="price" onChange={(e)=>setSort("desc")}></input>
            <label htmlFor='desc'>Price (Highest First)</label>
          </div>
          
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}
