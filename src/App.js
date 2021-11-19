import { useEffect, useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts, getCategories } from "./store/shop-actions";
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import Cart from "./components/Cart/Cart";

function App() {

const [cartIsShow, setCartIsShown] = useState(false);
const dispatch = useDispatch();
const products = useSelector(state => state.product.cartItems);

useEffect(() => {
  dispatch(getAllProducts());
  dispatch(getCategories());
}, [dispatch]);

const showCartHandler = () => {
  setCartIsShown(true);
};

const hideCartHandler = () => {
  setCartIsShown(false);
};

return (
  <div >
    <Navbar expand bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Fake Shop
      </Navbar.Brand>
      <Button style={{right: '30px', position: 'absolute'}} onClick={() => showCartHandler()}>Your Cart: {products.length}</Button>
    </Navbar>
    
    {cartIsShow && <Cart onClose={hideCartHandler}/>}

    <Container>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Navigate replace to="/products" />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Container>
  </div>
);  
}
export default App;
