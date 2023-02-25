import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {

    const data = [
        {
            id:1,
            img:"https://media.gettyimages.com/id/1368192847/photo/man-with-vitiligo-standing-with-hands-behind-back.jpg?s=612x612&w=0&k=20&c=5YfgVGwRdnDkIUD_olsy_d9hY87fWu_AEeR1pmtiGeQ=",
            img2:"https://media.gettyimages.com/id/1348936186/photo/cheerful-young-woman-listening-to-music.jpg?s=612x612&w=0&k=20&c=urlDp4oYbSaMyH8SOPSNOP4nu-uAmshNYAuFz5ZZdfI=",
            title:"Graphic T-shirt",
            desc:"Long sleeved graphic t-shirt with half body language",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFi4DuvV0VfodyEpUd-8BxSL8ENRVA8K0wLoRH44ON6do7ukzUPtoemXUeUozIo4yyC2TSQDPT5feq9DxJqFT2dbWWJJQhyba3tbUGAq8_Z8K0NtbproQ2nw",
            title:"Graphic Hoddie",
            desc:"Long sleeved graphic t-shirt with half body language",
            isNew:true,
            oldPrice:19,
            price:12,
        }
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete"/>
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
        
    </div>
  )
}

export default Cart
