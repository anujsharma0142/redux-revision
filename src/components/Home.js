import React from 'react'
import iphone from '../assets/images/iphone.png'
import cartImg from '../assets/images/carts.png'

const Home = (props) => {
    console.log("home component",props.cardData.length);
    
    return (
        <div>

            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={iphone} alt='iphone' />
                </div>
                <div className='text-wrapper item'>
                    <span>Iphone</span>
                    <span>Price $1000.00</span>
                </div>
                <div className='btn-wrapper item'>
                    <button onClick={()=>props.addToCartHandler({price:'10000', name:"Iphone 14"})}>Add to Cart</button>
                    <button onClick={()=>props.removeToCartHandler()}>Remove to Cart</button>

                </div>
            </div>
        </div>
    )
}

export default Home