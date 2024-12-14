import React from 'react';
import './index.css';
import Header from './component/header/Header.jsx';
import Nav from './component/nav/Nav.jsx';
import About from './component/about/About.jsx';
import Experince from './component/experience/Experince.jsx';
import Services from './component/services/Services.jsx';
import Portofolio from './component/portofolio/Portofolio.jsx';
import Testimonials from './component/testimonials/Testimonials.jsx';
import Contact from './component/contact/Contact.jsx';
import Footer from './component/footer/Footer.jsx';
const App = () => {


  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experince />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  ) 
}

export default App;