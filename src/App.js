import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/en/Login';
import Home from './pages/en/Home';
import General from './pages/General';
import LoginFormEs from './components/en/LoginFormEs';
import HomeEs from './pages/es/HomeEs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<Navigate to="/en" replace />} />
         <Route path="/en" element={<Login/>} />
         <Route path="/en/Home" element={<Home/>} />
         <Route path="/en/Store" element={<General titulo={"Store"}/>}/>
         <Route path="/en/Menu" element={<General titulo={"Menu"}/>} />
         <Route path="/en/Cart" element={<General titulo={"Cart"}/>} />
         <Route path="/es" element={<LoginFormEs/>} />
         <Route path="/es/Home" element={<HomeEs/>} />
         <Route path="/es/Store" element={<General titulo={"Tienda"}/>}/>
         <Route path="/es/Menu" element={<General titulo={"Menu"}/>} />
         <Route path="/es/Cart" element={<General titulo={"carrito"}/>} />
       </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
