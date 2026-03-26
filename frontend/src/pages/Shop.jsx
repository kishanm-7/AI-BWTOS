import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, Loader2 } from 'lucide-react';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Smartphones', 'Laptops', 'Headphones', 'Smart Home', 'Accessories'];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';
        let url = `${baseUrl}/api/products`;
        if (filter !== 'All') {
          url += `?category=${filter}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        console.log(`[DEBUG] Fetched products for category (${filter}):`, data);
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('[ERROR] Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-black mb-4 md:mb-0">Shop All</h1>
        
        <div className="flex items-center space-x-4 overflow-x-auto pb-2 w-full md:w-auto">
          <Filter className="w-5 h-5 text-gray-400 mr-2 shrink-0" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                filter === cat ? 'bg-foreground text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-12 h-12 animate-spin text-gray-400" />
        </div>
      ) : (Array.isArray(products) && products.length > 0) ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[50vh] bg-white rounded-[2.5rem] border border-gray-100 shadow-sm mt-8 p-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">No Products Found</h2>
          <p className="text-gray-500 text-lg max-w-md">We couldn't find any products in this category right now. Please try checking back later or clearing your filters.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
