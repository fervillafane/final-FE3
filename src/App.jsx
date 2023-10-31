
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from './Routes/Contact';
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer";
import { ContextGlobal } from './Context/Context';
import { useContext } from 'react';

function App() {


  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;

  

  return (
      <div className={`app ${darkMode ? "dark" : "light"}`}>
          <Navbar/>
          <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/recipe/:id' element={<Detail/>}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/favs' element={<Favs/>}/>          
              </Routes>
            </main>
          <Footer/>
      </div>
  );
}

export default App;
