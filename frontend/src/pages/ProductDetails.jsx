import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Loader2, Star } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';
        const res = await fetch(`${baseUrl}/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Failed to fetch product', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-12 h-12 animate-spin text-gray-400" /></div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center text-2xl">Product not found.</div>;

  return (
    <div className="bg-white min-h-screen pt-8">
      {/* Sticky Product Nav */}
      <div className="border-b border-gray-200 sticky top-16 bg-white/90 backdrop-blur z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <h2 className="font-semibold text-lg">{product.name}</h2>
          <div className="flex items-center space-x-6">
            <a href="#overview" className="text-sm cursor-pointer hover:text-black">Overview</a>
            <a href="#specs" className="text-sm cursor-pointer hover:text-black">Tech Specs</a>
            <div className="text-xl font-bold">${product.price - (product.price * ((product.discount || 0) / 100))}</div>
            <button 
              onClick={() => addToCart(product)}
              className="bg-black hover:bg-gray-800 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images Gallery */}
          <div className="space-y-6 relative">
            <div className="bg-gray-50 rounded-[2.5rem] p-12 aspect-square flex items-center justify-center">
              {/* Main Image */}
              <img src={product.images?.[0] || product.image || '/images/1.jpeg'} alt={product.name} className="w-full max-w-sm rounded-3xl shadow-2xl object-cover mix-blend-multiply" />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-500 font-semibold tracking-wider uppercase text-sm mb-4">{product.brand}</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-500 mb-8 font-light leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-end gap-4 mb-8">
              <div className="text-4xl font-bold">${product.price - (product.price * ((product.discount || 0) / 100))}</div>
              {product.discount > 0 && <div className="text-xl text-gray-400 line-through mb-1">${product.price}</div>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-gray-100 pb-12">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-black text-white px-8 py-5 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-black/10 shadow-lg text-lg flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-6 h-6" /> Add to Bag
              </button>
              <button className="bg-gray-50 text-black px-8 py-5 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1"><Truck /></div>
                <div>
                  <h4 className="font-bold">Free Delivery</h4>
                  <p className="text-sm text-gray-500 mt-1">Order by 5pm for next working day delivery.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1"><RotateCcw /></div>
                <div>
                  <h4 className="font-bold">Free Returns</h4>
                  <p className="text-sm text-gray-500 mt-1">Return within 14 days for a full refund.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-1"><ShieldCheck /></div>
                <div>
                  <h4 className="font-bold">2 Year Warranty</h4>
                  <p className="text-sm text-gray-500 mt-1">Coverage against manufacturing defects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Specs */}
        {product.specs && (
          <div id="specs" className="mt-32">
            <h2 className="text-3xl font-bold mb-12 text-center text-black pb-8">Tech Specs</h2>
            <div className="max-w-3xl mx-auto bg-gray-50/50 rounded-3xl p-8">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div key={i} className="flex justify-between py-4 border-b border-gray-200 last:border-0">
                  <span className="font-semibold text-gray-600 capitalize">{key}</span>
                  <span className="text-black">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
