import React from "react";
import "../../css/pages/guide.css";

const items = [
  { id: "short-bano", label: "Short de baño", imgSrc: "img/guia-de-talles/baño.jpg", alt: "Tabla de talles baño" },
  { id: "remeras", label: "Remeras", imgSrc: "img/guia-de-talles/remera.jpg", alt: "Guía de talles remera" },
  { id: "jeans-chupin", label: "Jeans Chupin", imgSrc: "img/guia-de-talles/jean-chupin.jpg", alt: "Tabla de talles jeans chupin" },
  { id: "hawaiian-shirts", label: "Camisas hawainas", imgSrc: "img/guia-de-talles/hawainas.jpg", alt: "Tabla de talles camisas hawainas" },
  { id: "bermudas-jogger", label: "Bermudas jogger y cargos", imgSrc: "img/guia-de-talles/bermudas-jogger-cargo.png", alt: "Tabla de talles bermudas jogger y cargos" },
  { id: "gabardina-pants", label: "Pantalones de gabardina", imgSrc: "img/guia-de-talles/gabardina.jpg", alt: "Tabla de talles pantalones de gabardina" },
];

const AccordionItem = ({ id, label, imgSrc, alt }) => {
  return (
    <div className="accordion-item">
      <input type="checkbox" id={id} />
      <label htmlFor={id} className="accordion-label">
        {label}
        <span className="icon">▼</span>
      </label>
      <div className="accordion-content">
        <img src={imgSrc} alt={alt} />
      </div>
    </div>
  );
};

const SizeGuide = () => {
  return (
    <main className="size-guide">
      <h1 className="title">GUIA DE TALLES</h1>

      <span className="span-guide"> haciendo click sobre algun acordion podras ver las medidas correspondientes, esperamos que le sean de gran ayuda!</span>
     
      <div className="accordion-container">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            label={item.label}
            imgSrc={item.imgSrc}
            alt={item.alt}
          />
        ))}
      </div>
    </main>
  );
};

export default SizeGuide;
