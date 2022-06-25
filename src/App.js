
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
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
