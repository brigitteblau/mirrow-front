import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Map from "../layout/Map";
import "../../css/pages/home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const colors = [
   ' rgb(80, 164, 164)', 
    'rgb(101, 211, 174)', 
    'rgb(188, 235, 219)'  
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + colors.length) % colors.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="something-div">
        <div className="something">
          <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {colors.map((color, index) => (
             <div className="carousel-item" key={index} style={{ backgroundColor: color }}>
             <h2> {index + 1}</h2> 
           </div>
           
            ))}
          </div>
          <button className="carousel-control-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-control-next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
          
      <section className="section">
        <li> Ofertas </li>
        <hr className="hr"/>
      </section>
      
      <section className="section">
        <li> Destacado </li>
        <div className="div-hr">
          <hr className="hr"/>
        </div>
      </section>

      <section className="special-section">
        <div className="div-img">
          <img src="/img/home/casa.png" alt="logotipo de cambios mirrow" />
          <img src="/img/home/cuotas.png" alt="logotipo de cuotas mirrow para eccomerce" />
          <img src="/img/home/envios.png" alt="logotipo para envios gratis mirrow" />
        </div>
      </section>

      <section className="section">
        <li>Cataogo</li>
        <div className="div-hr">
          <hr className="hr" />
        </div>
      </section>

      <section className="section">
        <li> Encontranos en...</li>
        <div className="div-hr">
          <hr className="hr"/>
        </div>
        <div className="div-map"> 
          {/* <Map/> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
