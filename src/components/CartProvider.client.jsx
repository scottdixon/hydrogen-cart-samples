// For more information on built-in hooks in React, refer to https://reactjs.org/docs/hooks-reference.html.
import {useCallback} from 'react';
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';
import CartUIProvider, {useCartUI} from './CartUIProvider.client';

// A client component that creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks
export default function CartProvider({children, numCartLines}) {
  return (
    <CartUIProvider>
      <Provider numCartLines={numCartLines}>{children}</Provider>
    </CartUIProvider>
  );
}

// A function that defines the state of the cart as open in order to create callbacks
function Provider({children, numCartLines}) {
  const {openCart} = useCartUI();

  const open = useCallback(() => {
    openCart();
  }, [openCart]);

  return (
    <>
      <ShopifyCartProvider
        numCartLines={numCartLines}
        onLineAdd={open}
        onCreate={open}
      >
        {children}
      </ShopifyCartProvider>
    </>
  );
}
