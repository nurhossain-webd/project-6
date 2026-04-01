
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import ProductsSection from './components/ProductsSection/ProductsSection'
import StatBelt from './components/statBelt/StatBelt'
import GetStarted from './components/getStartet/GetStarted'
import Pricing from './components/pricing/Pricing'
import ReadyBadge from './components/readyBadge/ReadyBadge'
import Footer from './components/footer /Footer'
import { ToastContainer, } from 'react-toastify';

const fetchData = fetch("/data.json")
  .then(res => res.json())


function App() {



  const [carts, setCarts] = useState([]);


  return (
    <>
      <Navbar carts={carts} />
      <Banner />
      <StatBelt />
      <ProductsSection fetchData={fetchData} carts={carts} setCarts={setCarts} />
      <GetStarted />
      <Pricing />
      <ReadyBadge />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
