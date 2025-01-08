import React from "react";
import html2PDF from "jspdf-html2canvas";
import "../../css/layout/generate.css";

const Generate = ({ targetRef }) => {
  const handleDownloadPDF = async () => {
    if (!targetRef?.current) {
      console.error("No se pudo encontrar el contenido a descargar.");
      return;
    }

    await html2PDF(targetRef.current, {
      jsPDF: {
        format: "a4",
        orientation: "portrait", // Cambia a "landscape" si prefieres horizontal
      },
      imageType: "image/jpeg",
      html2canvas: {
        scrollX: 0,
        scrollY: -window.scrollY, // Soluciona problemas de desplazamiento
      },
      output: "./carrito.pdf", // Nombre del archivo de salida
    });
  };

  return (
    <button onClick={handleDownloadPDF} className="button type1">
    <span className="btn-txt">descargar pedido</span>
    </button>
  );
};

export default Generate;
