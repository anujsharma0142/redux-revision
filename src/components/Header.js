import React from 'react'
import cartImg from '../assets/images/carts.png'

const Header = (props) => {
    console.log("Header component",props.cardData.length);
    
    return (
        <div>
            <div className='add-to-cart'>
                <img src={cartImg} alt='add-to-cart-img'/>
                <span className="cart-count">{props.cardData.length}</span>
           </div>
        </div>
    )
}

export default Header