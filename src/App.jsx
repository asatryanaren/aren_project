import React from "react";
import s from "./App.module.css";
import NotFound from "./components/Pages/NotFound/NotFound";
import Login from "./components/Pages/Login/Login";
import User from "./components/Pages/User/User";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Pages/Blog/Blog";
import Product from "./components/Pages/Product/Product";
import DashBorad from "./components/Pages/DashBoard/DashBoard";
import Layout from "./components/Layout";
import PopupNewUser from "./components/openWindow/PopupNewUser/PopupNewUser";

function App() {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBorad />} />
          <Route path="/user" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <PopupNewUser />
    </div>
  );
}

export default App;
