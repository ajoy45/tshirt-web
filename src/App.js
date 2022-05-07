import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Order from './Components/Order/Order';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path="/"element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about'element={<About></About>}></Route>
            <Route path='/order' element={<Order></Order>}></Route>
        </Routes>
       
    </div>
  );
}

export default App;
