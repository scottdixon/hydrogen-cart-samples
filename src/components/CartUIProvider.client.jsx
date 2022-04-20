// For more information on built-in hooks in React, refer to https://reactjs.org/docs/hooks-reference.html.
import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from 'react';

// Creates a context object. For more information, refer to https://reactjs.org/docs/context.html
export const CartContext = createContext(null);

// A client component that defines the behavior that occurs when a user is interacting
// with a cart
export default function CartUIProvider({children}) {
  const [open, setOpen] = useState(false);

  // The context for when a user opens a cart
  const openCart = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  // The context for when a user closes a cart
  const closeCart = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // The context for when a user toggles a cart
  const toggleCart = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  // Return a cached result (memoization) of the cart context
  const contextValue = useMemo(() => {
    return {
      isCartOpen: open,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [open, openCart, closeCart, toggleCart]);

  // Make the cart state available to your Hydrogen app
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

// Return the context of the cart object
export function useCartUI() {
  return useContext(CartContext);
}
