import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer.jsx";
import Header from "../Components/Header/Header.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import { GlobalStyle } from "../Style/globalStyle.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
