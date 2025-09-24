import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, addPlant } from './plantSlice';
import { addItem, removeItem, updateQuantity } from './CartSlice';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page

    console.log('Loading plants');
    const categoriesArray = useSelector((state) => state.plant.categories);
    const plantsArray = useSelector((state) => state.plant.plants);
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    
    const handleAddToCart = (sku) => {
        console.log(`adding plant to cart ${sku}`);
        console.log(plantsArray);
        const plant = plantsArray.find(plant => plant.sku === sku);
        console.log(plant);

        dispatch(addItem(plant));
        console.log('plant added to cart');

    };

    const handleRemoveFromCart = (index) => {
        console.log(`removing plant from cart ${index}`);
        const plant = plantsArray[categoryIndex].plants[index];
        dispatch(removeItem(plant));
    };


    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showPlants to true when "Plants" link is clicked
        setShowCart(false); // Hide the cart when navigating to Plants
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <text x="128" y="128" fontSize="70" fill="#faf9f9" textAnchor="middle" dominantBaseline="middle">{cart.length}</text>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path>
                                </svg>
                                
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {categoriesArray.map((category, categoryIndex) => (
                        <div key={category}>
                            <div className="product-list">
                                <h3>{category}</h3>
                            </div>
                            <div className="product-list">
                                {plantsArray.filter(plant => plant.categoryIndex === categoryIndex).map((plant, plantIndex) => {
                                    const isInCart = cart.some(item => item.sku === plant.sku);
                                    return (
                                        <div key={plant.sku} id={plant.sku} className="product-card">
                                            <h3 className='product-title'>{plant.name}</h3>
                                            <img src={plant.image} alt={plant.name} className='product-image'/>
                                            <p>{plant.description}</p>
                                            <p className='product-price'>{plant.cost}</p>
                                            <button className={isInCart ? 'product-button added-to-cart' : 'product-button'} onClick={() => handleAddToCart(plant.sku)} disabled={isInCart}>
                                                {isInCart ? 'In Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
