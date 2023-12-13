import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} ></Route>
        <Route path="/Signup" element={<Login />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
