
import Home from './compontes/home';
import './App.css';
import{BrowserRouter as Router,Routes,Route,Link}from "react-router-dom"
import Produts from './compontes/produts';
import Login from './compontes/login';
import ProductList from './compontes/productList';
import ProductDetails from './compontes/productDetails';
function App() {

 const user="Aarthick"

 


  return (
    <div >
      <Router>
      <ol>
        <li>  <Link to="/">Home</Link></li>
        <li>  <Link to="/produts">produts</Link></li>
        <li>  <Link to= {`/Login/${user}`}>login</Link></li>  
      </ol>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/produts" element={<Produts/>}>
          <Route index element={<ProductList/>}/>
          <Route path="list" element={<ProductList/>}/>
          <Route path="details" element={<ProductDetails/>}/>

          <Route/>
          </Route>
          <Route path="/Login/:user" element={<Login/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

