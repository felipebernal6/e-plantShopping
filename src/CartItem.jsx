import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
      let total = 0
      for (const item of cart) {
        console.log(`Somar valor de ${item.name}`)
        console.log(`Valor de ${item.cost}`)
        console.log(`Quantidade de ${item.quantity}`)
        console.log(`Total de ${parseFloat(item.cost.replace('$', '')) * item.quantity}`)
        total += parseFloat(item.cost.replace('$', '')) * item.quantity;
      }
      console.log(`total amount for cart: ${total}`);
      return total;
      
 
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };



    const handleIncrement = (item) => {
      const new_quantity = item.quantity + 1;
      dispatch(updateQuantity({ ...item, quantity: new_quantity }));
    };

  const handleDecrement = (item) => {
    const new_quantity = Math.max(0, item.quantity - 1);
    dispatch(updateQuantity({ ...item, quantity: new_quantity }));
    if (new_quantity === 0) {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h1>Your cart is empty</h1>
        ) : (
          <>
            <h1>Your Cart</h1>
            <h2>Cart Items: {cart.length}</h2>
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
          </>
        )}
        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))
          }
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


