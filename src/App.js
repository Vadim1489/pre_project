import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './componets/Header';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import ModalWindow from './componets/ModalWindow';
import { useState } from 'react';
import { Context } from './context';
import { useDispatch } from 'react-redux';
import { clearCartAction } from './store/reducers/cartReducer';

function App() {

  const dispatch = useDispatch();

  const [ modalActive, setModalActive ] = useState(false);
  const [ menuActive, setMenulActive ] = useState(false);

  const closeModalWindow = () =>{
    setModalActive(false)
    dispatch(clearCartAction())
  };
  const openModalWindow = () => setModalActive(true);

  const openMenu = () => setMenulActive(true);
  const closeMenu = () => setMenulActive(false);


  return (
    <div>
      <Context.Provider value={{closeModalWindow, openModalWindow, modalActive, openMenu, closeMenu, menuActive }}>
        <ModalWindow />
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/all_products' element={<AllProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/categories/:category_name' element={<ProductsByCategoryPage />} />
          <Route path='/products/:product_id' element={<SingleProductPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
