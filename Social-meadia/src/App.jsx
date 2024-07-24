import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import FAQs from './components/FAQs/FAQs';
import About from './components/About/About';
const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/feature' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
