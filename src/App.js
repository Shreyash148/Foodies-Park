import './App.css';
import Home from './Screens/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Myorders from './Screens/Myorders';
import { CartProvider } from './components/ContextReducer';
import Cart from './Screens/Cart';


function App() {
  return (
    <>
    <CartProvider>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Myorders' element={<Myorders/>}/>
        <Route exact path='/myCart' element={<Cart/>}/>
        <Route exact path='/api/createUser' element={<Signup/>}/>
        <Route exact path='/api/Login' element={<Login/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
