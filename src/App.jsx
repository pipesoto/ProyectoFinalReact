
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Navbarr from './Components/NavBar/NavBar'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import CardWidget from './Components/CartWidget/CardWidget';
import Error from './Components/Category/Error';


function App() {
  return (

      <div>
        <BrowserRouter>
        <Navbarr />

        <Routes>
          <Route path='/' element={  <ItemListContainer  /> }></Route>
          <Route path='/category/:id' element={  <ItemListContainer  /> }></Route>
          <Route path='/item/:id' element={  <ItemDetailContainer  /> }></Route>
          <Route path='/cart' element={  <CardWidget /> }></Route>
          <Route path='/*' element={   <Error /> }></Route>
        </Routes>
       </BrowserRouter>
      </div>
     
  )
}


export default App
