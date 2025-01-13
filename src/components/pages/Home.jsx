import React, { useState, useEffect } from "react";
import "../../css/pages/home.css";
import ProductCard from "../products/Products";
import { products } from "../../data/productos";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Colores para el carrusel
  const colors = ["rgb(80, 164, 164)", "rgb(101, 211, 174)", "rgb(188, 235, 219)"];


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  // Cambiar al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
  };

  // Cambiar slide automáticamente
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Convierte los productos a un arreglo plano
  const allProducts = Object.values(products).flat();
  const destacados = allProducts.filter((product) => product.destacado);
  const ofertas = allProducts.filter((product) => product.promocion);

  return (
    <div className="home-container">
      <div className="something-div">
        <div className="something">
          <div
            className="carousel"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {colors.map((color, index) => (
              <div
                className="carousel-item"
                key={index}
                style={{ backgroundColor: color }}
              >
                <h2>{index + 1}</h2>
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
        <li>Ofertas</li>
        <hr className="hr" />
        <div className="product-items">
        <Swiper
  modules={[Navigation, Pagination, Autoplay]} 
  spaceBetween={20}
  slidesPerView={3}
  navigation 
  // pagination={{ clickable: true }} 
  autoplay={{ delay: 1500 }} 
  loop
>
  {ofertas.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCard product={product} />
    </SwiperSlide>
  ))}
</Swiper>
        </div>
      </section>

      <section className="section">
        <li>Destacados</li>
        <hr className="hr" />
        <div className="product-items">
          {destacados.length > 0 ? (
            <Swiper
  modules={[Navigation, Pagination, Autoplay]} // Add Navigation here
  spaceBetween={20}
  slidesPerView={3}
  navigation 
  // pagination={{ clickable: true }} 
  autoplay={{ delay: 3000 }} // Enables autoplay
  loop
>
  {ofertas.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCard product={product} />
    </SwiperSlide>
  ))}
</Swiper>
          ) : (
            <p>No hay productos destacados en este momento.</p>
          )}
        </div>
      </section>

      <section className="special-section">
        <div className="div-img">
          <img src="/img/home/casa.png" alt="Logotipo de cambios Mirrow" />
          <img src="/img/home/cuotas.png" alt="Logotipo de cuotas Mirrow para e-commerce" />
          <img src="/img/home/envios.png" alt="Logotipo para envíos gratis Mirrow" />
        </div>
      </section>

   

      <section className="section">
        <li>Encontranos en...</li>
        <div className="div-hr">
          <hr className="hr" />
        </div>
        <div className="div-map">
          {/* Aquí iría el componente Map */}
        </div>
      </section>
    </div>
  );
};

export default Home;
