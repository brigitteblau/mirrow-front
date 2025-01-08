// // src/data/productos.js
export const products = {
  remeras: [
    {
      id: 1,
      name: "Remera Koala",
      description: "Remera de algodón koala",
      price: 500,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/0000FF"],
      stock: 1000,
      size: ["S", "M", "L", "XL"],
      typeId: 1,
      subTypeId: 101,
      fabric: "100% algodón",
      colors: ["#FC7D62", "#90FC62"],
    },
    {
      id: 2,
      name: "Remera Estampada bici",
      description: "Remera con estampado exclusivo.",
      price: 600,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/FF0000"],
      stock: 5,
      size: ["S", "M", "L"],
      typeId: 1,
      subTypeId: 102,
      fabric: "Algodón y poliéster",
      colors: ["red", "darkgreen"],
    },
  ],
  chombas: [
    {
      id: 3,
      name: "Chomba Clásica",
      description: "Chomba clásica de algodón peinado.",
      price: 700,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/00FF00"],
      stock: 50,
      size: ["M", "L", "XL"],
      typeId: 2,
      subTypeId: 201,
      fabric: "Algodón peinado",
      colors: ["blue", "white"],
    },
  ],
  buzos: [
    {
      id: 4,
      name: "Buzo Deportivo",
      description: "Buzo ideal para actividades al aire libre.",
      price: 1200,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/0000FF"],
      stock: 30,
      size: ["S", "M", "L", "XL"],
      typeId: 3,
      subTypeId: 301,
      fabric: "Algodón y poliéster",
      colors: ["black", "gray"],
    },
  ],
  camisasHawaianas: [
    {
      id: 5,
      name: "Camisa Hawaiana",
      description: "Camisa con estampado tropical.",
      price: 800,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/FFA500"],
      stock: 20,
      size: ["M", "L", "XL"],
      typeId: 4,
      subTypeId: 401,
      fabric: "Viscosa",
      colors: ["yellow", "orange"],
    },
  ],
  sweaters: [
    {
      id: 6,
      name: "Sweater de Lana",
      description: "Sweater ideal para el invierno.",
      price: 1500,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/8B0000"],
      stock: 15,
      size: ["M", "L"],
      typeId: 5,
      subTypeId: 501,
      fabric: "Lana 100%",
      colors: ["red", "navy"],
    },
  ],
  pantalones: [
    {
      id: 7,
      name: "Pantalón de Vestir",
      description: "Pantalón elegante y cómodo.",
      price: 1300,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/808080"],
      stock: 25,
      size: ["38", "40", "42", "44"],
      typeId: 6,
      subTypeId: 601,
      fabric: "Gabardina",
      colors: ["black", "gray"],
    },
  ],
  jeans: [
    {
      id: 8,
      name: "Jean Clásico",
      description: "Jean azul clásico.",
      price: 1100,
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150/00008B"],
      stock: 40,
      size: ["38", "40", "42", "44"],
      typeId: 7,
      subTypeId: 701,
      fabric: "Denim",
      colors: ["blue", "black"],
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
