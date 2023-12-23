import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import './Styles/Home.css';
// import './Styles/Login.css';
// import './Styles/Signup.css';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import Landinpage from './component/Landinpage';

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landinpage />} ></Route>
        <Route path="/login" element={<Signup />} ></Route>
        <Route path="/Signup" element={<Login />} ></Route>
        <Route path="/Home" element={<Home />} ></Route>
      </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
    
  );
}

export default App;