
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Navbarr from './Components/NavBar/NavBar'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart.jsx';
import Error from './Components/Category/Error';
import CartProvider from './Components/Context/CartContext';
import { CheckOut } from './Components/Checkout/CheckOut';


function App() {
  return (

      <div>
        <BrowserRouter>
        <CartProvider>
        <Navbarr />

        <Routes>
          <Route path='/' element={  <ItemListContainer  /> }></Route>
          <Route path='/category/:id' element={  <ItemListContainer  /> }></Route>
          <Route path='/item/:id' element={  <ItemDetailContainer  /> }></Route>
          <Route path='/cart' element={ <Cart /> }></Route>
          <Route path='/checkout' element={  <CheckOut /> }></Route>
          <Route path='*' element={ <Error /> }></Route>
        </Routes>
        </CartProvider>
       </BrowserRouter>
      </div>
     
  );
}


export default App
