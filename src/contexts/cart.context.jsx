import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: false,
  showCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, showCart] = useState(false);
  const value = {
    cart,
    showCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
