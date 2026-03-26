import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'

import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'react-hot-toast'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="font-sans min-h-screen text-foreground custom-scrollbar selection:bg-[#E8DFC8]">
            <Toaster position="top-center" toastOptions={{ className: 'glass text-sm font-medium border-gray-200 shadow-xl' }} />
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
