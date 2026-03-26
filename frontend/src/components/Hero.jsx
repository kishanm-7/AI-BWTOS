import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Gradient / Shape */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-6 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          Upgrade Your <br className="hidden md:block" /> Tech Lifestyle
        </h1>
        <p className="text-lg md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          Experience the finest collection of premium gadgets designed to elevate your everyday.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <Link to="/shop" className="bg-foreground text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/about" className="bg-gray-50 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
            Learn More
          </Link>
        </div>
      </div>

      {/* Abstract Hardware Mockup representation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[80%] max-w-5xl h-64 md:h-96 bg-gray-100 rounded-t-[3rem] border border-gray-200 shadow-2xl z-0 clip-path-slant flex justify-center items-start pt-8 overflow-hidden">
         <img src="/images/7.jpeg" alt="Premium Tech" className="w-full h-full object-cover opacity-90" />
      </div>
    </section>
  );
};

export default Hero;
