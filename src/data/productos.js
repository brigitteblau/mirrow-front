// // src/data/productos.js
import studio from './studio.webp';
import studio2 from './studio2.webp';
import bud2 from './bud2.webp';
import chomba1 from './chomba1.webp';
import chomba2 from './chomba2.webp';
import buzop from './buzop.webp';
import buzop2 from './buzo2.webp';
import hawai from './hawai.webp';
import hawai2 from './hawai2.webp';
import hawai3 from './hawai3.webp';
import sweater from './sweater.webp';
import sweater2 from './sweater2.webp';
import sweater3 from './sweater3.webp';
import jean from './jean.webp';
import jean2 from './jean2.webp';
import jean3 from './jean3.webp';
import gabardina from './gabardina.webp';
import gabardina2 from './gabardina2.webp';
export const products = {
  remeras: [
    {
      id: 1,
      name: "Remera Studio",
      description: "Remera de algodón koala",
      price: 12200,
      images: [studio, studio2],
      stock: 1000,
      size: ["S", "M", "L", "XL"],
      typeId: 1,
      subTypeId: 101,
      fabric: "100% algodón",
      colors: ["#FC7D62", "#90FC62"],
      destacado: true,
    },
    {
      id: 2,
      name: "Remera Estampada Budweiser",
      description: "Remera con estampado exclusivo.",
      price: 600,
      images: [bud2,],
      stock: 5,
      size: ["S", "M", "L"],
      typeId: 1,
      subTypeId: 102,
      fabric: "Algodón y poliéster",
      colors: ["red", "darkgreen"],
      destacado: false, 
    },
  ],
  chombas: [
    {
      id: 3,
      name: "Chomba Slim Algodon Basic",
      description: "Chomba clásica de algodón peinado.",
      price: 700,
      images: [chomba1, chomba2],
      stock: 50,
      size: ["M", "L", "XL"],
      typeId: 2,
      subTypeId: 201,
      fabric: "Algodón peinado",
      colors: ["blue", "white"],
      destacado: true, 
    },
  ],
  buzos: [
    {
      id: 4,
      name: "Buzo Polar Clasic",
      description: "Buzo ideal para actividades al aire libre.",
      price: 1200,
      images: [buzop, buzop2],
      stock: 30,
      size: ["S", "M", "L", "XL"],
      typeId: 3,
      subTypeId: 301,
      fabric: "Algodón y poliéster",
      colors: ["black", "gray"],
      promocion: "20% de descuento",
    },
  ],
  camisasHawaianas: [
    {
      id: 5,
      name: "Camisa Hawaiana",
      description: "Camisa con estampado tropical.",
      price: 800,
      images: [hawai, hawai2, hawai3],
      stock: 20,
      size: ["M", "L", "XL"],
      typeId: 4,
      subTypeId: 401,
      fabric: "Viscosa",
      colors: ["yellow", "orange"],
      promocion: "10% de descuento",
    },
  ],
  sweaters: [
    {
      id: 6,
      name: "Sweater  Jacket",
      description: "Sweater ideal para el invierno.", 
      price: 1500,
      images: [sweater, sweater2, sweater3],
      stock: 15,
      size: ["M", "L"],
      typeId: 5,
      subTypeId: 501,
      fabric: "Lana 100%",
      colors: ["grey", "black", "lightgrey"],
      promocion: "Ultimos en stock!",
    },
  ],
  pantalones: [
    {
      id: 7,
      name: "Pantalon de gabardina Relaxed",
      description: "Bolsillos Amplios, Botamanga recta, maxima durabilidad, corte clasico",
      price: 50000,
      images: [gabardina, gabardina2],
      stock: 25,
      size: ["38", "40", "42", "44"],
      typeId: 6,
      subTypeId: 601,
      fabric: "Gabardina",
      colors: ["black", "blue", "lightblue", "grey"],
      promocion: true, 
    },
  ],
  jeans: [
    {
      id: 8,
      name: "Jean Clásico",
      description: "Bolsillos amplios, Botamanga recta, Costuras reforzadas, Materiales de 1era calidad",
      price: 1100,
      images: [jean, jean2, jean3],
      stock: 40,
      size: ["38", "40", "42", "44"],
      typeId: 7,
      subTypeId: 701,
      fabric: "Denim",
      colors: ["black", "blue", "lightblue", "grey"],
      promocion: true, 
    },
  ],
};

export async function fetchProducts() {
  try {
    const response = await fetch("https://mirrow-db.vercel.app/clothes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Datos obtenidos remotamente:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener productos remotos:", error);
    return null;
  }
}

export async function getProducts(remote = true) {
  if (remote) {
    const remoteData = await fetchProducts();
    if (remoteData && Array.isArray(remoteData)) {
      return { data: remoteData }; 
    }
  }

  console.warn("los datos de la api no son utiles, utilizamos los locales");
  return { data: Object.values(products).flat() }; // todo en una misma lista 
}
