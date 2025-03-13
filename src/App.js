import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Store from './pages/Store';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/Home" element={<Home/>} />
         <Route path="/Store" element={<Store/>} />
         <Route path="/Store" element={<Store/>} />
       </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
