
import Navbar from './Components/Navbar';

import Intro from './Components/Intro';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import "./App.css"
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import { useContext } from 'react';
import { themeContext } from './Context';
import { Route,Routes } from 'react-router-dom';
function App() {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Intro/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/testimonial' element={<Testimonial/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
     
      
      <Footer/>
    </div>
   
  );
}

export default App;
