
import Navbar from './Components/Navbar';

import Intro from './Components/Intro';
import Services from './Components/Services/Services';
import "./App.css"
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
