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
import Navbar from "./components/routing/Navbar";
import React, { Suspense } from "react";
import NotFound from "./components/NotFounds";
import NavigationBar from "./components/NavigationBar";

const Products = React.lazy(() => import("./components/ProductsF"));
const ProductDetails = React.lazy(() => import("./components/ProductsDetails"));
const NewProduct  =  React.lazy(() => import("./components/routing/newproduct"));

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
          <Route path="list" element={<Products />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path=":name" element={<ProductDetails />} />
        </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    </div>
  );
}

export default App;
