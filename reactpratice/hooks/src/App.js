
import Home from "./pages/home";
import User from "./pages/user";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Userid from "./components/userid";
import Login from "./components/login";
import Dashborad from "./components/dashborad";


function App() {

  return (
   
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/user" element={<User/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/user id/:id" element={<Userid/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/dashboard" element={<Dashborad/>}></Route>
  
  
 </Routes>
 </BrowserRouter>



  );
}

export default App;
