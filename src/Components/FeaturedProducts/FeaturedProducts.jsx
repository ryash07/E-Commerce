

import Card from '../Card/Card'
import "./FeaturedProducts.scss"

import useFetch from "../../hooks/useFetch"


const FeaturedProducts = ({type}) => {
 
  const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
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
            {error ? "Something Went Wrong!" :
              loading ? "loading"
               : data.map((item)=>
                <Card item={item} key={item.id}/>
                )
            }
        </div>
    </div>
  )
}

export default FeaturedProducts

