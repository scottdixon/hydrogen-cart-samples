import {Suspense} from 'react';
import Cart from './Cart.client';
import CartToggle from './CartToggle.client';
import Logo from './Logo';

export default function Layout({children}) {
  return (
    <>
      <div className="absolute top-0 left-0">
        <a
          href="#mainContent"
          className="p-4 focus:block sr-only focus:not-sr-only"
        >
          Skip to content
        </a>
      </div>
      <div className="min-h-screen max-w-screen text-gray-700 font-sans">
        {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
        <Suspense fallback={null}>
          <header className="mx-auto max-w-7xl p-4 md:py-5 md:px-8 mx-auto max-w-7xl flex">
            <div className="text-center w-full flex justify-between items-center">
              <Logo />
              <CartToggle className="float-right" />
            </div>
          </header>
          <Cart />
        </Suspense>
        <main role="main" id="mainContent" className="relative bg-gray-50 ">
          <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8  mx-auto max-w-7xl">
            <Suspense fallback={null}>{children}</Suspense>
          </div>
        </main>
      </div>
    </>
  );
}
