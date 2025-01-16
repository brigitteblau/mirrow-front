// src/routes/AppRoutes.jsx
import SingUp from "../components/user/SingUp";
import Login from "../components/user/Login";
import ProductList from "../components/products/ProductsList";
import ProductDetail from "../components/products/ProductDetail";
import ResetPassword from "../components/user/ResetPassword";
import Cart from "../components/cart/Cart";
import Home from "../components/pages/Home";
import Guide from "../components/pages/Guide";
import Sale from "../components/pages/Sale";
const routes = [
  { path: "/", element: <Home/> },
  { path: "/sing-up", element: <SingUp /> },
  { path: "/log-in", element: <Login /> },
  { path: "/coleccion", element: <ProductList /> },
  { path: "/producto/:id", element: <ProductDetail /> },
  { path: "/tiendas", element: <div>Tiendas Page</div> },
  { path: "/promociones", element: <Sale/> },
  { path: "/guia-de-tallas", element: <Guide/> },
  { path: "/cambio-contraseña", element: <ResetPassword /> },
  { path: "/cart", element: <Cart /> },
];

export default routes;
