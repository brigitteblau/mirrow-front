import React from "react";
import { Link } from "react-router-dom";
import Map from "../layout/Map";
import "../../css/pages/home.css";
const Home = () => {
    return (
        <div className="home-container">
            <div className="something-div">
            <div className="something">
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
            <div className="div-img">
                <img src="/img/home/casa.png" alt="logotipo de cambios mirrow" />
                <img src="/img/home/cuotas.png" alt="logotipo de cuotas mirrow para eccomerce" />
                <img src="/img/home/envios.png" alt="logotipo para envios gratis mirrow" />
            </div>
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
            <Map/>
            </section>
            </div>
     
    );
    }

export default Home;
