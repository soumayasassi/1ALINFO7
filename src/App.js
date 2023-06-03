import logo from "./logo.svg";
import "./App.css";
import ProductsF from "./components/ProductsF";
import Home from "./components/routing/Home";
import Post from "./components/routing/Post";
import Search from "./components/routing/Search";
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  useParams,
} from "react-router-dom";

import ProductLayout from "./components/routing/ProductLayout";
import About from "./components/routing/About";
import Contact from "./components/routing/Contact";
import React, { Suspense } from "react";
import NotFound from "./components/NotFounds";
import NavigationBar from "./components/NavigationBar";
import ProductDetailsC from "./consomation/ProductDetailsC"


 import AddProduct from "./consomation/AddProduct";
import NavigBar from "./consomation/NavigBar";
import UpdateProduct from "./consomation/UpdateProduct";
const ProductsC = React.lazy(()=> import('./consomation/ProductsC'))
const Navbar = React.lazy(()=> import('./components/routing/Navbar'))
//const ProductDetailsC = React.lazy(()=> import('./consomation/ProductDetailsC'))
function App() {
  const renderLoader = () => <p>Loading....</p>;
  return (
    <div>
      {/* <ProductsF></ProductsF> */}
      <NavigationBar />
      <Suspense fallback={renderLoader()}>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id/:slug" element={<Post />} />
          

          <Route path="/products">
          <Route path="list" element={<ProductsC />} />
          <Route path="new" element={<AddProduct />} />
          <Route path="update/:id" element={<UpdateProduct />} />
          <Route path=":id/:like" element={<ProductDetailsC />} />
        </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense> 
        
    </div>
  );
}

export default App;
