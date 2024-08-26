import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Order from "./Order";

export default function Frontend() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="menu" element={<Order />} />
        <Route path="*" element={<h1> Page Not Found </h1>} />
      </Routes>
      <Footer />
    </>
  );
}
