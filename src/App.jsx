import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {

  useEffect(() => {
    alert('This website is currently not compatible with mobile devices.');
  }, []);
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
