import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeCartItem, clearCartItem } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearCartItem(cartItem);
  const additemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeCartItem(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={additemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={clearItemHandler} className='remove-button'>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
