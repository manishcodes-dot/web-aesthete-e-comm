import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    // Navigate to product detail page
    navigate(`/product/${product.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation(); // Prevent navigating to detail page
    addToCart(product, product.color, product.sizes ? product.sizes[0] : null);
  };

  return (
    <div
      onClick={handleCardClick}
      className="product-card group cursor-pointer transition-soft"
    >
      <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-md relative">
        {/* Background Image Zoom Effect */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
          style={{ backgroundImage: `url('${product.image}')` }}
          aria-label={product.name}
        />

        {/* Badge if available */}
        {product.badge && (
          <span className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-[10px] px-2 py-1 tracking-tighter select-none">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white backdrop-blur p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 flex items-center justify-center rounded-sm"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <span className="material-symbols-outlined text-primary text-base">add</span>
        </button>
      </div>

      <div className="space-y-1">
        <h4 className="font-body-md text-body-md text-primary font-medium group-hover:text-secondary transition-colors duration-300">
          {product.name}
        </h4>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          {product.color} {product.material ? `/ ${product.material}` : ''}
        </p>
        <p className="font-label-md text-label-md text-primary pt-1 font-semibold">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
