import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../Assets/assets'; // Ensure this path is correct

function FoodItem({ id, name, price, description, image }) {

    const [itemCount, setItemCount] = useState(0);

    const handleIncrement = () => {
        setItemCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-img' src={image} alt={name} />
                {!itemCount
                    ? <img className='add' src={assets.add_icon_white} alt="add" onClick={handleIncrement} />
                    : <div className='food-item-counter'>
                        <button className='decrement-btn' onClick={handleDecrement}>-</button>
                        <span>{itemCount}</span>
                        <button className='increment-btn' onClick={handleIncrement}>+</button>
                      </div>
                }
            </div>

            <div className='food-item-info'>
                <div className='food-item-name'>
                    <p>{name}</p>
                    {/* Assuming assets.rating_starts is the correct path for the rating stars image */}
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
