import React from "react";
import { Link } from "react-router-dom";
import Map from "../layout/Map";

const Home = () => {
    return (
        <div className="home-container">
            <div className="something">
            </div>
          
            <section className="section">
                <li> Ofertas </li>
                <hr/>
            </section>
            <section className="section">
            <li> Destacado </li>
            <hr/>
            </section>
            <div className="div-img">
                <img src="/img/home/casa.png" alt="logotipo de cambios mirrow" />
                <img src="/img/home/cuotas.png" alt="logotipo de cuotas mirrow para eccomerce" />
                <img src="/img/home/envios.png" alt="logotipo para envios gratis mirrow" />
            </div>
            <section className="section">
            <li> Cataogo </li>
            <hr/>
            </section>
            <section className="section">
            <li> Encontranos en...</li>
            <hr/>
            <Map/>
            </section>
            </div>
     
    );
    }

export default Home;
