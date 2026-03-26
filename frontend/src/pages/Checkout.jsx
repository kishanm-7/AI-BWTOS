import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import { Loader2, ArrowRight } from 'lucide-react';

const Checkout = () => {
  const { user, token } = useContext(AuthContext);
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState({ street: '', city: '', postalCode: '', country: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      toast.error('Please log in to proceed to checkout.');
      navigate('/login');
    } else if (cart.length === 0) {
      navigate('/shop');
    }
  }, [user, cart.length, navigate]);

  if (!user || cart.length === 0) return null;

  const tax = cartTotal * 0.08;
  const totalAmount = cartTotal + tax;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      products: cart.map(item => ({ 
        product: item._id, 
        quantity: item.quantity, 
        price: item.price - (item.price * ((item.discount || 0) / 100))
      })),
      shippingAddress: address,
      paymentMethod: 'Credit Card', // Default for now
      totalAmount
    };

    try {
      const res = await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to place order');

      clearCart();
      toast.success('Order placed successfully! Thank you.');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <h1 className="text-4xl font-bold tracking-tight text-black mb-12">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={address.street}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder-gray-400 text-black"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder-gray-400 text-black"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder-gray-400 text-black"
              />
            </div>
            <div>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={address.country}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all placeholder-gray-400 text-black"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-black text-white px-8 py-5 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                <>Place Order <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>

        <div className="bg-gray-50 rounded-[2rem] p-10 h-fit">
          <h2 className="text-2xl font-semibold mb-8">Order Summary</h2>
          <div className="space-y-6 mb-8 border-b border-gray-200 pb-8">
            {cart.map(item => (
              <div key={item._id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.images?.[0] || item.image || '/images/1.jpeg'} alt={item.name} className="w-16 h-16 rounded-xl object-cover mix-blend-multiply" />
                  <div>
                    <p className="font-semibold text-black">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price - (item.price * ((item.discount || 0) / 100))) * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-gray-600 mb-8">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-black">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax (8%)</span>
              <span className="font-medium text-black">${tax.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end border-t border-gray-200 pt-6">
            <span className="text-lg font-bold text-black">Total</span>
            <span className="text-4xl font-bold tracking-tight text-black">${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
