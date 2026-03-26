import { Heart, ShoppingCart, GitCompare, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{product.discount}%
        </div>
      )}

      {/* Hover Overlay Actions */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
        <button className="bg-white/80 backdrop-blur p-2 rounded-full text-black hover:bg-white hover:text-red-500 shadow-sm transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <button className="bg-white/80 backdrop-blur p-2 rounded-full text-black hover:bg-white hover:text-blue-600 shadow-sm transition-colors">
          <GitCompare className="w-5 h-5" />
        </button>
      </div>

      <Link to={`/product/${product._id}`} className="block relative h-64 mb-4 rounded-2xl overflow-hidden flex items-center justify-center p-4">
        <img src={product.images?.[0] || product.image || '/images/1.jpeg'} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
      </Link>
      
      <div className="text-left px-2">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{product.category}</p>
          {product.ratings && (
            <div className="flex items-center text-xs text-gray-700 font-semibold gap-1">
              <Star className="w-3 h-3 fill-current text-yellow-500" /> {product.ratings.average}
            </div>
          )}
        </div>
        <Link to={`/product/${product._id}`}>
          <h3 className="text-lg font-semibold text-black leading-tight hover:text-gray-600 transition-colors line-clamp-1">{product.name}</h3>
        </Link>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-black">${product.price - (product.price * ((product.discount || 0) / 100))}</span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">${product.price}</span>
            )}
          </div>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors group-hover:scale-110 duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
