
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import ProductsSection from './components/ProductsSection/ProductsSection'
import StatBelt from './components/statBelt/StatBelt'

function App() {

  const [carts, setCarts] = useState([]);


  return (
    <>
      <Navbar />
      <Banner />
      <StatBelt />
      <ProductsSection carts={carts} setCarts={setCarts} />
    </>
  )
}

export default App
