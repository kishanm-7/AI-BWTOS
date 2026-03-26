import { Link } from 'react-router-dom';

const categories = [
  { name: 'Smartphones', image: '/images/2.jpeg', path: '/shop?category=Smartphones' },
  { name: 'Laptops', image: '/images/5.jpeg', path: '/shop?category=Laptops' },
  { name: 'Headphones', image: '/images/1.jpeg', path: '/shop?category=Headphones' },
  { name: 'Smart Home', image: '/images/4.jpeg', path: '/shop?category=Smart Home' },
  { name: 'Accessories', image: '/images/6.jpeg', path: '/shop?category=Accessories' },
];

const Categories = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Explore Categories</h2>
          <p className="mt-4 text-gray-600 font-light text-lg">Curated collections for every lifestyle.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              to={cat.path}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex items-end p-6"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <h3 className="relative font-bold text-white text-xl tracking-wide uppercase z-10">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
