const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tighter flex items-center gap-1 mb-4">
              <span className="text-black">PREMIUM</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-black">RESELLERS</span>
            </h3>
            <p className="text-gray-500 max-w-xs">
              Premium tech electronics for the modern lifestyle. Upgrade your world.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Smartphones</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Laptops</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Wearables</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Audio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Premium Resellers. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
