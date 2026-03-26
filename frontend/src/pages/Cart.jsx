import { ArrowLeft, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <h1 className="text-4xl font-bold tracking-tight text-black mb-12">Shopping Bag</h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500 mb-8">Your bag is empty.</p>
          <Link to="/shop" className="bg-foreground text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <div className="hidden sm:grid grid-cols-6 border-b border-gray-200 pb-4 text-sm font-medium text-gray-500 uppercase tracking-wide">
              <div className="col-span-3">Product</div>
              <div className="text-center">Quantity</div>
              <div className="text-right col-span-2">Total</div>
            </div>
            
            {cart.map(item => (
              <div key={item._id} className="grid grid-cols-1 sm:grid-cols-6 items-center gap-4 py-6 border-b border-gray-100 relative">
                <div className="col-span-3 flex items-center">
                  <img src={item.images?.[0] || item.image || '/images/1.jpeg'} alt={item.name} className="w-24 h-24 bg-gray-100 rounded-2xl mr-6 flex-shrink-0 object-cover" />
                  <div>
                    <h3 className="font-semibold text-lg text-black">{item.name}</h3>
                    <p className="text-gray-500">${item.price - (item.price * ((item.discount || 0) / 100))}</p>
                  </div>
                </div>
                
                <div className="flex justify-center mt-4 sm:mt-0">
                  <div className="flex items-center border border-gray-200 rounded-full bg-white px-4 py-2">
                    <button onClick={() => updateQuantity(item._id, -1)} className="text-gray-500 hover:text-black focus:outline-none p-1">-</button>
                    <span className="mx-4 font-medium px-2">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item._id, 1)} className="text-gray-500 hover:text-black focus:outline-none p-1">+</button>
                  </div>
                </div>

                <div className="col-span-2 flex items-center justify-between sm:justify-end mt-4 sm:mt-0 font-semibold text-lg">
                  <div className="sm:hidden text-gray-500 font-normal">Total:</div>
                  ${(item.price - (item.price * ((item.discount || 0) / 100))) * item.quantity}
                  <button onClick={() => removeFromCart(item._id)} className="ml-6 text-gray-400 hover:text-red-500 transition-colors p-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <Link to="/shop" className="inline-flex items-center text-blue-600 font-medium hover:underline mt-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
            </Link>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-3xl p-8 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-black">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Tax</span>
                <span className="font-medium text-black">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-bold text-xl">Total</span>
                <span className="font-bold text-3xl tracking-tight text-black">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
