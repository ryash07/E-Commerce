
import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img:"https://media.gettyimages.com/id/1368192847/photo/man-with-vitiligo-standing-with-hands-behind-back.jpg?s=612x612&w=0&k=20&c=5YfgVGwRdnDkIUD_olsy_d9hY87fWu_AEeR1pmtiGeQ=",
            img2:"https://media.gettyimages.com/id/1348936186/photo/cheerful-young-woman-listening-to-music.jpg?s=612x612&w=0&k=20&c=urlDp4oYbSaMyH8SOPSNOP4nu-uAmshNYAuFz5ZZdfI=",
            title:"Graphic T-shirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFi4DuvV0VfodyEpUd-8BxSL8ENRVA8K0wLoRH44ON6do7ukzUPtoemXUeUozIo4yyC2TSQDPT5feq9DxJqFT2dbWWJJQhyba3tbUGAq8_Z8K0NtbproQ2nw",
            title:"Graphic Hoddie",
            isNew:true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFi4DuvV0VfodyEpUd-8BxSL8ENRVA8K0wLoRH44ON6do7ukzUPtoemXUeUozIo4yyC2TSQDPT5feq9DxJqFT2dbWWJJQhyba3tbUGAq8_Z8K0NtbproQ2nw",
            title:"Hat",
            isNew:false,
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFi4DuvV0VfodyEpUd-8BxSL8ENRVA8K0wLoRH44ON6do7ukzUPtoemXUeUozIo4yyC2TSQDPT5feq9DxJqFT2dbWWJJQhyba3tbUGAq8_Z8K0NtbproQ2nw",
            title:"Shirt",
            isNew:false,
            oldPrice:19,
            price:12,
        },
    ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Relaxed-fit hoodie in sweatshirt fabric made from a cotton 
                blend with a soft brushed inside. Lined hood with a wrapover front,
                 dropped shoulders,
                 long sleeves, a kangaroo pocket and ribbing at the cuffs and hem
            </p>
        </div>
        <div className="bottom">
            {
                data.map(item=>(
                <Card item={item} key={item.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default FeaturedProducts