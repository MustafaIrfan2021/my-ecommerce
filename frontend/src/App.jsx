import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import PolicyPage from './pages/PolicyPage' // Naya Page Component

const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <NavBar />
      <SearchBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />

        {/* --- Verifone/Payoneer Mandatory Routes --- */}
        <Route path='/privacy-policy' element={
          <PolicyPage 
            title="Privacy Policy" 
            content="At Trendify, your privacy is our priority. We collect only necessary information like your name, shipping address, and email to process your leather jacket orders. Your payment details are processed through secure, encrypted gateways (Verifone/Payoneer) and are never stored on our servers. We do not sell or share your data with third parties for marketing purposes." 
          />} 
        />

        <Route path='/return-policy' element={
          <PolicyPage 
            title="Return & Refund Policy" 
            content="We want you to love your jacket! We offer a 14-day return and exchange policy from the date of delivery. If the jacket doesn't fit or has a manufacturing defect, please contact us for a return authorization. Once the item is received in its original condition, a full refund will be processed via Verifone/Payoneer to your original payment method within 5-7 business days." 
          />} 
        />

        <Route path='/terms' element={
          <PolicyPage 
            title="Terms & Conditions" 
            content="By placing an order on Trendify, you agree to our terms. All products are high-quality leather goods. Prices are listed in USD and exclude any local import duties or taxes applicable in your country. We reserve the right to cancel orders in case of suspected fraud or incorrect pricing. Your order will be shipped within 2-3 business days of payment confirmation." 
          />} 
        />

        <Route path='/shipping' element={
          <PolicyPage 
            title="Shipping Policy" 
            content="We provide worldwide shipping via DHL, FedEx, and UPS. Most orders reach the USA, UK, and Europe within 7-12 business days. A tracking number will be provided as soon as your leather jacket is dispatched. Please note that shipping times may vary slightly during peak seasons or due to customs clearance in your country." 
          />} 
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App