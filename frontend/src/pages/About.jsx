const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black mb-6">About Tech Gadgets</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Welcome to Tech Gadgets. We are passionate about curating the most premium, high-performance technology accessories and devices for the modern lifestyle. Our mission is to bridge the gap between elegant design and cutting-edge functionality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-2">Premium Quality</h3>
            <p className="text-gray-500 text-sm">Carefully selected materials and uncompromising build standards.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-2">Fast Global Shipping</h3>
            <p className="text-gray-500 text-sm">Fast, fully insured delivery straight to your doorstep.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm">Our expert team is always here to assist you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
