import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Nav from "./nav/Nav";
import {lazy} from "react"
const Home= lazy(()=>import("./pages/Home"));
const Cart = lazy(()=>import("./pages/Cart"))

function App() {
  return (
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    
  );
}
export default App;
