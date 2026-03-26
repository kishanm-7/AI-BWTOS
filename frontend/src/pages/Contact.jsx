const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Have a question or need assistance? Our support team is ready to help. Fill out the form below or reach out directly.
        </p>
        
        <form className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black" placeholder="How can we help you?"></textarea>
          </div>
          <button type="button" className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
