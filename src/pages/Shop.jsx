import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import RevealOnScroll from '../components/RevealOnScroll';

const Shop = () => {
  // Filter States
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [priceRange, setPriceRange] = useState(2500);
  const [sortBy, setSortBy] = useState('FEATURED');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Constants
  const categoriesList = ['Outerwear', 'Knitwear', 'Tailoring', 'Accessories'];
  const sizesList = ['XS', 'S', 'M', 'L', 'XL'];
  const colorsList = [
    { name: 'Charcoal', hex: '#111111' },
    { name: 'Soft Ivory', hex: '#FAFAF9' },
    { name: 'Sand', hex: '#D2B48C' },
    { name: 'Olive', hex: '#556B2F' },
    { name: 'Slate', hex: '#708090' },
  ];

  // Toggle Category
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSize(null);
    setSelectedColor(null);
    setPriceRange(2500);
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    // Exclude complete look and recently viewed items if they aren't part of core shop items
    const baseShopItems = products.filter(p =>
      ['sculpted-silk-blazer', 'structural-wool-overcoat', 'sculpted-cashmere-knit', 'architectural-leather-boot', 'essential-linen-shirt', 'tapered-crepe-trouser', 'monolith-leather-totebag'].includes(p.id)
    );

    let result = [...baseShopItems];

    // Filter by Category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by Size
    if (selectedSize) {
      result = result.filter((p) => p.sizes && p.sizes.includes(selectedSize));
    }

    // Filter by Color
    if (selectedColor) {
      result = result.filter((p) => p.color === selectedColor || (p.colors && p.colors.includes(selectedColor)));
    }

    // Filter by Price
    result = result.filter((p) => p.price <= priceRange);

    // Sorting
    if (sortBy === 'PRICE_LOW') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'PRICE_HIGH') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategories, selectedSize, selectedColor, priceRange, sortBy]);

  return (
    <div className="bg-background text-on-background min-h-screen">
      <main className="pt-32 pb-huge max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header & Breadcrumbs */}
        <RevealOnScroll>
          <section className="mb-xxl">
            <nav className="mb-4 flex gap-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              <Link className="hover:text-primary" to="/">Home</Link>
              <span>/</span>
              <span className="text-primary">Shop All</span>
            </nav>
            <h1 className="font-display-lg text-4xl md:text-6xl mb-4">Curated Essentials</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem]">
              A definitive collection of timeless silhouettes, crafted with uncompromising attention
              to detail and a commitment to architectural minimalism.
            </p>
          </section>
        </RevealOnScroll>

        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-6 border-b border-outline-variant/60 pb-4">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 font-label-md text-label-md text-primary border border-outline-variant px-4 py-2 hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-base">tune</span>
            FILTERS {(selectedCategories.length > 0 || selectedSize || selectedColor || priceRange < 2500) && `(active)`}
          </button>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {filteredProducts.length} ITEMS
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-gutter">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0 space-y-xl sticky top-32 h-fit">
            {/* Category */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider border-b border-outline-variant pb-2 font-semibold">
                CATEGORY
              </h3>
              <ul className="space-y-sm font-body-md text-body-md text-on-surface-variant">
                <li>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                    <input
                      type="checkbox"
                      checked={selectedCategories.length === 0}
                      onChange={() => setSelectedCategories([])}
                      className="w-4 h-4 text-primary rounded-sm border-outline-variant focus:ring-0 accent-primary"
                    />
                    All Items
                  </label>
                </li>
                {categoriesList.map((cat) => (
                  <li key={cat}>
                    <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                        className="w-4 h-4 text-primary rounded-sm border-outline-variant focus:ring-0 accent-primary"
                      />
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider border-b border-outline-variant pb-2 font-semibold">
                SIZE
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {sizesList.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`p-2 border text-center font-label-sm text-label-sm transition-all duration-200 cursor-pointer ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-on-primary font-bold'
                        : 'border-outline-variant hover:border-primary text-on-surface-variant'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider border-b border-outline-variant pb-2 font-semibold">
                COLOR
              </h3>
              <div className="flex flex-wrap gap-3">
                {colorsList.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
                    className={`w-6 h-6 rounded-full border border-outline-variant/30 ring-1 ring-offset-2 transition-all cursor-pointer ${
                      selectedColor === color.name ? 'ring-primary' : 'ring-transparent hover:ring-outline'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider border-b border-outline-variant pb-2 font-semibold">
                PRICE
              </h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-primary h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>$100</span>
                  <span className="font-semibold text-primary">UP TO ${priceRange.toLocaleString()}</span>
                  <span>$2,500</span>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            {(selectedCategories.length > 0 || selectedSize || selectedColor || priceRange < 2500) && (
              <button
                onClick={resetFilters}
                className="w-full py-2.5 border border-primary/40 text-primary font-label-md text-label-md uppercase tracking-wider hover:border-primary transition-colors cursor-pointer"
              >
                RESET FILTERS
              </button>
            )}
          </aside>

          {/* Product Grid Container */}
          <div className="flex-1">
            {/* Sorting & View Options */}
            <div className="flex justify-between items-center mb-xl border-b border-outline-variant pb-4">
              <span className="font-label-sm text-label-sm text-on-surface-variant select-none">
                SHOWING {filteredProducts.length} OF 142 ITEMS
              </span>
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div className="flex items-center gap-1 font-label-md text-label-md text-primary cursor-pointer select-none">
                    <span>
                      SORT BY: {sortBy === 'FEATURED' ? 'FEATURED' : sortBy === 'PRICE_LOW' ? 'PRICE: LOW TO HIGH' : 'PRICE: HIGH TO LOW'}
                    </span>
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-surface border border-outline-variant shadow-lg py-2 hidden group-hover:block z-20">
                    <button
                      onClick={() => setSortBy('FEATURED')}
                      className="w-full text-left px-4 py-2 text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
                    >
                      FEATURED
                    </button>
                    <button
                      onClick={() => setSortBy('PRICE_LOW')}
                      className="w-full text-left px-4 py-2 text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
                    >
                      PRICE: LOW TO HIGH
                    </button>
                    <button
                      onClick={() => setSortBy('PRICE_HIGH')}
                      className="w-full text-left px-4 py-2 text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
                    >
                      PRICE: HIGH TO LOW
                    </button>
                  </div>
                </div>
                <div className="hidden md:flex gap-2">
                  <button className="text-primary opacity-40 hover:opacity-100">
                    <span className="material-symbols-outlined">grid_view</span>
                  </button>
                  <button className="text-primary">
                    <span className="material-symbols-outlined">view_module</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Grid */}
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-4">
                <span className="material-symbols-outlined text-4xl text-outline/50">search_off</span>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  No silhouettes match your current criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-block bg-primary text-white font-label-md text-label-md px-6 py-3 hover:opacity-95 transition-opacity"
                >
                  RESET FILTERS
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-xxl">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-huge border-t border-outline-variant pt-xl flex justify-between items-center">
              <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary flex items-center gap-2 cursor-pointer">
                <span className="material-symbols-outlined">arrow_back</span> PREVIOUS
              </button>
              <div className="flex gap-6 md:gap-8 font-label-md text-label-md text-on-surface-variant">
                <span className="text-primary border-b border-primary cursor-default">1</span>
                <span className="hover:text-primary cursor-pointer">2</span>
                <span className="hover:text-primary cursor-pointer">3</span>
                <span>...</span>
                <span className="hover:text-primary cursor-pointer">12</span>
              </div>
              <button className="font-label-md text-label-md text-primary hover:opacity-70 flex items-center gap-2 cursor-pointer">
                NEXT <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Filter Slide-out Drawer */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-500 ${
          isMobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={() => setIsMobileFilterOpen(false)}
          className="absolute inset-0 bg-primary/20 backdrop-blur-xs"
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-surface p-6 shadow-2xl flex flex-col justify-between transition-transform duration-500 ease-out ${
            isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex-1 overflow-y-auto no-scrollbar space-y-8">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <span className="font-label-md text-label-md text-primary font-semibold uppercase">FILTERS</span>
              <button onClick={() => setIsMobileFilterOpen(false)} className="text-primary">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Category */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider">CATEGORY</h3>
              <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                <li>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedCategories.length === 0}
                      onChange={() => setSelectedCategories([])}
                      className="w-4 h-4 text-primary rounded-sm accent-primary"
                    />
                    All Items
                  </label>
                </li>
                {categoriesList.map((cat) => (
                  <li key={cat}>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryChange(cat)}
                        className="w-4 h-4 text-primary rounded-sm accent-primary"
                      />
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider">SIZE</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizesList.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                    className={`py-2 border text-center font-label-sm text-label-sm transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline-variant text-on-surface-variant'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider">COLOR</h3>
              <div className="flex flex-wrap gap-3">
                {colorsList.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(selectedColor === color.name ? null : color.name)}
                    className={`w-6 h-6 rounded-full border border-outline-variant/30 ring-1 ring-offset-2 ${
                      selectedColor === color.name ? 'ring-primary' : 'ring-transparent'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-label-md text-label-md text-primary mb-md tracking-wider">PRICE</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-primary h-1 bg-surface-container-high rounded-lg appearance-none"
                />
                <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>$100</span>
                  <span className="font-semibold text-primary">${priceRange}</span>
                  <span>$2,500</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-outline-variant pt-4 flex gap-4">
            <button
              onClick={() => {
                resetFilters();
                setIsMobileFilterOpen(false);
              }}
              className="flex-1 py-3 border border-outline-variant text-on-surface-variant font-label-md text-label-md uppercase"
            >
              CLEAR
            </button>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="flex-1 py-3 bg-primary text-white font-label-md text-label-md uppercase"
            >
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
