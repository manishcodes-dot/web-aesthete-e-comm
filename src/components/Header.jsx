import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart, isCartOpen, setIsCartOpen, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();

  // Scroll handler to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 80) {
        setHeaderVisible(true);
        return;
      }
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHeaderVisible(false);
      } else {
        // Scrolling up
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close drawers on route change
  useEffect(() => {
    setIsNavDrawerOpen(false);
    setIsCartOpen(false);
    setIsSearchOpen(false);
  }, [location, setIsCartOpen]);

  return (
    <>
      {/* TopAppBar Navigation Shell */}
      <header
        className={`fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 transition-transform duration-300 ease-in-out ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto relative">
          {/* Left Action Elements */}
          <div className="flex items-center gap-6 md:gap-8">
            <button
              onClick={() => setIsNavDrawerOpen(true)}
              className="text-primary hover:opacity-70 transition-opacity duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Toggle navigation drawer"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="hidden md:flex gap-8">
              <Link
                className={`font-label-md text-label-md transition-all duration-300 pb-1 ${
                  location.pathname === '/shop'
                    ? 'text-primary border-b border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                to="/shop"
              >
                SHOP ALL
              </Link>
              <Link
                className={`font-label-md text-label-md transition-all duration-300 pb-1 ${
                  location.pathname === '/collections'
                    ? 'text-primary border-b border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
                to="/collections"
              >
                COLLECTIONS
              </Link>
              <Link
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-all duration-300 pb-1"
                to="/collections#featured"
              >
                EDITORIAL
              </Link>
            </div>
          </div>

          {/* Center Brand Identity */}
          <Link
            className="font-display-lg text-headline-md tracking-tighter text-primary absolute left-1/2 -translate-x-1/2 select-none"
            to="/"
          >
            AESTHETE
          </Link>

          {/* Right Action Elements */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-primary hover:opacity-70 transition-opacity duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Search site"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-primary hover:opacity-70 transition-opacity duration-300 cursor-pointer flex items-center justify-center relative"
              aria-label="Open cart drawer"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center scale-90">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Inline Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-outline-variant bg-surface px-margin-mobile md:px-margin-desktop py-4 animate-fade-in">
            <div className="max-w-container-max mx-auto flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH FOR SILHOUETTES, FRAGRANCES, OBJECTS..."
                className="w-full bg-transparent border-none outline-none text-body-md text-primary placeholder:text-outline/70 focus:ring-0 uppercase tracking-wider"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-on-surface-variant hover:text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Navigation Drawer Overlay (Left Slide-out) */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
          isNavDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsNavDrawerOpen(false)}
          className="absolute inset-0 bg-primary/25 backdrop-blur-xs"
        />

        {/* Drawer content */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-surface p-8 shadow-2xl flex flex-col justify-between transition-transform duration-500 ease-out ${
            isNavDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <div className="flex justify-between items-center mb-12">
              <span className="font-display-lg text-headline-md tracking-tighter">AESTHETE</span>
              <button
                onClick={() => setIsNavDrawerOpen(false)}
                className="text-primary hover:opacity-75 cursor-pointer flex items-center justify-center"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              <Link
                className="font-display-lg text-headline-md text-primary hover:text-secondary transition-colors"
                to="/"
                onClick={() => setIsNavDrawerOpen(false)}
              >
                HOME
              </Link>
              <Link
                className="font-display-lg text-headline-md text-primary hover:text-secondary transition-colors"
                to="/shop"
                onClick={() => setIsNavDrawerOpen(false)}
              >
                SHOP ALL
              </Link>
              <Link
                className="font-display-lg text-headline-md text-primary hover:text-secondary transition-colors"
                to="/collections"
                onClick={() => setIsNavDrawerOpen(false)}
              >
                COLLECTIONS
              </Link>
              <Link
                className="font-display-lg text-headline-md text-primary hover:text-secondary transition-colors"
                to="/collections"
                onClick={() => setIsNavDrawerOpen(false)}
              >
                EDITORIAL
              </Link>
            </nav>
          </div>

          <div className="space-y-6 border-t border-outline-variant/50 pt-6">
            <div>
              <span className="font-label-sm text-label-sm text-outline block mb-2">STOREFRONT</span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                124 Boulevard Saint-Germain<br />75006 Paris, France
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="font-label-sm text-label-sm text-primary hover:opacity-70">INSTAGRAM</a>
              <a href="#" className="font-label-sm text-label-sm text-primary hover:opacity-70">PINTEREST</a>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Drawer Overlay (Right Slide-out) */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-primary/20 backdrop-blur-xs"
        />

        {/* Drawer content */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-[480px] max-w-full bg-surface p-8 shadow-2xl flex flex-col justify-between transition-transform duration-500 ease-out ${
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-outline-variant pb-4">
            <div className="flex items-center gap-2">
              <span className="font-label-md text-label-md text-primary tracking-wider uppercase">SHOPPING BAG</span>
              <span className="font-body-md text-body-md text-on-surface-variant">({cartCount})</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-primary hover:opacity-75 cursor-pointer flex items-center justify-center"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto no-scrollbar py-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <span className="material-symbols-outlined text-outline text-4xl">shopping_bag</span>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Your shopping bag is currently empty.</p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block bg-primary text-white font-label-md text-label-md px-6 py-3 hover:opacity-95 transition-opacity"
                >
                  EXPLORE COLLECTIONS
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 border-b border-outline-variant/30 pb-6">
                  {/* Image */}
                  <div className="w-24 aspect-[3/4] bg-surface-container-low flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-body-md text-body-md text-primary font-medium">{item.name}</h4>
                        <span className="font-label-md text-label-md text-primary">${item.price}</span>
                      </div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">
                        {item.selectedColor || item.color} {item.selectedSize ? `/ Size ${item.selectedSize}` : ''}
                      </p>
                    </div>

                    {/* Quantity controls & Remove */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-outline-variant/60">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)}
                          className="px-2.5 py-1 text-on-surface-variant hover:text-primary cursor-pointer flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-base">remove</span>
                        </button>
                        <span className="px-3 font-label-sm text-label-sm text-primary select-none">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)}
                          className="px-2.5 py-1 text-on-surface-variant hover:text-primary cursor-pointer flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-base">add</span>
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                        className="text-on-surface-variant hover:text-primary text-label-sm font-label-sm uppercase tracking-widest cursor-pointer underline underline-offset-4"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout & Total Summary */}
          {cart.length > 0 && (
            <div className="border-t border-outline-variant pt-6 space-y-4">
              <div className="flex justify-between items-center font-label-md text-label-md text-primary">
                <span>SUBTOTAL</span>
                <span className="text-lg">${cartTotal.toLocaleString()}</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                onClick={() => alert('Proceeding to checkout... (Mock payment gateway)')}
                className="w-full bg-primary text-white font-label-md text-label-md py-4 hover:opacity-90 transition-opacity tracking-wider uppercase"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
