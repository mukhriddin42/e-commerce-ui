import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<h1>home</h1>}></Route>
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/myaccount" element={<h1>My Account</h1>}></Route>
            <Route path="/wishlist" element={<h1>Wishlist</h1>}></Route>
            <Route
              path="/ordertracking"
              element={<h1>Order Tracking</h1>}
            ></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
