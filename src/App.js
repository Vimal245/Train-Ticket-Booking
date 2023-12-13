// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';

const App=()=> {
  return (
    <div>
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}

export default App;
