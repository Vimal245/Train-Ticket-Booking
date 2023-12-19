import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import './Styles/Home.css';
// import './Styles/Login.css';
// import './Styles/Signup.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} ></Route>
        <Route path="/Signup" element={<Login />} ></Route>
        <Route path="/Home" element={<Home />} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
