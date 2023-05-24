import logo from './logo.svg';
import './App.css';
import ProductsF from './components/ProductsF';
import Home from './components/routing/Home';
import Post from './components/routing/Post';
import Search from './components/routing/Search';
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  useParams,
} from 'react-router-dom'
import NewProduct from './components/routing/newproduct';
import ProductLayout from './components/routing/ProductLayout';
import About from './components/routing/About';
import Contact from './components/routing/Contact';
import Navbar from './components/routing/Navbar';
import React, { Suspense } from 'react';
const Products = React.lazy(()=> import('./components/ProductsF'))
function App() {
  const renderLoader = () => <p>Loading....</p>
  return (
    <div>
      {/* <ProductsF></ProductsF> */}
      <Navbar/>
      <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/post/:id/:slug' element={<Post />} />
        <Route path='/search' element={<Search />} />
        <Route path='/product' element={<ProductLayout />}>
 <Route index element={<Products />}/>
<Route path='newproduct' element={< NewProduct/>}/>
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
