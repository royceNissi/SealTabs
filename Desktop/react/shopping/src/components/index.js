import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import Products from './Products';
import Cart from './Cart';
import ShopContextProvider from './ShopContext';
export default function Index(){
    return(
      <div>
        <ShopContextProvider>
          <Router>
            <Menu/>
            <Routes>
              <Route path='/' element={<Products />}/>
              <Route path = '/cart'element={<Cart />}/>
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    )
}