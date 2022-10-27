import 'boxicons';

import ErrorSection from './sections/ErrorSection';
import QR_Card from './sections/QR_Card';
import Stats_Card from './sections/Stats_Card';
import NFT_Card from './sections/NFT_Card';
import Product_Card from './sections/Product_Card';
import Navbar from './componentes/Navbar';
import Home from './sections/Home';
import PiedePagina from './sections/PiedePagina';
import { Routes,Route } from 'react-router-dom';
function App() {

  return (
  <div className='App'>
    <header>
      <Navbar/>
    </header>
    <main className='flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='QRCard' element={<QR_Card/>}/>
        <Route path='NFTCard' element={<NFT_Card/>}/>
        <Route path='ProductCard' element={<Product_Card/>}/>
        <Route path='StatsCard' element={<Stats_Card/>}/>
        <Route path='*' element={<ErrorSection/>}/>
      </Routes>
    </main>
    <footer>
      <PiedePagina/>
    </footer>
  </div>
   
  )
}

export default App
