import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
