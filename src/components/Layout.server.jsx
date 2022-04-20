import {Suspense} from 'react';
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
        <header className="mx-auto max-w-7xl p-4 md:py-5 md:px-8  mx-auto max-w-7xl">
          <Logo />
        </header>
        <main role="main" id="mainContent" className="relative bg-gray-50 ">
          <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8  mx-auto max-w-7xl">
            <Suspense fallback={null}>{children}</Suspense>
          </div>
        </main>
      </div>
    </>
  );
}
