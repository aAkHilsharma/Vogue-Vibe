import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, Count } from './cart-icon.styles';

const CartIcon = () => {
  const { cart, showCart, cartCount } = useContext(CartContext);
  return (
    <CartIconContainer
      onClick={() => {
        showCart(!cart);
      }}
    >
      <ShoppingIcon />
      <Count>{cartCount}</Count>
    </CartIconContainer>
  );
};

export default CartIcon;
