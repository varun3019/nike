import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart } from './Components/Cart'
import { Home } from './Components/Home'


const App = () => (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/cart/:id' element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

export default App