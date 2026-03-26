import { Search, ShoppingBag, User, LogOut } from 'lucide-react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext);

  // Note: Handle scroll in App or parent to toggle `isScrolled`
  // For simplicity, sticking to simple sticky Nav

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md border-b 
      ${isScrolled ? 'bg-white/70 border-gray-200' : 'bg-white/90 border-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1 group">
              <span className="text-black">PREMIUM</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black">RESELLERS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Shop</Link>
            <Link to="/about" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-800 hover:text-black transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-800 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/cart" className="text-gray-800 hover:text-black transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            {user ? (
              <button onClick={logout} className="text-gray-800 hover:text-red-500 transition-colors flex items-center gap-1">
                <LogOut className="w-5 h-5" />
              </button>
            ) : (
              <Link to="/login" className="text-gray-800 hover:text-black transition-colors">
                <User className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
