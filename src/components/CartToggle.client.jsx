// Import your cart icon and UI to make them accessible to your CartToggle component
import CartIconWithItems from './CartIconWithItems.client';
import {useCartUI} from './CartUIProvider.client';

// A client component that defines the behavior when a customer opens and closes a cart
export default function CartToggle({handleClick}) {
  const cartUI = useCartUI();

  // Error handling for when the CartUI isn’t available
  if (cartUI == null) {
    throw new Error('CartToggle must be a descendent of a CartUIProvider');
  }

  const {isCartOpen, toggleCart} = cartUI;

  // Wrap the cart icon in a button to make it clickable
  return (
    <button
      type="button"
      aria-expanded={isCartOpen}
      aria-controls="cart"
      className="float-right"
      onClick={() => {
        toggleCart();
      }}
    >
      <CartIconWithItems />
      <span className="sr-only">Open cart</span>
    </button>
  );
}
