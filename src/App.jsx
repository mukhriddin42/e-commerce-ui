import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./components/Layout/Layout";
import LayoutAbout from "./components/LayoutAbout/LayoutAbout";
// import About from "./pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAbout />}>
            <Route path="/" element={<h1>Home</h1>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/home" element={<About />}></Route>
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>home</h1>}></Route>
            <Route path="aboutus" element={<h1>About Us</h1>}></Route>
            <Route path="myaccount" element={<h1>My Account</h1>}></Route>
            <Route path="wishlist" element={<h1>Wishlist</h1>}></Route>
            <Route
              path="ordertracking"
              element={<h1>Order Tracking</h1>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
