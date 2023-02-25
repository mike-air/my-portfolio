import React from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";
import Portfolio from './components/Portfolio/Portfolio'
import Service from "./components/Service/Service";
import About from "./components/About/About";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
