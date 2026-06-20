import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import RevealOnScroll from '../components/RevealOnScroll';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product
  const product = products.find((p) => p.id === id);

  // States
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [isDescOpen, setIsDescOpen] = useState(true);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  // Sync state with product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(product.color || (product.colors && product.colors[0]) || '');
      setSelectedSize(product.sizes ? product.sizes[0] : '');
      setQuantity(1);
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="bg-background text-on-background min-h-screen pt-32 pb-huge text-center flex flex-col items-center justify-center space-y-4">
        <span className="material-symbols-outlined text-4xl text-outline/50">find_in_page</span>
        <h1 className="font-headline-lg text-headline-lg">Silhouette Not Found</h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[28rem]">
          The item you are looking for may have been archived or is temporarily unavailable.
        </p>
        <Link
          to="/shop"
          className="bg-primary text-white font-label-md text-label-md px-6 py-3 uppercase hover:opacity-90 transition-opacity"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  // Get gallery images
  const galleryImages = product.images || [product.image];

  // Complete the look products
  const completeLookItems = products.filter((p) =>
    ['tailored-silk-trousers', 'sculpted-leather-mules', 'orbital-pendant-necklace', 'archetype-mini-bag'].includes(p.id)
  );

  // Recently Viewed products
  const recentlyViewedItems = products.filter((p) =>
    ['oversized-wool-coat', 'asymmetric-cashmere-knit'].includes(p.id)
  );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedColor, selectedSize);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Simulate navigation to checkout or simply open cart
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-32 pb-huge">
        {/* Product Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter lg:gap-huge items-start">
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 relative overflow-hidden bg-surface-container-low aspect-[3/4]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                alt={product.name}
                src={activeImage || product.image}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-[10px] px-2 py-1 tracking-tighter uppercase">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Grids if multi-image exists */}
            {galleryImages.length > 1 &&
              galleryImages.slice(1).map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className="bg-surface-container-low aspect-[3/4] cursor-pointer overflow-hidden group border border-transparent hover:border-outline-variant/50 transition-colors"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    alt={`${product.name} detail view ${idx + 1}`}
                    src={imgUrl}
                  />
                </div>
              ))}
          </div>

          {/* Right Column: Product Details */}
          <div className="md:col-span-5 sticky top-32 space-y-xl">
            <div className="space-y-sm">
              {product.badge && (
                <p className="font-label-sm text-label-sm tracking-widest text-secondary uppercase font-semibold">
                  {product.badge}
                </p>
              )}
              <h1 className="font-display-lg text-3xl md:text-5xl text-primary font-medium leading-tight">
                {product.name}
              </h1>
              <p className="font-headline-md text-headline-md text-primary pt-2">${product.price}</p>
            </div>

            {/* Colors */}
            {product.colors && (
              <div className="space-y-md">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  COLOR: <span className="text-primary font-semibold">{selectedColor}</span>
                </p>
                <div className="flex gap-4">
                  {product.colors.map((col) => {
                    const isSelected = selectedColor === col;
                    return (
                      <button
                        key={col}
                        onClick={() => setSelectedColor(col)}
                        className={`w-10 h-10 rounded-full border border-outline-variant/30 ring-1 ring-offset-2 transition-all cursor-pointer ${
                          isSelected ? 'ring-primary' : 'ring-transparent hover:ring-outline'
                        }`}
                        style={{
                          backgroundColor:
                            col === 'Charcoal'
                              ? '#3D3D3D'
                              : col === 'Bone'
                              ? '#E5E4E2'
                              : col === 'Onyx'
                              ? '#111111'
                              : col === 'Sand'
                              ? '#D2B48C'
                              : '#111111',
                        }}
                        title={col}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && (
              <div className="space-y-md">
                <div className="flex justify-between items-center">
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                    SIZE
                  </p>
                  <button
                    onClick={() => alert('Size Guide: Standard Italian tailoring fit.')}
                    className="font-label-sm text-label-sm text-primary underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer font-semibold"
                  >
                    SIZE GUIDE
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 border font-label-md text-label-md transition-colors cursor-pointer ${
                          isSelected
                            ? 'border-primary bg-primary text-white font-bold'
                            : 'border-outline-variant hover:border-primary text-on-surface-variant'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-md pt-2">
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                QUANTITY
              </p>
              <div className="flex items-center border border-outline-variant w-fit bg-surface">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 hover:bg-surface-container-low transition-colors cursor-pointer text-primary"
                >
                  -
                </button>
                <span className="px-6 py-2 font-label-md text-label-md border-x border-outline-variant select-none min-w-[50px] text-center text-primary font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 hover:bg-surface-container-low transition-colors cursor-pointer text-primary"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full py-5 bg-primary text-white font-label-md text-label-md uppercase tracking-widest hover:opacity-90 transition-opacity duration-300 cursor-pointer font-semibold"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full py-5 border border-primary text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer font-semibold"
              >
                Buy Now
              </button>
            </div>

            {/* Accordion Panels */}
            <div className="pt-xl space-y-lg border-t border-outline-variant/30">
              {/* Description */}
              <div className="border-b border-outline-variant/30 pb-4">
                <button
                  onClick={() => setIsDescOpen(!isDescOpen)}
                  className="flex justify-between items-center w-full cursor-pointer text-left font-label-md text-label-md text-primary uppercase tracking-wider py-2 font-semibold"
                >
                  Description
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${
                      isDescOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isDescOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-on-surface-variant font-body-md text-body-md leading-relaxed space-y-4">
                    <p>{product.description}</p>
                    {product.features && (
                      <ul className="list-disc list-inside space-y-1 pl-2">
                        {product.features.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping & Returns */}
              <div className="pb-4">
                <button
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                  className="flex justify-between items-center w-full cursor-pointer text-left font-label-md text-label-md text-primary uppercase tracking-wider py-2 font-semibold"
                >
                  Shipping &amp; Returns
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${
                      isShippingOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isShippingOpen ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                    Complimentary express shipping on all orders over $500. Returns are accepted
                    within 14 days of delivery. All garments must be unworn and in their original packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete the Look */}
        <RevealOnScroll>
          <section className="mt-huge bg-surface-container-low py-huge border-t border-b border-outline-variant/30">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
              <h2 className="font-headline-md text-headline-md text-primary mb-xl uppercase font-semibold">
                COMPLETE THE LOOK
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                {completeLookItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="space-y-md group cursor-pointer"
                  >
                    <div className="aspect-[3/4] bg-white overflow-hidden relative">
                      <img
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
                        alt={item.name}
                        src={item.image}
                      />
                    </div>
                    <div className="space-y-xs">
                      <p className="font-body-md text-body-md text-primary group-hover:text-secondary transition-colors font-medium">
                        {item.name}
                      </p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* Recently Viewed */}
        <RevealOnScroll>
          <section className="mt-huge max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-label-md text-label-md text-on-surface-variant tracking-widest uppercase mb-xl font-semibold">
              Recently Viewed
            </h2>
            <div className="flex gap-gutter overflow-x-auto no-scrollbar pb-lg snap-x">
              {recentlyViewedItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="min-w-[280px] space-y-md group cursor-pointer snap-start"
                >
                  <div className="aspect-[3/4] bg-surface-container-low overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
                      alt={item.name}
                      src={item.image}
                    />
                  </div>
                  <div className="space-y-xs">
                    <p className="font-body-md text-body-md text-primary group-hover:text-secondary transition-colors font-medium">
                      {item.name}
                    </p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      </main>
    </div>
  );
};

export default Product;
