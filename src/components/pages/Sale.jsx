import React from 'react';
import {  productos } from "module";
import { getProducts } from "../../data/productos";
import ProductCard from "./Products";
import Loader from "../shared/Loader";
function  Sale() {
    return ( 
        <h1>hola estos osn</h1>
        <ProductCard key={product.id} product={product}/>

     );
}

export default  Sale;