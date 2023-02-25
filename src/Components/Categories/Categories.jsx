import React from 'react'
import {Link} from "react-router-dom"
import "./Categories.scss"


const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/18e8fbf9-7702-4f58-95a4-7cdb69850e641676819472892-Mango_Man-_Levi-s-____Flat_50_off.png' alt=""></img>
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src='https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/216f9bdf-e348-4e9d-b108-f22ceafbf4911676819472966-Starting_1299_2499.png' alt=""></img>
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src='https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg' alt=""></img>
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src='https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg' alt=""></img>
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src='https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg' alt=""></img>
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src='https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/19/ea799980-8939-4dc3-8bbe-72b3f63ab8e31676819472832-Casual_Shoes_Min_40_Off.png' alt=""></img>
                <button>
                    <Link to="/products/1" className='link'>Sale</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories
